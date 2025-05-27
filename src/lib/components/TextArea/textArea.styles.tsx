import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";

type StyledTextAreaProps = {
  $textAreaSize: Sizes;
  $enableDynamicHeight: boolean;
  $textAreaStyle?: React.CSSProperties;
};

export const StyledLabel = styled.label<{
  $textAreaSize: Sizes;
  $textAreaContainerStyle?: React.CSSProperties;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ $textAreaSize }) =>
    $textAreaSize === "xs" ? spacings.xs : spacings.sm};
  ${({ $textAreaContainerStyle }) => ({
    ...$textAreaContainerStyle,
  })}
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  outline: unset;
  text-align: left;
  width: 100%;
  min-height: ${({ $enableDynamicHeight }) =>
    $enableDynamicHeight ? "auto" : "100%"};
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadowInset};
  color: ${({ theme }) => theme.fontColor};
  resize: none;
  padding: ${({ $textAreaSize }) => {
    switch ($textAreaSize) {
      case "xs":
      case "sm":
        return `${spacings.md} ${spacings.md}`;
      case "md":
        return `${spacings.md} ${spacings.lg}`;
      case "lg":
      case "xl":
        return `${spacings.lg} ${spacings.xl}`;
    }
  }};
  font-size: ${({ $textAreaSize }) => {
    switch ($textAreaSize) {
      case "xs":
        return "10px";
      case "sm":
        return "12px";
      case "md":
        return "14px";
      case "lg":
        return "16px";
      case "xl":
        return "18px";
    }
  }};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ $textAreaStyle }) => ({ ...$textAreaStyle })}
`;
