import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Tabs } from "../components";
import { CubeIcon } from "../icons";
export const TabsDisplayer = (): React.ReactNode => {
  const items = [
    {
      label: "Tab 1",
      content: <div>Tab 1 content</div>,
      icon: <CubeIcon />,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2 content</div>,
      icon: <CubeIcon />,
    },
    {
      label: "Tab 3",
      content: <div>Tab 3 content</div>,
      icon: <CubeIcon />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Tabs</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <Tabs
          items={items}
          activeTabIndex={activeTab}
          size="sm"
          onChangeIndexTab={(tab) => setActiveTab(tab)}
          insetTab={false}
          insetContent={true}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
