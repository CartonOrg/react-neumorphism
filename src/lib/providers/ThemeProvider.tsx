import {
  css,
  ThemeProvider as EmotionThemeProvider,
  Global,
} from "@emotion/react";
import {
  BorderConfig,
  ColorsConfig,
  DefaultModeTheme,
  NeumorphismConfig,
  ReactNeumorphismAugmentedTheme,
  TypographyConfig,
} from "../types/theme";
import { buildAugmentedTheme } from "../utils";

const resetStyles = css({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

const globalOverridesStyles = (
  buildedAugmentedTheme: ReactNeumorphismAugmentedTheme,
) =>
  css({
    ".react-neumorphism-theme": {
      fontFamily: buildedAugmentedTheme.fontFamily,
      background: buildedAugmentedTheme.background,
      color: buildedAugmentedTheme.fontColor,
      "svg > *": {
        stroke: buildedAugmentedTheme.fontColor,
      },
    },
  });

interface ThemeProviderProps {
  mode: DefaultModeTheme;
  neumorphismConfig?: NeumorphismConfig;
  colorsConfig?: ColorsConfig;
  typographyConfig?: TypographyConfig;
  borderConfig?: BorderConfig;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  mode = "light",
  neumorphismConfig,
  borderConfig,
  colorsConfig,
  typographyConfig,
  children,
}: ThemeProviderProps): React.ReactNode => {
  const buildedAugmentedTheme = buildAugmentedTheme(
    mode,
    neumorphismConfig,
    colorsConfig,
    typographyConfig,
    borderConfig,
  );

  return (
    <EmotionThemeProvider theme={buildedAugmentedTheme}>
      <Global
        styles={[resetStyles, globalOverridesStyles(buildedAugmentedTheme)]}
      />
      <div className="react-neumorphism-theme">{children}</div>
    </EmotionThemeProvider>
  );
};
