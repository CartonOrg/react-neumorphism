export type DefaultModeTheme = "dark" | "light";
export interface NeumorphismConfig {
  distance: string;
  blur: string;
}

export interface ColorsConfig {
  backgroundColor: React.CSSProperties["color"];
  lightShadow: React.CSSProperties["color"];
  darkShadow: React.CSSProperties["color"];
  activeBackgroundColor: React.CSSProperties["color"];
  hoverBackgroundColor: React.CSSProperties["color"];
}

export interface BorderConfig {
  borderColor: React.CSSProperties["borderColor"];
  borderRadius: React.CSSProperties["borderRadius"];
  borderWidth: React.CSSProperties["borderWidth"];
  borderStyle: React.CSSProperties["borderStyle"];
}

export interface TypographyConfig {
  fontFamily: React.CSSProperties["fontFamily"];
  fontColor: React.CSSProperties["color"];
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
  background: React.CSSProperties["background"];
  hoverBackground: React.CSSProperties["background"];
  shadow: React.CSSProperties["boxShadow"];
  shadowInset: React.CSSProperties["boxShadow"];
  border: React.CSSProperties["border"];
}

declare module "@emotion/react" {
  export interface Theme extends ReactNeumorphismAugmentedTheme {}
}
