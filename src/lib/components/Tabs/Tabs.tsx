import { Theme, withTheme } from "@emotion/react";
import { forwardRef, useState } from "react";
import { Sizes, spacings } from "../../constants";
import IconBox from "../IconBox/IconBox";
import Typography from "../Typography/Typography";
import {
  StyledContent,
  StyledContentContainer,
  StyledContentWrapper,
  StyledTab,
  StyledTabsContainer,
  StyledTabsList,
} from "./tabs.styles";

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

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      insetTab = false,
      insetContent = false,
      size = "sm",
      activeTabIndex,
      onChangeIndexTab,
      ...rest
    },
    ref,
  ) => {
    const [currentTabIndex, setCurrentTabIndex] =
      useState<number>(activeTabIndex);

    const handleChangeTab = (tabIndex: number) => {
      setCurrentTabIndex(tabIndex);
      onChangeIndexTab(tabIndex);
    };

    return (
      <StyledTabsContainer ref={ref} {...rest}>
        <StyledTabsList>
          {items.map((item, index) => (
            <StyledTab
              key={index}
              onClick={() => handleChangeTab(index)}
              $insetTab={insetTab}
            >
              <IconBox blank icon={item.icon} size={size} />
              <Typography size={size} bold>
                {item.label}
              </Typography>
            </StyledTab>
          ))}
        </StyledTabsList>
        <StyledContentWrapper>
          <StyledContentContainer
            $insetContent={insetContent}
            animate={{
              x: `calc(${-currentTabIndex * 100}% - ${currentTabIndex} * ${spacings.xl})`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {items.map((item, index) => (
              <StyledContent key={index} $insetContent={insetContent}>
                {item.content}
              </StyledContent>
            ))}
          </StyledContentContainer>
        </StyledContentWrapper>
      </StyledTabsContainer>
    );
  },
);

export default withTheme(Tabs);
