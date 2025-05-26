import { css, Theme, withTheme } from "@emotion/react";
import { defaultStyle } from "./typography.styles";
import { sizes, Sizes } from "../../constants";

interface TypographyProps {
  theme: Theme;
  children: React.ReactNode;
  size?: Sizes;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  ellipsis?: boolean;
  paragraph?: boolean;
  underSized?: boolean;
  overSized?: boolean;
}

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
  bold = false,
  italic = false,
  underline = false,
  ellipsis = false,
  paragraph = false,
  underSized = false,
  overSized = false,
}): React.ReactNode => {
  const currentSize = getSize(size, underSized, overSized);

  if (paragraph) {
    return (
      <p
        css={[
          defaultStyle({
            theme,
            size: currentSize,
            bold,
            italic,
            underline,
          }),
          css({
            margin: 0,
          }),
        ]}
      >
        {children}
      </p>
    );
  }

  return (
    <span
      css={defaultStyle({
        theme,
        size: currentSize,
        bold,
        italic,
        underline,
        ellipsis,
      })}
    >
      {children}
    </span>
  );
};

export default withTheme(Typography);
