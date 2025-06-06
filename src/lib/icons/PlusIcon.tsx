import { SerializedStyles } from "@emotion/react";

export const PlusIcon = ({
  customStyle,
}: {
  customStyle?: SerializedStyles;
}): React.ReactNode => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={customStyle}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
