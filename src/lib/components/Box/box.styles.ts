import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

export const BOX_STYLES: Record<Sizes, React.CSSProperties> = {
  xs: {
    padding: `${spacings.xs} ${spacings.sm}`,
  },
  sm: {
    padding: `${spacings.sm} ${spacings.md}`,
  },
  md: {
    padding: `${spacings.md} ${spacings.lg}`,
  },
  lg: {
    padding: `${spacings.lg} ${spacings.xl}`,
  },
  xl: {
    padding: `${spacings.xl} ${spacings.xl}`,
  },
};

export const StyledBox = styled.div<{
  $inset?: boolean;
  $size: Sizes;
  $boxStyle?: React.CSSProperties;
}>`
  width: 100%;
  boxshadow: ${({ theme, $inset }) =>
    $inset === true ? theme.shadowInset : theme.shadow};
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  ${({ $size, $boxStyle }) => ({
    ...BOX_STYLES[$size],
    ...$boxStyle,
  })}
`;
