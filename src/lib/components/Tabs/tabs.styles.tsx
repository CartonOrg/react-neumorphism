import styled from "@emotion/styled";
import { motion } from "motion/react";
import { spacings } from "../../constants";

export const StyledTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xl};
  width: 100%;
`;

export const StyledTabsList = styled.div`
  display: flex;
  gap: ${spacings.sm};
`;

export const StyledTab = styled.div<{
  $insetTab: boolean;
}>`
  display: flex;
  gap: ${spacings.sm};
  align-items: center;
  justify-content: center;
  padding: ${spacings.sm} ${spacings.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme, $insetTab }) =>
    $insetTab ? theme.shadowInset : theme.shadow};
  cursor: pointer;
`;

export const StyledContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 10px;
  margin: -10px;
`;

export const StyledContentContainer = styled(motion.div)<{
  $insetContent: boolean;
}>`
  display: flex;
  width: 100%;
  gap: ${spacings.xl};
`;

export const StyledContent = styled.div<{
  $insetContent: boolean;
}>`
  flex: 0 0 100%;
  padding: ${spacings.md};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme, $insetContent }) =>
    $insetContent ? theme.shadowInset : theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
`;
