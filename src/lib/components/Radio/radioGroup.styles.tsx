import styled from "@emotion/styled";
import { Sizes, spacings } from "../../constants";
export const RADIO_GROUP_STYLE: Record<Sizes, React.CSSProperties> = {
  xs: {
    gap: spacings.xs,
  },
  sm: {
    gap: spacings.sm,
  },
  md: {
    gap: spacings.sm,
  },
  lg: {
    gap: spacings.sm,
  },
  xl: {
    gap: spacings.sm,
  },
};

export const StyledRadioGroupContainer = styled.div<{
  $size: Sizes;
  $radioGroupContainerStyle?: React.CSSProperties;
}>`
  display: flex;
  flex-direction: column;
  ${({ $size, $radioGroupContainerStyle }) => ({
    ...RADIO_GROUP_STYLE[$size],
    ...$radioGroupContainerStyle,
  })}
`;
