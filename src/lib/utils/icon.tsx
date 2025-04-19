import { IconStyle } from "../types/icon";
import IconBox from "../components/IconBox/IconBox";
import { Sizes } from "../constants";
export const getIconDisplay = (
  icon?: React.ReactNode,
  iconStyle?: IconStyle,
  size?: Sizes,
): React.ReactNode => {
  if (icon === undefined) {
    return null;
  }

  switch (iconStyle) {
    case "inset":
      return <IconBox inset icon={icon} size={size} />;
    case "outline":
      return <IconBox blank icon={icon} size={size} />;
    default:
      return <IconBox icon={icon} size={size} />;
  }
};
