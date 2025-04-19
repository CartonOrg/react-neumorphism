import { css, Theme, withTheme } from "@emotion/react";
import { useRef, useState } from "react";
import { DROPDOWN_STYLES } from "./dropdown.styles";
import { Sizes, spacings } from "../../constants";
import { CarretDownIcon } from "../../icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import Typography from "../Typography/Typography";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  value?: string;
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
  size?: Sizes;
  theme: Theme;
}

const rotateOpenIconStyle = (open: boolean) =>
  css({
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  });

const Dropdown: React.FC<DropdownProps> = ({
  value,
  placeholder,
  options,
  onChange,
  size = "sm",
  theme,
}) => {
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownHeaderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<string | undefined>(value);
  const { shadowInset, background, borderRadius, border } = theme;
  const currentDropdownStyles = DROPDOWN_STYLES[size];

  const currentOption = options.find((option) => option.value === currentValue);
  const displayPlaceholder = currentOption === undefined;

  const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownContainerRef, () => setIsOpen(false));

  const handleOptionSelection = (
    event: React.MouseEvent<HTMLDivElement>,
    option: Option,
  ) => {
    event.stopPropagation();
    setCurrentValue(option.value);
    onChange(option.value);
    toggleDropdown(event);
  };

  return (
    <div
      ref={dropdownContainerRef}
      css={css({
        width: "100%",
        position: "relative",
      })}
    >
      <div
        onClick={toggleDropdown}
        ref={dropdownHeaderRef}
        css={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: shadowInset,
          backgroundColor: background,
          border,
          borderRadius,
          width: "100%",
          cursor: "pointer",
          ...currentDropdownStyles.headerContainer,
          ...(displayPlaceholder && {
            opacity: 0.5,
          }),
        })}
      >
        <Typography size={size}>
          {currentOption?.label ?? placeholder}
        </Typography>
        <CarretDownIcon customStyles={rotateOpenIconStyle(isOpen)} />
      </div>
      <div
        onClick={toggleDropdown}
        css={css({
          position: "absolute",
          bottom: `-${spacings.xs}`,
          transform: "translateY(100%)",
          backgroundColor: background,
          borderRadius,
          width: "100%",
          cursor: "pointer",
          maxHeight: isOpen ? "300px" : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          zIndex: 1,
        })}
      >
        <div
          css={css({
            boxShadow: shadowInset,
            ...currentDropdownStyles.contentContainer,
          })}
        >
          {options.map((option) => (
            <div
              key={option.value}
              css={css({
                ...currentDropdownStyles.item,
              })}
              onClick={(event) => handleOptionSelection(event, option)}
            >
              <Typography size={size}>{option.label}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTheme(Dropdown);
