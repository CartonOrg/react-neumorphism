import { css, SerializedStyles, Theme, withTheme } from "@emotion/react";
import { ExtendedToast, Toast as ToastType } from "./toast.type";
import { spacings } from "../../constants";
import { Button, IconBox, Typography } from "..";
import {
  AlertSquareIcon,
  CheckSquareIcon,
  CrossIcon,
  CrossSquareIcon,
  InfoSquareIcon,
} from "../../icons";

interface ToastProps {
  toast: ExtendedToast;
  removeToast: (id: string) => void;
  theme: Theme;
  customStyle?: SerializedStyles;
}
const getIcon = (type: ToastType["type"]) => {
  switch (type) {
    default:
    case "info":
      return <InfoSquareIcon />;
    case "success":
      return <CheckSquareIcon />;
    case "error":
      return <CrossSquareIcon />;
    case "warning":
      return <AlertSquareIcon />;
  }
};
const Toast: React.FC<ToastProps> = ({
  toast,
  removeToast,
  theme,
  customStyle,
}) => {
  const { background, borderRadius, shadow, border } = theme;
  const icon = getIcon(toast.type);

  return (
    <div
      css={[
        css({
          background,
          borderRadius,
          boxShadow: shadow,
          border: toast.bordered ? border : "none",
          padding: `${spacings.sm} ${spacings.md}`,
          display: "flex",
          gap: spacings.xl,
          alignItems: "center",
          justifyContent: "space-between",
        }),
        customStyle,
      ]}
    >
      <div
        css={css({
          display: "flex",
          gap: spacings.md,
          alignItems: "center",
        })}
      >
        <IconBox icon={icon} size={toast.size} blank />
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: spacings.xs,
          })}
        >
          <Typography size={toast.size} bold>
            {toast.title}
          </Typography>
          <Typography size={toast.size} underSized>
            {toast.description}
          </Typography>
        </div>
      </div>

      {toast.isClosable === true && (
        <Button
          onClick={() => removeToast(toast.id)}
          iconLeft={<CrossIcon />}
          size={"xs"}
        />
      )}
    </div>
  );
};

export default withTheme(Toast);
