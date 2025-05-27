import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

export const TOGGLE_SIZES: Record<
  Sizes,
  {
    container: React.CSSProperties;
    toggler: React.CSSProperties;
    custom: {
      togglerTransformY: string;
      iconSize: string;
      labelFontSize: string;
    };
  }
> = {
  xs: {
    container: {
      width: "50px",
      height: "10px",
    },
    toggler: {
      width: "20px",
      height: "20px",
    },
    custom: {
      togglerTransformY: "25px",
      iconSize: "8px",
      labelFontSize: "10px",
    },
  },
  sm: {
    container: {
      width: "60px",
      height: "15px",
    },
    toggler: {
      width: "25px",
      height: "25px",
    },
    custom: {
      togglerTransformY: "30px",
      iconSize: "10px",
      labelFontSize: "12px",
    },
  },
  md: {
    container: {
      width: "70px",
      height: "20px",
    },
    toggler: {
      width: "30px",
      height: "30px",
    },
    custom: {
      togglerTransformY: "35px",
      iconSize: "12.5px",
      labelFontSize: "14px",
    },
  },
  lg: {
    container: {
      width: "80px",
      height: "25px",
    },
    toggler: {
      width: "35px",
      height: "35px",
    },
    custom: {
      togglerTransformY: "40px",
      iconSize: "15px",
      labelFontSize: "16px",
    },
  },
  xl: {
    container: {
      width: "100px",
      height: "30px",
    },
    toggler: {
      width: "40px",
      height: "40px",
    },
    custom: {
      togglerTransformY: "45px",
      iconSize: "20px",
      labelFontSize: "18px",
    },
  },
};

export const StyledToggleContainer = styled.div<{
  $toggleStyle?: React.CSSProperties;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacings.lg};
  ${({ $toggleStyle }) => ({ ...$toggleStyle })}
`;

export const StyledToggleWrapper = styled.div<{
  $size: Sizes;
  $rounded: boolean;
  $border: boolean;
  $checked: boolean;
  $disabled: boolean;
}>`
  position: relative;
  cursor: pointer;
  background: ${({ $checked, theme }) =>
    $checked ? theme.activeBackgroundColor : theme.background};
  border-radius: ${({ $rounded, theme }) =>
    $rounded ? "50px" : theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadowInset};
  ${({ $border, theme }) => $border && `border: ${theme.border};`}
  ${({ $size }) => ({ ...TOGGLE_SIZES[$size].container })}
  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export const StyledToggleInput = styled.input<{ $disabled: boolean }>`
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`;

export const StyledToggleButton = styled.div<{
  $size: Sizes;
  $rounded: boolean;
  $border: boolean;
  $checked: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.background};
  border-radius: ${({ $rounded, theme }) =>
    $rounded ? "50px" : theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  width: ${({ $size }) => TOGGLE_SIZES[$size].toggler.width};
  height: ${({ $size }) => TOGGLE_SIZES[$size].toggler.height};
  ${({ $border, theme }) => $border && `border: ${theme.border};`}
  transform: ${({ $checked, $size }) =>
    $checked
      ? `translate(calc(${TOGGLE_SIZES[$size].container.width} - ${TOGGLE_SIZES[$size].toggler.width}), calc(100% - ${TOGGLE_SIZES[$size].custom.togglerTransformY}))`
      : `translate(0%, calc(100% - ${TOGGLE_SIZES[$size].custom.togglerTransformY}))`};
  transition: all 0.25s linear;

  & > svg {
    width: ${({ $size }) => TOGGLE_SIZES[$size].custom.iconSize};
    height: ${({ $size }) => TOGGLE_SIZES[$size].custom.iconSize};
  }

  ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`;
