import { useEffect, useRef, useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export const ProgressBarDisplayer = (): React.ReactNode => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setProgress((prev) => {
        return prev + 5;
      });
    }, 300);
  }, []);

  useEffect(() => {
    if (progress >= 100 && ref.current) {
      clearInterval(ref.current);
    }
  }, [progress]);

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Progress bar</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <ProgressBar progress={progress} label="Progress" />
        <ProgressBar progress={progress} label="Progress" insetLabel />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
