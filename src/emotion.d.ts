import "@emotion/react";
import { ReactNeumorphismAugmentedTheme } from "./lib/types/theme";

declare module "@emotion/react" {
  export type Theme = ReactNeumorphismAugmentedTheme;
}
