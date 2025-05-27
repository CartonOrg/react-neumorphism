import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

export const DROPDOWN_STYLES: Record<
  Sizes,
  {
    headerContainer: React.CSSProperties;
    contentContainer: React.CSSProperties;
    item: React.CSSProperties;
  }
> = {
  xs: {
    headerContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
    contentContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
    item: {
      padding: `${spacings.xs} 0`,
    },
  },
  sm: {
    headerContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
    contentContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
    item: {
      padding: `${spacings.sm} 0`,
    },
  },
  md: {
    headerContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
    contentContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
    item: {
      padding: `${spacings.md} 0`,
    },
  },
  lg: {
    headerContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
    contentContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
    item: {
      padding: `${spacings.lg} 0`,
    },
  },
  xl: {
    headerContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
    contentContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
    item: {
      padding: `${spacings.xl} 0`,
    },
  },
};

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledHeader = styled.div<{
  $isPlaceholder: boolean;
  $size: Sizes;
  $dropdownHeaderStyle?: React.CSSProperties;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadowInset};
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  cursor: pointer;
  opacity: ${({ $isPlaceholder }) => ($isPlaceholder ? 0.5 : 1)};
  ${({ $size, $dropdownHeaderStyle }) => ({
    ...DROPDOWN_STYLES[$size].headerContainer,
    ...$dropdownHeaderStyle,
  })}
`;

export const StyledDropdownContent = styled.div<{
  $isOpen: boolean;
}>`
  position: absolute;
  bottom: -${spacings.xs};
  transform: translateY(100%);
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  cursor: pointer;
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : 0)};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 99999;
`;

export const StyledContentWrapper = styled.div<{
  $size: Sizes;
  $dropdownContentStyle?: React.CSSProperties;
}>`
  box-shadow: ${({ theme }) => theme.shadowInset};
  ${({ $size, $dropdownContentStyle }) => ({
    ...DROPDOWN_STYLES[$size].contentContainer,
    ...$dropdownContentStyle,
  })}
`;

export const StyledOptionItem = styled.div<{
  $size: Sizes;
  $dropdownOptionLabelStyle?: React.CSSProperties;
}>`
  ${({ $size, $dropdownOptionLabelStyle }) => ({
    ...DROPDOWN_STYLES[$size].item,
    ...$dropdownOptionLabelStyle,
  })}
`;
