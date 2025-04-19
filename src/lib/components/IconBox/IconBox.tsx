import { SerializedStyles, Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { blankStyle, defaultStyle, ICON_BOX_STYLES } from "./iconBox.styles";

interface IconBoxProps {
  inset?: boolean;
  rounded?: boolean;
  border?: boolean;
  size?: Sizes;
  width?: string;
  height?: string;
  icon: React.ReactNode;
  blank?: boolean;
  theme: Theme;
  customStyles?: SerializedStyles | SerializedStyles[];
}
const IconBox: React.FC<IconBoxProps> = ({
  inset = false,
  rounded = false,
  border = false,
  blank = false,
  size = "sm",
  width,
  height,
  icon,
  theme,
  customStyles,
}) => {
  const iconBoxSizeStyles = ICON_BOX_STYLES[size];

  return (
    <div
      css={[
        blank
          ? blankStyle({
              iconBoxSizeStyles,
            })
          : defaultStyle({
              iconBoxSizeStyles,
              theme,
              width,
              height,
              inset,
              rounded,
              border,
            }),
        customStyles,
      ]}
    >
      {icon}
    </div>
  );
};

export default withTheme(IconBox);
