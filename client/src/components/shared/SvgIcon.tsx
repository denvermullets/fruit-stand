import { FC } from "react";
import { DefaultIcon, iconMap, IconName } from "./iconMap";

interface IconProps {
  name: IconName;
  color?: string;
  x?: number;
  y?: number;
}

export const SvgIcon: FC<IconProps> = ({ name, ...props }) => {
  // mapping a fruit name to an already created SVG Icon component
  const Component = iconMap[name.toLowerCase() as IconName] || DefaultIcon;

  return <Component {...props} />;
};
