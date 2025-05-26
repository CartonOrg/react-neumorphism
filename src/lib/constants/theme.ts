import {
  BorderConfig,
  ColorsConfig,
  NeumorphismConfig,
  TypographyConfig,
} from "../types/theme";
import { spacings } from "./units";

export const defaultDarkColorsTheme: ColorsConfig = {
  backgroundColor: "#25272b",
  lightShadow: "#34373c",
  darkShadow: "#16171a",
  activeBackgroundColor: "#ffffff",
  hoverBackgroundColor: "#0c0c0c",
};

export const defaultLightColorsTheme: ColorsConfig = {
  backgroundColor: "#f2f2f2",
  lightShadow: "#ffffff",
  darkShadow: "#d0d0d0",
  activeBackgroundColor: "#25272b",
  hoverBackgroundColor: "#ffffff",
};

export const defaultNeumorphismConfig: NeumorphismConfig = {
  distance: "5px",
  blur: "10px",
};

export const defaultTypographyDarkTheme: TypographyConfig = {
  fontFamily: "Inter, sans-serif",
  fontColor: "#ffffff",
};

export const defaultTypographyLightTheme: TypographyConfig = {
  fontFamily: "Inter, sans-serif",
  fontColor: "#25272b",
};

export const defaultBorderDarkTheme: BorderConfig = {
  borderColor: "#353535",
  borderRadius: spacings.sm,
  borderWidth: "1px",
  borderStyle: "solid",
};

export const defaultBorderLightTheme: BorderConfig = {
  borderColor: "#d6d6d6",
  borderRadius: spacings.sm,
  borderWidth: "1px",
  borderStyle: "solid",
};
