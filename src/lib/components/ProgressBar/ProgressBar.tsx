import { css, Theme, withTheme } from "@emotion/react";
import { motion } from "motion/react";
import { Sizes } from "../../constants";
import Badge from "../Badge/Badge";
import Typography from "../Typography/Typography";
import { PROGRESS_BAR_STYLES } from "./progressBar.styles";

interface ProgressBarProps {
  theme: Theme;
  progress: number;
  label?: string;
  showLabel?: boolean;
  size?: Sizes;
  insetLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  size = "sm",
  theme,
  progress,
  label,
  showLabel = true,
  insetLabel = false,
}) => {
  const {
    borderRadius,
    border,
    shadow,
    background,
    filledBackgroundColorLight,
  } = theme;
  const progressBarStyle = PROGRESS_BAR_STYLES[size];

  const defaultLabel = (
    <div
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      })}
    >
      <Typography size={size}>{label}</Typography>
      <Typography size={size}>{progress}%</Typography>
    </div>
  );

  const insetLabelComp = (
    <div
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      })}
    >
      <Badge inset size={size}>
        {label}
      </Badge>
      <Badge inset size={size}>
        {progress}%
      </Badge>
    </div>
  );

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        ...progressBarStyle.title,
      })}
    >
      {showLabel ? (insetLabel ? insetLabelComp : defaultLabel) : null}

      <div
        css={css({
          position: "relative",
          width: "100%",
          borderRadius,
          background,
          boxShadow: shadow,
          border,
          overflow: "hidden",
          ...progressBarStyle.bar,
        })}
      >
        <motion.div
          initial={{ width: progress }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          css={css({
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            maxWidth: "100%",
            background: filledBackgroundColorLight,
          })}
        />
      </div>
    </div>
  );
};

export default withTheme(ProgressBar);
