import styled from "@emotion/styled";
import { motion } from "motion/react";
import { spacings } from "../../constants";
import { PlusIcon } from "../../icons";

export const StyledAccordionItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${spacings.xl};

  &:not(:last-child):after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    border-bottom: ${({ theme }) => theme.border};
  }
`;

export const StyledAccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAccordionTitle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacings.lg};
  user-select: none;
`;

export const StyledAccordionContent = styled(motion.div)`
  overflow: hidden;
`;

export const StyledAccordionContentInner = styled.div`
  padding: ${spacings.lg} 0 0;
`;

export const StyledRotatingIcon = styled(PlusIcon)<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0deg)")};
`;
