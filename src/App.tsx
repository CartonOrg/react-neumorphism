import { css } from "@emotion/react";
import { useState } from "react";
import { ThemeProvider } from "./lib/providers/ThemeProvider";
import { ButtonsDisplayer } from "./lib/Displayer/ButtonsDisplayer";
import { IconBoxDisplayer } from "./lib/Displayer/IconBoxDisplayer";
import { ToggleDisplayer } from "./lib/Displayer/TogglerDisplayer";
import { Toggle } from "./lib/components";
import { MoonIcon, SunIcon } from "./lib/icons";
import { spacings } from "./lib/constants";
import { AccordionDisplayer } from "./lib/Displayer/AccordionDisplayer";
import { InputDisplayer } from "./lib/Displayer/InputDisplayer";
import { BoxDisplayer } from "./lib/Displayer/BoxDisplayer";
import { TextAreaDisplayer } from "./lib/Displayer/TextAreaDisplayer";
import { DropdownDisplayer } from "./lib/Displayer/DropdownDisplayer";
import { BadgeDisplayer } from "./lib/Displayer/BadgeDisplayer";
import { ModalDisplayer } from "./lib/Displayer/ModalDisplayer";
import { CheckboxDisplayer } from "./lib/Displayer/CheckboxDisplayer";
import { RadioDisplayer } from "./lib/Displayer/RadioDisplayer";
import { TooltipDisplayer } from "./lib/Displayer/TooltipDisplayer";
import { PopoverDisplayer } from "./lib/Displayer/PopoverDisplayer";
import { TableDisplayer } from "./lib/Displayer/TableDisplayer";
import { ToastDisplayer } from "./lib/Displayer/ToastDisplayer";
import { TabsDisplayer } from "./lib/Displayer/TabsDisplayer";
import { ToastsProvider } from "./lib/providers/ToastsProvider";
import { ProgressBarDisplayer } from "./lib/Displayer/ProgressBarDisplayer";
const containerStyle = css({
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const App = (): React.ReactNode => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <ThemeProvider mode={lightMode ? "light" : "dark"}>
      <ToastsProvider>
        <div>
          <div
            css={css({
              display: "flex",
              justifyContent: "flex-end",
              padding: `${spacings.xl}`,
            })}
          >
            <Toggle
              size="md"
              rounded
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
              icons={{
                checkedIcon: <SunIcon />,
                uncheckedIcon: <MoonIcon />,
              }}
            />
          </div>
          <div css={containerStyle}>
            <ProgressBarDisplayer />
            <TabsDisplayer />
            <ToastDisplayer />
            <TableDisplayer />
            <PopoverDisplayer />
            <TooltipDisplayer />
            <RadioDisplayer />
            <CheckboxDisplayer />
            <ModalDisplayer />
            <BadgeDisplayer />
            <DropdownDisplayer />
            <TextAreaDisplayer />
            <BoxDisplayer />
            <InputDisplayer />
            <AccordionDisplayer />
            <ToggleDisplayer />
            <ButtonsDisplayer />
            <IconBoxDisplayer />
          </div>
        </div>
      </ToastsProvider>
    </ThemeProvider>
  );
};

export default App;
