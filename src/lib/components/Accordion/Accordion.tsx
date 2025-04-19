import { css, Theme, withTheme } from "@emotion/react";
import { useState } from "react";
import AccordionItem, {
  AccordionItem as AccordionItemType,
} from "./AccordionItem";
import { Sizes } from "../../constants";

export interface AccordionProps {
  items: AccordionItemType[];
  border?: boolean;
  theme: Theme;
  enableUniqueOpen?: boolean;
  size?: Sizes;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  theme,
  border = false,
  enableUniqueOpen = false,
  size = "sm",
}) => {
  const [openItems, setOpenItems] = useState<boolean[]>(
    items.map((item) => item.initiallyOpen ?? false),
  );
  const { borderRadius, shadow, background, border: borderStyle } = theme;

  const handleOnOpen = (index: number) => {
    if (!enableUniqueOpen) {
      return;
    }

    setOpenItems(items.map((_, i) => (i === index ? true : false)));
  };

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        background,
        boxShadow: shadow,
        border: border ? borderStyle : "unset",
        borderRadius,
        width: "100%",
        overflow: "hidden",
      })}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={`${index}`}
          initiallyOpen={openItems[index] ?? item.initiallyOpen}
          onOpen={() => handleOnOpen(index)}
          size={size}
          {...item}
        />
      ))}
    </div>
  );
};

export default withTheme(Accordion);
