import styled from "@emotion/styled";
import { motion } from "motion/react";
import { Sizes, spacings } from "../../constants";

export const PROGRESS_BAR_STYLES: Record<
  Sizes,
  {
    bar: React.CSSProperties;
    title: React.CSSProperties;
  }
> = {
  xs: {
    bar: {
      height: "8px",
    },
    title: {
      gap: spacings.xs,
    },
  },
  sm: {
    bar: {
      height: "10px",
    },
    title: {
      gap: spacings.sm,
    },
  },
  md: {
    bar: {
      height: "15px",
    },
    title: {
      gap: spacings.md,
    },
  },
  lg: {
    bar: {
      height: "20px",
    },
    title: {
      gap: spacings.md,
    },
  },
  xl: {
    bar: {
      height: "25px",
    },
    title: {
      gap: spacings.md,
    },
  },
};

export const StyledContainer = styled.div<{ $size: Sizes }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ $size }) => ({ ...PROGRESS_BAR_STYLES[$size].title })}
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledProgressBar = styled.div<{ $size: Sizes }>`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme }) => theme.border};
  overflow: hidden;
  ${({ $size }) => ({ ...PROGRESS_BAR_STYLES[$size].bar })}
`;

export const StyledProgress = styled(motion.div)<{
  $progressBarColor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
  background: ${({ theme, $progressBarColor }) =>
    $progressBarColor ?? theme.activeBackgroundColor};
`;
