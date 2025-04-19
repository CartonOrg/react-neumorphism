import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = ({ color }: { color: string }): React.ReactNode => {
  return (
    <div
      css={css({
        width: "1em",
        height: "1em",
        border: "2px solid transparent",
        borderTopColor: color,
        borderRightColor: color,
        borderRadius: "50%",
        animation: `${spin} 0.8s linear infinite`,
        display: "inline-block",
      })}
    />
  );
};

export default SpinnerIcon;
