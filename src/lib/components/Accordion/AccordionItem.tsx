import { useEffect, useState } from "react";
import { withTheme } from "@emotion/react";
import { AnimatePresence } from "motion/react";
import { Sizes } from "../../constants";
import { getIconDisplay } from "../../utils/icon";
import IconBox from "../IconBox/IconBox";
import Typography from "../Typography/Typography";
import {
  StyledAccordionContent,
  StyledAccordionContentInner,
  StyledAccordionHeader,
  StyledAccordionItemContainer,
  StyledAccordionTitle,
  StyledRotatingIcon,
} from "./accordionItem.styles";

export interface AccordionItem {
  icon?: React.ReactNode;
  title: string;
  content: string;
  initiallyOpen?: boolean;
  iconStyle?: "inset" | "default" | "outline" | undefined;
}

interface AccordionItemProps extends AccordionItem {
  onOpen?: () => void;
  size?: Sizes;
  accordionItemTitleStyle?: React.CSSProperties;
  accordionItemContentStyle?: React.CSSProperties;
  accordionItemContainerStyle?: React.CSSProperties;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  icon,
  title,
  content,
  initiallyOpen,
  size,
  onOpen,
  accordionItemTitleStyle,
  accordionItemContentStyle,
  iconStyle = "default",
  accordionItemContainerStyle,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen ?? false);

  useEffect(() => {
    setIsOpen(initiallyOpen ?? false);
  }, [initiallyOpen]);

  const handleOpening = () => {
    setIsOpen(!isOpen);
    onOpen?.();
  };

  const iconDisplay = getIconDisplay(icon, iconStyle, size);

  return (
    <StyledAccordionItemContainer
      $accordionItemContainerStyle={accordionItemContainerStyle}
    >
      <StyledAccordionHeader onClick={handleOpening}>
        <StyledAccordionTitle>
          {iconDisplay}
          <Typography size={size} labelStyle={accordionItemTitleStyle}>
            {title}
          </Typography>
        </StyledAccordionTitle>

        <IconBox
          blank
          icon={<StyledRotatingIcon $isOpen={isOpen} />}
          size={size}
        />
      </StyledAccordionHeader>

      <AnimatePresence>
        <StyledAccordionContent
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            opacity: { duration: 0.2 },
            height: { duration: 0.1, ease: "linear" },
          }}
        >
          <StyledAccordionContentInner
            $accordionItemContentStyle={accordionItemContentStyle}
          >
            {content}
          </StyledAccordionContentInner>
        </StyledAccordionContent>
      </AnimatePresence>
    </StyledAccordionItemContainer>
  );
};

export default withTheme(AccordionItem);
