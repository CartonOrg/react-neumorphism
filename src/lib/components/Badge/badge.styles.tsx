import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

export const BADGE_STYLES: Record<Sizes, React.CSSProperties> = {
  xs: {
    padding: `${spacings.xs} ${spacings.sm}`,
    fontSize: "10px",
    borderRadius: "4px",
  },
  sm: {
    padding: `${spacings.sm} ${spacings.md}`,
    fontSize: "12px",
    borderRadius: "6px",
  },
  md: {
    padding: `${spacings.md} ${spacings.lg}`,
    fontSize: "14px",
    borderRadius: "8px",
  },
  lg: {
    padding: `${spacings.lg} ${spacings.xl}`,
    fontSize: "16px",
    borderRadius: "10px",
  },
  xl: {
    padding: `${spacings.xl} ${spacings.xl}`,
    fontSize: "18px",
    borderRadius: "12px",
  },
};

export const StyledBadge = styled.div<{ $inset: boolean; $size: Sizes }>`
  ${({ theme, $inset, $size }) => ({
    ...BADGE_STYLES[$size],
    background: theme.background,
    borderRadius: theme.borderRadius,
    border: theme.border,
    height: "fit-content",
    width: "fit-content",
    boxShadow: $inset ? theme.shadowInset : theme.shadow,
  })}
`;
