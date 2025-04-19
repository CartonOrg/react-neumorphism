import { SerializedStyles } from "@emotion/react";

export const CarretDownIcon = ({
  customStyles,
}: {
  customStyles?: SerializedStyles | SerializedStyles[];
}): React.ReactNode => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={customStyles}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
