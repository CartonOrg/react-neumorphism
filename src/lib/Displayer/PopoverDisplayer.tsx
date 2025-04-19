import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Button } from "../components";
import Popover from "../components/Popover/Popover";

export const PopoverDisplayer = (): React.ReactNode => {
  const [display, setDisplay] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const closePopover = () => {
    console.log("closePopover");
    setDisplay(false);
  };
  const openPopover = () => {
    setDisplay(true);
  };

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Popover</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <Button ref={anchorRef} onClick={openPopover}>
          Menu
        </Button>

        <Popover
          anchorRef={anchorRef}
          display={display}
          alignment="bottom-left"
          onClickOutside={closePopover}
        >
          <div
            css={css({
              width: "400px",
              height: "200px",
            })}
          ></div>
        </Popover>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
