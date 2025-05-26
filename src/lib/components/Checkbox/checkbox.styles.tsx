import styled from "@emotion/styled";
import { getSpacing, Sizes, spacings } from "../../constants";

const CHECKBOX_STYLE: Record<
  Sizes,
  {
    label: React.CSSProperties;
    beforeAfter: React.CSSProperties;
    before: React.CSSProperties;
    after: React.CSSProperties;
  }
> = {
  xs: {
    label: {
      paddingLeft: getSpacing(6),
      lineHeight: "18px",
      fontSize: "12px",
    },
    beforeAfter: {
      width: "16px",
      height: "16px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "4px",
      height: "8px",
      top: "3px",
      left: "6px",
    },
  },
  sm: {
    label: {
      paddingLeft: getSpacing(7),
      lineHeight: "22px",
      fontSize: "14px",
    },
    beforeAfter: {
      width: "20px",
      height: "20px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "5px",
      height: "10px",
      top: "4px",
      left: "8px",
    },
  },
  md: {
    label: {
      paddingLeft: getSpacing(8),
      lineHeight: "26px",
      fontSize: "16px",
    },
    beforeAfter: {
      width: "24px",
      height: "24px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "6px",
      height: "12px",
      top: "5px",
      left: "10px",
    },
  },
  lg: {
    label: {
      paddingLeft: getSpacing(9),
      lineHeight: "30px",
      fontSize: "18px",
    },
    beforeAfter: {
      width: "28px",
      height: "28px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "7px",
      height: "14px",
      top: "6px",
      left: "12px",
    },
  },
  xl: {
    label: {
      paddingLeft: getSpacing(10),
      lineHeight: "34px",
      fontSize: "20px",
    },
    beforeAfter: {
      width: "32px",
      height: "32px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "8px",
      height: "16px",
      top: "7px",
      left: "14px",
    },
  },
};

export const StyledCheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  input:checked + label:after {
    opacity: 1;
  }

  input + label:after {
    opacity: 0;
  }

  input:disabled + label {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledHiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

export const StyledCheckboxLabel = styled.label<{ $size: Sizes }>`
  ${({ theme, $size }) => ({
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    ...CHECKBOX_STYLE[$size].label,

    "&:before, &:after": {
      content: '" "',
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0,
      ...CHECKBOX_STYLE[$size].beforeAfter,
    },

    "&:before": {
      boxShadow: theme.shadowInset,
      ...CHECKBOX_STYLE[$size].before,
    },

    "&:after": {
      ...CHECKBOX_STYLE[$size].after,
      border: `2px solid ${theme.fontColor}`,
      borderTop: "none",
      borderLeft: "none",
      transform: "rotate(45deg)",
      background: "transparent",
    },
  })}
`;
