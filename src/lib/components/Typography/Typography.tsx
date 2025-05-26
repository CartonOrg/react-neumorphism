import { css, Theme, withTheme } from "@emotion/react";
import { defaultStyle } from "./typography.styles";
import { sizes, Sizes } from "../../constants";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyRef =
  | HTMLElement
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement;

type TypographyProps = {
  theme: Theme;
  children: React.ReactNode;
  size?: Sizes;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  ellipsis?: boolean;
  underSized?: boolean;
  overSized?: boolean;
  variant?: TypographyVariant;
  labelStyle?: React.CSSProperties;
} & React.HTMLAttributes<TypographyRef>;

const getSize = (
  size: Sizes,
  underSized: boolean,
  overSized: boolean,
): Sizes => {
  if (underSized) {
    const index = sizes.indexOf(size);

    return sizes[index <= 0 ? 0 : index - 1];
  }

  if (overSized) {
    const index = sizes.indexOf(size);

    return sizes[index >= sizes.length - 1 ? sizes.length - 1 : index + 1];
  }

  return size;
};

const Typography: React.FC<TypographyProps> = ({
  theme,
  children,
  size = "sm",
  variant = "span",
  bold = false,
  italic = false,
  underline = false,
  ellipsis = false,
  underSized = false,
  overSized = false,
  labelStyle,
  ...rest
}) => {
  const currentSize = getSize(size, underSized, overSized);
  const Component = variant;

  return (
    <Component
      css={[
        defaultStyle({
          theme,
          size: currentSize,
          bold,
          italic,
          underline,
          ellipsis,
        }),
        css({
          margin: 0,
          ...labelStyle,
        }),
      ]}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default withTheme(Typography);
