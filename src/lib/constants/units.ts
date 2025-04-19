export const units = 4;
export const getSpacing = (multiplier: number): string =>
  `${units * multiplier}px`;
export const getSpacingNumber = (multiplier: number): number =>
  units * multiplier;

export const spacings = {
  xs: getSpacing(1),
  sm: getSpacing(2),
  md: getSpacing(3),
  lg: getSpacing(4),
  xl: getSpacing(5),
} as const;

export enum SpacingsNumber {
  XS = getSpacingNumber(1),
  SM = getSpacingNumber(2),
  MD = getSpacingNumber(3),
  LG = getSpacingNumber(4),
  XL = getSpacingNumber(5),
}
