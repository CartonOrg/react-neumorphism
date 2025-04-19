export interface NeumorphismAttributes {
  distance?: string;
  blur?: string;
  borderRadius?: string;
}

export interface NeumorphismColorTheme {
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  lightShadow: string;
  darkShadow: string;
  filledBackgroundColorDark: string;
  filledBackgroundColorLight: string;
  hoverBackgroundColor: string;
}

export interface NeumorphismTheme {
  dark: NeumorphismColorTheme;
  light: NeumorphismColorTheme;
  fontFamily: string;
}

export interface NeumorphismComponentTheme {
  background: string;
  fontColor: string;
  fontFamily: string;
  border: string;
  borderRadius: string;
  shadow: string;
  shadowInset: string;
  hoverBackground: string;
  filledBackgroundColorLight: string;
  filledBackgroundColorDark: string;
  backgroundColor: string;
  borderColor: string;
  lightShadow: string;
  darkShadow: string;
  hoverBackgroundColor: string;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  mode?: "dark" | "light";
  neumorphismConfig?: NeumorphismAttributes;
  customTheme?: NeumorphismTheme;
}

declare module "@emotion/react" {
  export interface Theme extends NeumorphismComponentTheme {}
}
