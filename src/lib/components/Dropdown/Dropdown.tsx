import { css, withTheme } from "@emotion/react";
import { forwardRef, useRef, useState } from "react";
import {
  StyledContainer,
  StyledContentWrapper,
  StyledDropdownContent,
  StyledHeader,
  StyledOptionItem,
} from "./dropdown.styles";
import { Sizes } from "../../constants";
import { CarretDownIcon } from "../../icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import Typography from "../Typography/Typography";
import { useForwardRef } from "../../hooks/useForwardRef";

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
  dropdownHeaderLabelStyle?: React.CSSProperties;
  dropdownHeaderStyle?: React.CSSProperties;
  dropdownContentStyle?: React.CSSProperties;
  dropdownOptionLabelStyle?: React.CSSProperties;
  dropdownOptionItemStyle?: React.CSSProperties;
}

const rotateOpenIconStyle = (open: boolean) =>
  css({
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  });

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      value,
      placeholder,
      options,
      onChange,
      size = "sm",
      dropdownHeaderLabelStyle,
      dropdownHeaderStyle,
      dropdownContentStyle,
      dropdownOptionLabelStyle,
      dropdownOptionItemStyle,
    },
    ref,
  ) => {
    const dropdownContainerRef = useForwardRef<HTMLDivElement>(ref);
    const dropdownHeaderRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState<string | undefined>(value);

    const currentOption = options.find(
      (option) => option.value === currentValue,
    );
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
      <StyledContainer ref={dropdownContainerRef}>
        <StyledHeader
          onClick={toggleDropdown}
          ref={dropdownHeaderRef}
          $isPlaceholder={displayPlaceholder}
          $size={size}
          $dropdownHeaderStyle={dropdownHeaderStyle}
        >
          <Typography size={size} labelStyle={dropdownHeaderLabelStyle}>
            {currentOption?.label ?? placeholder}
          </Typography>
          <CarretDownIcon customStyles={rotateOpenIconStyle(isOpen)} />
        </StyledHeader>
        <StyledDropdownContent onClick={toggleDropdown} $isOpen={isOpen}>
          <StyledContentWrapper
            $size={size}
            $dropdownContentStyle={dropdownContentStyle}
          >
            {options.map((option) => (
              <StyledOptionItem
                key={option.value}
                $size={size}
                onClick={(event) => handleOptionSelection(event, option)}
                $dropdownOptionLabelStyle={dropdownOptionItemStyle}
              >
                <Typography size={size} labelStyle={dropdownOptionLabelStyle}>
                  {option.label}
                </Typography>
              </StyledOptionItem>
            ))}
          </StyledContentWrapper>
        </StyledDropdownContent>
      </StyledContainer>
    );
  },
);

export default withTheme(Dropdown);
