import {
  css,
  ThemeProvider as EmotionThemeProvider,
  Global,
} from "@emotion/react";
import { NeumorphismAttributes, NeumorphismTheme } from "../types/theme";
import { spacings } from "../constants";

const defaultThemes: NeumorphismTheme = {
  dark: {
    backgroundColor: "#25272b",
    fontColor: "#ffffff",
    borderColor: "#353535",
    lightShadow: "#34373c",
    darkShadow: "#16171a",
    filledBackgroundColorDark: "#9966cf",
    filledBackgroundColorLight: "#fff571",
    hoverBackgroundColor: "#0c0c0c",
  },
  light: {
    backgroundColor: "#f2f2f2",
    fontColor: "#25272b",
    borderColor: "#d6d6d6",
    lightShadow: "#ffffff",
    darkShadow: "#d0d0d0",
    filledBackgroundColorDark: "#9966cf",
    filledBackgroundColorLight: "#fff571",
    hoverBackgroundColor: "#ffffff",
  },
  fontFamily: "Inter, sans-serif",
};

const resetStyles = css({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

export const ThemeProvider = ({
  children,
  customTheme,
  mode = "dark",
  neumorphismConfig = {
    distance: "5px",
    blur: "10px",
    borderRadius: spacings.sm,
  },
}: {
  children: React.ReactNode;
  mode: "dark" | "light";
  neumorphismConfig?: NeumorphismAttributes;
  customTheme?: NeumorphismTheme;
}): React.ReactNode => {
  const currentColorTheme = customTheme?.[mode] ?? defaultThemes[mode];

  const { distance, blur, borderRadius } = neumorphismConfig;

  return (
    <EmotionThemeProvider
      theme={{
        ...currentColorTheme,
        borderRadius,
        fontFamily: customTheme?.fontFamily ?? defaultThemes.fontFamily,
        border: `1px solid ${currentColorTheme.borderColor}`,
        background: `linear-gradient(145deg, ${currentColorTheme.backgroundColor}, ${currentColorTheme.backgroundColor})`,
        hoverBackground: `linear-gradient(145deg, ${currentColorTheme.hoverBackgroundColor}, ${currentColorTheme.hoverBackgroundColor})`,
        shadow: `${distance} ${distance} ${blur} ${currentColorTheme.darkShadow},  -${distance} -${distance} ${blur} ${currentColorTheme.lightShadow}`,
        shadowInset: `inset ${distance} ${distance} ${blur} ${currentColorTheme.darkShadow},  inset -${distance} -${distance} ${blur} ${currentColorTheme.lightShadow}`,
      }}
    >
      <Global
        styles={[
          resetStyles,
          css({
            "*": {
              fontFamily: customTheme?.fontFamily ?? defaultThemes.fontFamily,
              background: `linear-gradient(145deg, ${currentColorTheme.backgroundColor}, ${currentColorTheme.backgroundColor})`,
              color: currentColorTheme.fontColor,
              "svg > *": {
                stroke: currentColorTheme.fontColor,
              },
            },
          }),
        ]}
      />
      {children}
    </EmotionThemeProvider>
  );
};
