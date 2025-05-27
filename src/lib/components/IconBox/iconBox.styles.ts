import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

const ICON_BOX_STYLES: Record<
  Sizes,
  React.CSSProperties & { iconSize: string }
> = {
  xs: {
    width: "30px",
    height: "30px",
    padding: spacings.sm,
    iconSize: "10px",
  },
  sm: {
    width: "40px",
    height: "40px",
    padding: spacings.md,
    iconSize: "15px",
  },
  md: {
    width: "50px",
    height: "50px",
    padding: spacings.lg,
    iconSize: "20px",
  },
  lg: {
    width: "60px",
    height: "60px",
    padding: spacings.xl,
    iconSize: "25px",
  },
  xl: {
    width: "70px",
    height: "70px",
    padding: spacings.xl,
    iconSize: "30px",
  },
} as const;

export const StyledBlankIconBox = styled.div<{
  $size: Sizes;
  $iconBoxStyle?: React.CSSProperties;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: ${({ $size }) => ICON_BOX_STYLES[$size].iconSize};
    height: ${({ $size }) => ICON_BOX_STYLES[$size].iconSize};
  }
  ${({ $iconBoxStyle }) => ({ ...$iconBoxStyle })}
`;

export const StyledDefaultIconBox = styled.div<{
  $size: Sizes;
  $width?: string;
  $height?: string;
  $inset?: boolean;
  $rounded?: boolean;
  $border?: boolean;
  $iconBoxStyle?: React.CSSProperties;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.background};
  border-radius: ${({ $rounded, theme }) =>
    $rounded === true ? "50%" : theme.borderRadius};
  width: ${({ $size = "md", $width }) =>
    $width ?? ICON_BOX_STYLES[$size].width};
  height: ${({ $size = "md", $height }) =>
    $height ?? ICON_BOX_STYLES[$size].height};
  padding: ${({ $size = "md" }) => ICON_BOX_STYLES[$size].padding};
  border: ${({ $border, theme }) => ($border === true ? theme.border : "none")};
  box-shadow: ${({ $inset, theme }) =>
    $inset === true ? theme.shadowInset : theme.shadow};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: ${({ $size }) => ICON_BOX_STYLES[$size].iconSize};
    height: ${({ $size }) => ICON_BOX_STYLES[$size].iconSize};
  }
  ${({ $iconBoxStyle }) => ({ ...$iconBoxStyle })}
`;
