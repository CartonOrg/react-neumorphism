import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";
import { IconStyle } from "../../types";

export const INPUT_STYLES: Record<
  Sizes,
  {
    container: React.CSSProperties;
    inputContainer: React.CSSProperties;
    label: React.CSSProperties;
    input: React.CSSProperties;
    icon: React.CSSProperties;
  }
> = {
  xs: {
    container: {
      fontSize: "10px",
      gap: spacings.xs,
    },
    label: {
      fontSize: "10px",
    },
    inputContainer: {},
    input: {
      fontSize: "10px",
      padding: `0 ${spacings.sm}`,
    },
    icon: {
      width: "12px",
      height: "12px",
    },
  },
  sm: {
    container: {
      fontSize: "12px",
      gap: spacings.sm,
    },
    label: {
      fontSize: "12px",
    },
    inputContainer: {},
    input: {
      fontSize: "12px",
      padding: `0 ${spacings.sm}`,
    },
    icon: {
      width: "14px",
      height: "14px",
    },
  },
  md: {
    container: {
      fontSize: "14px",
      gap: spacings.sm,
    },
    label: {
      fontSize: "14px",
    },
    inputContainer: {},
    input: {
      fontSize: "14px",
      padding: `0 ${spacings.md}`,
    },
    icon: {
      width: "16px",
      height: "16px",
    },
  },
  lg: {
    container: {
      fontSize: "16px",
      gap: spacings.md,
    },
    label: {
      fontSize: "16px",
    },
    inputContainer: {},
    input: {
      fontSize: "16px",
      padding: `0 ${spacings.md}`,
    },
    icon: {
      width: "18px",
      height: "18px",
    },
  },
  xl: {
    container: {
      fontSize: "18px",
      gap: spacings.lg,
    },
    label: {
      fontSize: "18px",
    },
    inputContainer: {},
    input: {
      padding: `0 ${spacings.lg}`,
      fontSize: "18px",
    },
    icon: {
      width: "20px",
      height: "20px",
    },
  },
};

export const OUTLINE_INPUT_CONTAINER_STYLE: Record<
  Sizes,
  {
    inputContainer: React.CSSProperties;
  }
> = {
  xs: {
    inputContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
  },
  sm: {
    inputContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
  },
  md: {
    inputContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
  },
  lg: {
    inputContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
  },
  xl: {
    inputContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
  },
};

export const StyledInputLabel = styled.label<{ $inputSize: Sizes }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacings.sm};
  ${({ $inputSize }) => ({ ...INPUT_STYLES[$inputSize].container })}
`;

export const StyledInputContainer = styled.div<{
  $inputSize: Sizes;
  $iconStyle: IconStyle;
  $hasIconLeft?: boolean;
  $hasIconRight?: boolean;
  $disabled?: boolean;
  $inputContainerStyle?: React.CSSProperties;
}>`
  display: flex;
  align-items: center;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadowInset};
  ${({ $inputSize, $iconStyle }) => ({
    ...($iconStyle === "outline"
      ? { ...OUTLINE_INPUT_CONTAINER_STYLE[$inputSize].inputContainer }
      : { ...INPUT_STYLES[$inputSize].inputContainer }),
  })}
  ${({ $disabled }) =>
    $disabled === true && {
      opacity: 0.5,
      cursor: "not-allowed",
    }}
   ${({ $hasIconLeft, $hasIconRight }) =>
    ($hasIconRight === true && $hasIconLeft === false) ||
    ($hasIconRight === false && $hasIconLeft === false)
      ? {
          paddingLeft: 0,
        }
      : {}}
  ${({ $inputContainerStyle }) => ({ ...$inputContainerStyle })}
`;

export const StyledInput = styled.input<{
  $inputSize: Sizes;
  $inputStyle?: React.CSSProperties;
}>`
  ${({ $inputSize }) => ({ ...INPUT_STYLES[$inputSize].input })}
  outline: unset;
  border: unset;
  background: transparent;
  text-align: left;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.fontColor};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ $inputStyle }) => ({ ...$inputStyle })}
`;
