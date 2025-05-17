import { css, Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { BOX_STYLES } from "./box.styles";

type BoxProps = {
  inset?: boolean;
  size?: Sizes;
  theme: Theme;
  children?: React.ReactNode;
} & Partial<React.HTMLAttributes<HTMLDivElement>>;

const Box: React.FC<BoxProps> = ({
  theme,
  inset = true,
  size = "sm",
  children,
  ...rest
}) => {
  const { border, borderRadius, background, shadowInset, shadow } = theme;
  const currentBoxStyle = BOX_STYLES[size];

  return (
    <div
      css={css({
        ...currentBoxStyle,
        ...(inset && {
          boxShadow: shadowInset,
        }),
        border,
        borderRadius,
        background,
        boxShadow: inset ? shadowInset : shadow,
        width: "100%",
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default withTheme(Box);
