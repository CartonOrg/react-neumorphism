import { withTheme } from "@emotion/react";
import { forwardRef, useState } from "react";
import AccordionItem, {
  AccordionItem as AccordionItemType,
} from "./AccordionItem";
import { Sizes } from "../../constants";
import { StyledAccordion } from "./accordion.styles";

export interface AccordionProps {
  items: AccordionItemType[];
  border?: boolean;
  enableUniqueOpen?: boolean;
  size?: Sizes;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { items, border = false, enableUniqueOpen = false, size = "sm", ...rest },
    ref,
  ) => {
    const [openItems, setOpenItems] = useState<boolean[]>(
      items.map((item) => item.initiallyOpen ?? false),
    );

    const handleOnOpen = (index: number) => {
      if (!enableUniqueOpen) {
        return;
      }

      setOpenItems(items.map((_, i) => (i === index ? true : false)));
    };

    return (
      <StyledAccordion ref={ref} $border={border} {...rest}>
        {items.map((item, index) => (
          <AccordionItem
            key={`${index}`}
            initiallyOpen={openItems[index] ?? item.initiallyOpen}
            onOpen={() => handleOnOpen(index)}
            size={size}
            {...item}
          />
        ))}
      </StyledAccordion>
    );
  },
);

export default withTheme(Accordion);
