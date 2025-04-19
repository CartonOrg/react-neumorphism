import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Badge, Tooltip } from "../components";

export const TooltipDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Tooltip</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>Classic</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Tooltip text="Tooltip" alignment="bottom-center">
          <Badge>Hover me</Badge>
        </Tooltip>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
