import {
  AppleIcon,
  BananaIcon,
  BerryIcon,
  CoconutIcon,
  FruitStandIcon,
  GrapesIcon,
  LimeIcon,
  OrangeIcon,
  WatermelonIcon,
} from "./icons";

export const iconMap = {
  apple: AppleIcon,
  fruitstand: FruitStandIcon,
  grapes: GrapesIcon,
  blueberry: BerryIcon,
  orange: OrangeIcon,
  coconut: CoconutIcon,
  watermelon: WatermelonIcon,
  lime: LimeIcon,
  banana: BananaIcon,
} as const;

export type IconName = keyof typeof iconMap;

export const DefaultIcon = FruitStandIcon;
