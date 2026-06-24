import type { IconType } from "react-icons";

export interface ContentItem {
  title: string;
  description: string;
  color?: string;
  icon?: IconType;
  img?: string;
}
export interface NavigationType {
  name: string;
  href: string;
}
