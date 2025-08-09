import { AppleIcon, FruitStandIcon } from "./icons";

export const iconMap = {
  apple: AppleIcon,
  fruitstand: FruitStandIcon,
  // watermelon: WatermelonIcon,
} as const;

export type IconName = keyof typeof iconMap;

export const DefaultIcon = FruitStandIcon;
