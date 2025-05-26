import {
  defaultBorderDarkTheme,
  defaultBorderLightTheme,
  defaultDarkColorsTheme,
  defaultLightColorsTheme,
  defaultNeumorphismConfig,
  defaultTypographyDarkTheme,
  defaultTypographyLightTheme,
} from "../constants";
import {
  BorderConfig,
  ColorsConfig,
  DefaultModeTheme,
  NeumorphismConfig,
  ReactNeumorphismAugmentedTheme,
  TypographyConfig,
} from "../types/theme";

export const buildAugmentedTheme = ({
  mode,
  neumorphismConfig,
  colorsConfig,
  typographyConfig,
  borderConfig,
}: {
  mode: DefaultModeTheme;
  neumorphismConfig?: Partial<NeumorphismConfig>;
  colorsConfig?: Partial<ColorsConfig>;
  typographyConfig?: Partial<TypographyConfig>;
  borderConfig?: Partial<BorderConfig>;
}): ReactNeumorphismAugmentedTheme => {
  const currentCurrentColorsConfig: ColorsConfig = {
    ...(mode === "dark" ? defaultDarkColorsTheme : defaultLightColorsTheme),
    ...colorsConfig,
  };

  const currentTypographyConfig: TypographyConfig = {
    ...(mode === "dark"
      ? defaultTypographyDarkTheme
      : defaultTypographyLightTheme),
    ...typographyConfig,
  };

  const currentBorderConfig: BorderConfig = {
    ...(mode === "dark" ? defaultBorderDarkTheme : defaultBorderLightTheme),
    ...borderConfig,
  };

  const currentNeumorphismConfig: NeumorphismConfig = {
    ...defaultNeumorphismConfig,
    ...neumorphismConfig,
  };

  return {
    ...currentCurrentColorsConfig,
    ...currentTypographyConfig,
    ...currentBorderConfig,
    ...currentNeumorphismConfig,
    border: `${currentBorderConfig.borderWidth} ${currentBorderConfig.borderStyle} ${currentBorderConfig.borderColor}`,
    background: `linear-gradient(145deg, ${currentCurrentColorsConfig.backgroundColor}, ${currentCurrentColorsConfig.backgroundColor})`,
    hoverBackground: `linear-gradient(145deg, ${currentCurrentColorsConfig.hoverBackgroundColor}, ${currentCurrentColorsConfig.hoverBackgroundColor})`,
    shadow: `${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.blur} ${currentCurrentColorsConfig.darkShadow},  -${currentNeumorphismConfig.distance} -${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.blur} ${currentCurrentColorsConfig.lightShadow}`,
    shadowInset: `inset ${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.blur} ${currentCurrentColorsConfig.darkShadow},  inset -${currentNeumorphismConfig.distance} -${currentNeumorphismConfig.distance} ${currentNeumorphismConfig.blur} ${currentCurrentColorsConfig.lightShadow}`,
  };
};
