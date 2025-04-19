const XS = "xs" as const;
const SM = "sm" as const;
const MD = "md" as const;
const LG = "lg" as const;
const XL = "xl" as const;

export const sizes = [XS, SM, MD, LG, XL] as const;
export type Sizes = (typeof sizes)[number];
