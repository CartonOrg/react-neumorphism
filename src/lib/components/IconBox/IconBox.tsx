import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { StyledBlankIconBox, StyledDefaultIconBox } from "./iconBox.styles";
interface IconBoxProps {
  inset?: boolean;
  rounded?: boolean;
  border?: boolean;
  size?: Sizes;
  width?: string;
  height?: string;
  icon: React.ReactNode;
  blank?: boolean;
  iconBoxStyle?: React.CSSProperties;
}
const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  (
    {
      inset = false,
      rounded = false,
      border = false,
      blank = false,
      size = "sm",
      width,
      height,
      icon,
      iconBoxStyle,
      ...rest
    },
    ref,
  ) => {
    if (blank) {
      return (
        <StyledBlankIconBox
          ref={ref}
          $size={size}
          $iconBoxStyle={iconBoxStyle}
          {...rest}
        >
          {icon}
        </StyledBlankIconBox>
      );
    }

    return (
      <StyledDefaultIconBox
        ref={ref}
        $size={size}
        $width={width}
        $height={height}
        $inset={inset}
        $rounded={rounded}
        $border={border}
        $iconBoxStyle={iconBoxStyle}
        {...rest}
      >
        {icon}
      </StyledDefaultIconBox>
    );
  },
);

export default withTheme(IconBox);
