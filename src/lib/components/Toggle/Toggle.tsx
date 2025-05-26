import { css, Theme, withTheme } from "@emotion/react";
import { useRef } from "react";
import { Sizes, spacings } from "../../constants";
import { TOGGLE_SIZES } from "./toggle.styles";
import Typography from "../Typography/Typography";

interface ToggleProps {
  id?: string;
  label?: string;
  size?: Sizes;
  rounded?: boolean;
  border?: boolean;
  checked?: boolean;
  disabled?: boolean;
  icons?: {
    checkedIcon: React.ReactNode;
    uncheckedIcon: React.ReactNode;
  };
  theme: Theme;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  size = "sm",
  rounded = false,
  border = false,
  checked = false,
  icons,
  theme,
  onChange,
  disabled = false,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    activeBackgroundColor,
    borderRadius,
    shadow,
    shadowInset,
    background,
    border: borderStyle,
  } = theme;
  const toggleSizeStyles = TOGGLE_SIZES[size];

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    inputRef.current?.click();
  };

  const selectedBackgroundColor = checked ? activeBackgroundColor : background;

  const hasIcon =
    icons?.checkedIcon !== undefined && icons.uncheckedIcon !== undefined;

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: spacings.lg,
      })}
    >
      {label !== undefined ? (
        <label htmlFor={id}>
          <Typography size={size}>{label}</Typography>
        </label>
      ) : null}
      <div
        css={css({
          position: "relative",
          cursor: "pointer",
          background: selectedBackgroundColor,
          borderRadius: rounded ? "50px" : borderRadius,
          boxShadow: shadowInset,
          ...toggleSizeStyles.container,
          ...(border && {
            border: borderStyle,
          }),
          ...(disabled && {
            opacity: 0.5,
            cursor: "not-allowed",
          }),
        })}
      >
        <input
          id={id}
          name={id}
          ref={inputRef}
          type="checkbox"
          checked={checked}
          css={css({
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            ...(disabled && {
              cursor: "not-allowed",
            }),
          })}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <div
          onClick={triggerToggle}
          css={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            background,
            borderRadius: rounded ? "50px" : borderRadius,
            boxShadow: shadow,
            ...(border && {
              border: borderStyle,
            }),
            ...toggleSizeStyles.toggler,
            transform: checked
              ? `translate(calc(${toggleSizeStyles.container.width} - ${toggleSizeStyles.toggler.width}), calc(100% - ${toggleSizeStyles.custom.togglerTransformY}))`
              : `translate(0%, calc(100% - ${toggleSizeStyles.custom.togglerTransformY}))`,
            transition: "all 0.25s linear",
            "& > svg": {
              width: toggleSizeStyles.custom.iconSize,
              height: toggleSizeStyles.custom.iconSize,
            },
            ...(disabled && {
              cursor: "not-allowed",
            }),
          })}
        >
          {hasIcon && (checked ? icons.checkedIcon : icons.uncheckedIcon)}
        </div>
      </div>
    </div>
  );
};

export default withTheme(Toggle);
