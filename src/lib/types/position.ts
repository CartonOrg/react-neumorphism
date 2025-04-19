export const BOTTOM_RIGHT = "bottom-right" as const;
export const BOTTOM_LEFT = "bottom-left" as const;
export const BOTTOM_CENTER = "bottom-center" as const;
export const TOP_RIGHT = "top-right" as const;
export const TOP_LEFT = "top-left" as const;
export const TOP_CENTER = "top-center" as const;

export const screenPositions = [
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  TOP_CENTER,
] as const;

export type ScreenPosition = (typeof screenPositions)[number];
