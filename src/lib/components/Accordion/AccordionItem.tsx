import { useEffect, useState } from "react";
import { css, Theme, withTheme } from "@emotion/react";
import { AnimatePresence, motion } from "motion/react";
import { Sizes, spacings } from "../../constants";
import { PlusIcon } from "../../icons";
import { getIconDisplay } from "../../utils/icon";
import IconBox from "../IconBox/IconBox";
import Typography from "../Typography/Typography";
const rotateOpenIconStyle = (open: boolean) =>
  css({
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(45deg)" : "rotate(0deg)",
  });

export interface AccordionItem {
  icon?: React.ReactNode;
  title: string;
  content: string;
  initiallyOpen?: boolean;
  iconStyle?: "inset" | "default" | "outline" | undefined;
}

interface AccordionItemProps extends AccordionItem {
  theme: Theme;
  onOpen?: () => void;
  size?: Sizes;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  icon,
  title,
  content,
  initiallyOpen,
  theme,
  size,
  onOpen,
  iconStyle = "default",
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen ?? false);
  const { border } = theme;

  useEffect(() => {
    setIsOpen(initiallyOpen ?? false);
  }, [initiallyOpen]);

  const handleOpening = () => {
    setIsOpen(!isOpen);
    onOpen?.();
  };

  const iconDisplay = getIconDisplay(icon, iconStyle, size);

  return (
    <div
      css={css({
        position: "relative",
        width: "100%",
        padding: spacings.xl,

        "&:not(:last-child):after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          borderBottom: border,
        },
      })}
    >
      <div
        onClick={handleOpening}
        css={css({
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <span
          css={css({
            display: "inline-flex",
            alignItems: "center",
            gap: spacings.lg,
            userSelect: "none",
          })}
        >
          {iconDisplay}
          <Typography size={size}>{title}</Typography>
        </span>

        <IconBox
          blank
          icon={<PlusIcon customStyle={rotateOpenIconStyle(isOpen)} />}
          size={size}
        />
      </div>

      <AnimatePresence>
        <motion.div
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
          css={css({
            overflow: "hidden",
          })}
        >
          <div
            css={css({
              padding: `${spacings.lg} 0 0`,
            })}
          >
            {content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default withTheme(AccordionItem);
