import { css, Theme, withTheme } from "@emotion/react";
import { useState } from "react";
import { motion } from "motion/react";
import { Sizes, spacings } from "../../constants";
import IconBox from "../IconBox/IconBox";
import Typography from "../Typography/Typography";

interface TabsProps {
  theme: Theme;
  size?: Sizes;
  insetTab?: boolean;
  insetContent?: boolean;
  items: {
    label: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
  }[];
  activeTabIndex: number;
  onChangeIndexTab: (tab: number) => void;
}
const Tabs: React.FC<TabsProps> = ({
  theme,
  items,
  insetTab = false,
  insetContent = false,
  size = "sm",
  activeTabIndex,
  onChangeIndexTab,
}) => {
  const { background, shadow, borderRadius, border, shadowInset } = theme;
  const [currentTabIndex, setCurrentTabIndex] =
    useState<number>(activeTabIndex);
  const handleChangeTab = (tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
    onChangeIndexTab(tabIndex);
  };

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: spacings.xl,
        width: "100%",
      })}
    >
      <div css={css({ display: "flex", gap: spacings.sm })}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleChangeTab(index)}
            css={css({
              display: "flex",
              gap: spacings.sm,
              alignItems: "center",
              justifyContent: "center",
              padding: `${spacings.sm} ${spacings.md}`,
              borderRadius,
              background,
              border,
              boxShadow: insetTab ? shadowInset : shadow,
              cursor: "pointer",
            })}
          >
            <IconBox blank icon={item.icon} size={size} />
            <Typography size={size} bold>
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
      <div
        css={css({
          position: "relative",
          overflow: "hidden",
          padding: "20px 10px",
          margin: "-10px",
        })}
      >
        <motion.div
          css={css({
            display: "flex",
            width: "100%",
            gap: spacings.xl,
          })}
          animate={{
            x: `calc(${-currentTabIndex * 100}% - ${currentTabIndex}  * ${spacings.xl})`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              css={css({
                flex: "0 0 100%",
                padding: spacings.md,
                background,
                boxShadow: insetContent ? shadowInset : shadow,
                borderRadius,
                width: "100%",
              })}
            >
              {item.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default withTheme(Tabs);
