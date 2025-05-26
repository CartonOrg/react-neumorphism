import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

const TABLES_STYLES: Record<Sizes, React.CSSProperties> = {
  xs: {
    padding: `${spacings.sm} ${spacings.md}`,
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

export const StyledTable = styled.table<{
  $inset?: boolean;
}>`
  position: relative;
  width: fit-content;
  background: unset;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ $inset, theme }) =>
    $inset === true ? theme.shadowInset : theme.shadow};
`;

export const StyledTBody = styled.tbody<{
  $inset: boolean;
}>`
  box-shadow: ${({ $inset, theme }) =>
    $inset ? theme.shadowInset : theme.shadow};
`;

export const StyledTr = styled.tr`
  background: unset;
  border-bottom: ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.hoverBackground ?? "unset"};
  }

  * {
    background: unset;
  }
`;

export const StyledTd = styled.td<{ $size: Sizes }>`
  background: unset;
  padding: ${({ $size }) => TABLES_STYLES[$size].padding};
  text-align: left;
`;

export const StyledHeaderTd = styled(StyledTd)`
  font-weight: bold;
  text-transform: capitalize;
`;
