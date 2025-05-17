import { css, Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { CHECKBOX_STYLE } from "./checkbox.styles";
import Typography from "../Typography/Typography";

type CheckboxProps = {
  label: string;
  inputSize?: Sizes;
  theme: Theme;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  inputSize = "sm",
  theme,
  ...rest
}) => {
  const checkboxStyle = CHECKBOX_STYLE[inputSize];
  const { border, background, shadowInset, fontColor } = theme;

  return (
    <div
      css={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

        "input:checked + label:after": {
          opacity: 1,
        },
        "input + label:after": {
          opacity: 0,
        },
        "input:disabled + label": {
          opacity: 0.5,
          cursor: "not-allowed",
        },
      })}
    >
      <input
        css={css({
          position: "absolute",
          opacity: 0,
          visibility: "hidden",
        })}
        id={id}
        type="checkbox"
        {...rest}
      />
      <label
        htmlFor={id}
        css={css({
          ...checkboxStyle.label,

          "&:before, &:after": {
            content: "' '",
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 0,
            background,
            border,
            transition: "all 0.2s ease-in-out",
            ...checkboxStyle.beforeAfter,
          },
          "&:before": {
            boxShadow: shadowInset,
            ...checkboxStyle.before,
          },
          "&:after": {
            ...checkboxStyle.after,
            content: "''",
            border: `2px solid ${fontColor}`,
            borderTop: "0",
            borderLeft: "0",
            transform: "rotate(45deg)",
            background: "transparent",
          },
        })}
      >
        <Typography size={inputSize}>{label}</Typography>
      </label>
    </div>
  );
};

export default withTheme(Checkbox);
