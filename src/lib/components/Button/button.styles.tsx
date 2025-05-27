import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

export const BUTTON_STYLES: Record<
  Sizes,
  {
    container: CSSProperties;
    custom: {
      padding: string;
      iconSize: string;
    };
  }
> = {
  xs: {
    container: {
      padding: `${spacings.xs} ${spacings.sm}`,
      fontSize: "10px",
      gap: spacings.xs,
    },
    custom: {
      iconSize: "12px",
      padding: `${spacings.xs} ${spacings.xs}`,
    },
  },
  sm: {
    container: {
      padding: `${spacings.sm} ${spacings.md}`,
      fontSize: "12px",
      gap: spacings.sm,
    },
    custom: {
      iconSize: "14px",
      padding: `${spacings.sm} ${spacings.sm}`,
    },
  },
  md: {
    container: {
      padding: `${spacings.md} ${spacings.lg}`,
      fontSize: "14px",
      gap: spacings.sm,
    },
    custom: {
      iconSize: "16px",
      padding: `${spacings.md} ${spacings.md}`,
    },
  },
  lg: {
    container: {
      padding: `${spacings.lg} ${spacings.xl}`,
      fontSize: "16px",
      gap: spacings.md,
    },
    custom: {
      iconSize: "18px",
      padding: `${spacings.lg} ${spacings.lg}`,
    },
  },
  xl: {
    container: {
      padding: `${spacings.xl} ${spacings.xl}`,
      fontSize: "18px",
      gap: spacings.lg,
    },
    custom: {
      iconSize: "20px",
      padding: `${spacings.xl} ${spacings.xl}`,
    },
  },
};

export const StyledButton = styled.button<{
  $size: Sizes;
  $rounded: boolean;
  $border: boolean;
  $hasIcon: boolean;
  $hasOnlyIcon: boolean;
  $isLoading: boolean;
  $buttonStyle?: CSSProperties;
}>`
  ${({ theme, $size }) => ({
    ...BUTTON_STYLES[$size].container,
    outline: "unset",
    background: theme.background,
    boxShadow: theme.shadow,
    width: "fit-content",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
  })}

  border: ${({ theme, $border }) => ($border ? theme.border : "unset")};
  border-radius: ${({ theme, $rounded }) =>
    $rounded ? "50px" : theme.borderRadius};
  gap: ${({ $size, $hasIcon, $isLoading }) =>
    $hasIcon || $isLoading ? BUTTON_STYLES[$size].container.gap : "0"};
  padding: ${({ $size, $hasOnlyIcon }) =>
    $hasOnlyIcon
      ? BUTTON_STYLES[$size].custom.padding
      : BUTTON_STYLES[$size].container.padding};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowInset};
  }

  & > svg {
    width: ${({ $size }) => BUTTON_STYLES[$size].custom.iconSize};
    height: ${({ $size }) => BUTTON_STYLES[$size].custom.iconSize};
  }

  ${({ $buttonStyle }) => ({ ...$buttonStyle })}
`;
