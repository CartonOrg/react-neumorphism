import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { getSpacing, Sizes } from "../../constants";

export const RADIO_STYLE: Record<
  Sizes,
  {
    label: {
      paddingLeft: string;
      lineHeight: string;
      fontSize: string;
    };
    before: {
      width: string;
      height: string;
    };
    after: {
      width: string;
      height: string;
      top: string;
      left: string;
    };
  }
> = {
  xs: {
    label: {
      paddingLeft: getSpacing(7),
      lineHeight: "18px",
      fontSize: "12px",
    },
    before: {
      width: "16px",
      height: "16px",
    },
    after: {
      width: "8.5px",
      height: "8.5px",
      top: "5px",
      left: "5px",
    },
  },
  sm: {
    label: {
      paddingLeft: getSpacing(8),
      lineHeight: "22px",
      fontSize: "14px",
    },
    before: {
      width: "20px",
      height: "20px",
    },
    after: {
      width: "10px",
      height: "10px",
      top: "6px",
      left: "6px",
    },
  },
  md: {
    label: {
      paddingLeft: getSpacing(9),
      lineHeight: "26px",
      fontSize: "16px",
    },
    before: {
      width: "24px",
      height: "24px",
    },
    after: {
      width: "12px",
      height: "12px",
      top: "7px",
      left: "7px",
    },
  },
  lg: {
    label: {
      paddingLeft: getSpacing(10),
      lineHeight: "30px",
      fontSize: "18px",
    },

    before: {
      width: "28px",
      height: "28px",
    },
    after: {
      width: "14px",
      height: "14px",
      top: "8px",
      left: "8px",
    },
  },
  xl: {
    label: {
      paddingLeft: getSpacing(11),
      lineHeight: "34px",
      fontSize: "20px",
    },

    before: {
      width: "32px",
      height: "32px",
    },
    after: {
      width: "16px",
      height: "16px",
      top: "9px",
      left: "9px",
    },
  },
};

export const StyledRadioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  input + label:after {
    opacity: 0;
  }

  input:checked + label:after {
    opacity: 1;
  }

  input:disabled + label {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

export const StyledRadioLabel = styled.label<{
  $inputSize: Sizes;
}>`
  ${({ $inputSize }) => ({ ...RADIO_STYLE[$inputSize].label })}

  &:before,
  &:after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.background};
    border: ${({ theme }) => theme.border};
    transition: all 0.2s ease-in-out;
    border-radius: 100%;
  }

  &:before {
    box-shadow: ${({ theme }) => theme.shadowInset};
    ${({ $inputSize }) => ({ ...RADIO_STYLE[$inputSize].before })}
  }

  &:after {
    ${({ $inputSize }) => ({ ...RADIO_STYLE[$inputSize].after })}
    content: "";
    border: unset;
    background: ${({ theme }) => theme.fontColor};
  }
`;
