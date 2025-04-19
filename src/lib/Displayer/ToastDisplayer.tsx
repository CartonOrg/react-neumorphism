import { Button } from "../components";
import { Sizes } from "../constants";
import { useToasts } from "../providers/ToastsProvider";
import { Toast as ToastType } from "../components/Toast/toast.type";
import { ComponentDisplayer } from "../../ComponentDisplayer";
export const ToastDisplayer = (): React.ReactNode => {
  const { createToast } = useToasts();

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Toast </ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="row">
        <Button
          onClick={() => {
            ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
              createToast(
                {
                  title: "Hello",
                  description: "This is a toast",
                  type: "info",
                },
                {
                  duration: 0,
                  position: "bottom-left",
                  size: size as Sizes,
                  isClosable: true,
                  bordered: true,
                },
              );
            });
          }}
        >
          Create all size Toast
        </Button>
        <Button
          onClick={() => {
            ["info", "success", "error", "warning"].forEach((type) => {
              createToast(
                {
                  title: "Hello",
                  description: "This is a toast",
                  type: type as ToastType["type"],
                },
                {
                  duration: 0,
                  position: "bottom-right",
                },
              );
            });
          }}
        >
          Create all type Toast
        </Button>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
