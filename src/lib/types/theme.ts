export type DefaultModeTheme = "dark" | "light";
export interface NeumorphismConfig {
  distance: string;
  blur: string;
}

export interface ColorsConfig {
  backgroundColor: string;
  lightShadow: string;
  darkShadow: string;
  activeBackgroundColor: string;
  hoverBackgroundColor: string;
}

export interface BorderConfig {
  borderColor: string;
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
}

export interface TypographyConfig {
  fontFamily: string;
  fontColor: string;
}

export interface ReactNeumorphismConfig {
  dark: ColorsConfig;
  light: ColorsConfig;
  typography: TypographyConfig;
}

export interface ReactNeumorphismAugmentedTheme
  extends NeumorphismConfig,
    ColorsConfig,
    TypographyConfig,
    BorderConfig {
  background: string;
  hoverBackground: string;
  shadow: string;
  shadowInset: string;
  border: string;
}

declare module "@emotion/react" {
  export interface Theme extends ReactNeumorphismAugmentedTheme {}
}
