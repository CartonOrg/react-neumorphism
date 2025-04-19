import { css, Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { RADIO_STYLE } from "./radio.styles";
import Typography from "../Typography/Typography";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputSize?: Sizes;
  theme: Theme;
}

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  inputSize = "sm",
  theme,
  ...rest
}) => {
  const radioStyle = RADIO_STYLE[inputSize];
  const { border, background, shadowInset, fontColor } = theme;

  return (
    <div
      css={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

        "input + label:after": {
          opacity: 0,
        },

        "input:checked + label:after": {
          opacity: 1,
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
        type="radio"
        {...rest}
      />
      <label
        htmlFor={id}
        css={css({
          ...radioStyle.label,

          "&:before, &:after": {
            content: "' '",
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 0,
            background,
            border,
            transition: "all 0.2s ease-in-out",
            borderRadius: "100%",
          },
          "&:before": {
            boxShadow: shadowInset,
            ...radioStyle.before,
          },
          "&:after": {
            ...radioStyle.after,
            content: "''",
            border: "unset",
            background: fontColor,
          },
        })}
      >
        <Typography size={inputSize}>{label}</Typography>
      </label>
    </div>
  );
};

export default withTheme(Radio);
