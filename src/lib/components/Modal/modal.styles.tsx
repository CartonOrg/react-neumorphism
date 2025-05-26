import styled from "@emotion/styled";
import { spacings } from "../../constants";

export const StyledOverlay = styled.div`
  position: fixed;
  z-index: 9999998;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
  opacity: 0.9;
  width: 100%;
  height: 100%;
`;

export const StyledModal = styled.div<{
  $width: number;
  $height: number;
}>`
  position: fixed;
  z-index: 9999999;
  top: calc(50% - ${({ $height }) => $height / 2}px);
  left: calc(50% - ${({ $width }) => $width / 2}px);
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadowInset};
  display: flex;
  flex-direction: column;
  padding: ${spacings.xl};

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-bottom: ${spacings.md};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: ${({ theme }) => theme.border};
    width: calc(100% + 2 * ${spacings.xl});
    left: -${spacings.xl};
  }
`;
