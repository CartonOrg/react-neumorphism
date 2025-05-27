import {
  css,
  ThemeProvider as EmotionThemeProvider,
  Global,
} from "@emotion/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  BorderConfig,
  ColorsConfig,
  DefaultModeTheme,
  NeumorphismConfig,
  ReactNeumorphismAugmentedTheme,
  TypographyConfig,
} from "../types/theme";
import { buildAugmentedTheme } from "../utils";

// Create the context
interface ThemeContextType {
  mode: DefaultModeTheme;
  theme: ReactNeumorphismAugmentedTheme;
  setMode: (mode: DefaultModeTheme) => void;
  updateConfig: (config: {
    neumorphismConfig?: Partial<NeumorphismConfig>;
    colorsConfig?: Partial<ColorsConfig>;
    typographyConfig?: Partial<TypographyConfig>;
    borderConfig?: Partial<BorderConfig>;
  }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

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
      width: "100%",
      minHeight: "100%",
      background: buildedAugmentedTheme.background,
      color: buildedAugmentedTheme.fontColor,
      fontFamily: buildedAugmentedTheme.fontFamily,
      "svg > *": {
        stroke: buildedAugmentedTheme.fontColor,
      },
    },
  });

interface ThemeProviderProps {
  mode: DefaultModeTheme;
  neumorphismConfig?: Partial<NeumorphismConfig>;
  colorsConfig?: Partial<ColorsConfig>;
  typographyConfig?: Partial<TypographyConfig>;
  borderConfig?: Partial<BorderConfig>;
  children: ReactNode;
}

export const ThemeProvider = ({
  mode = "light",
  neumorphismConfig,
  borderConfig,
  colorsConfig,
  typographyConfig,
  children,
}: ThemeProviderProps): ReactNode => {
  const [currentMode, setCurrentMode] = useState<DefaultModeTheme>(mode);
  const [currentConfig, setCurrentConfig] = useState({
    neumorphismConfig,
    colorsConfig,
    typographyConfig,
    borderConfig,
  });

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const buildedAugmentedTheme = buildAugmentedTheme({
    mode: currentMode,
    ...currentConfig,
  });

  const updateConfig = (config: {
    neumorphismConfig?: Partial<NeumorphismConfig>;
    colorsConfig?: Partial<ColorsConfig>;
    typographyConfig?: Partial<TypographyConfig>;
    borderConfig?: Partial<BorderConfig>;
  }) => {
    setCurrentConfig((prev) => ({
      ...prev,
      ...config,
    }));
  };

  const contextValue = {
    mode: currentMode,
    theme: buildedAugmentedTheme,
    setMode: setCurrentMode,
    updateConfig,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={buildedAugmentedTheme}>
        <Global
          styles={[resetStyles, globalOverridesStyles(buildedAugmentedTheme)]}
        />
        <div className="react-neumorphism-theme">{children}</div>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
