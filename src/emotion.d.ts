import "@emotion/react";
import { NeumorphismAttributes, NeumorphismColors } from "./lib/types/theme";

interface NeumorphismGlobalTheme
  extends NeumorphismColors,
    NeumorphismAttributes {
  shadow: string;
  shadowInset: string;
  background: string;
  border: string;
  hoverBackground: string;
  fontFamily: string;
}

declare module "@emotion/react" {
  export type Theme = NeumorphismGlobalTheme;
}
