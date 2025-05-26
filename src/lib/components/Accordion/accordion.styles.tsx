import styled from "@emotion/styled";

export const StyledAccordion = styled.div<{ $border?: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme, $border }) =>
    $border === true ? theme.border : "unset"};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  overflow: hidden;
`;
