export type SocialIconType =
  | "googlePlay"
  | "github"
  | "mail"
  | "link"
  | "telegram"
  | "appStore";

export interface IIconProps {
  width: number;
  height: number;
  fill?: string;
}
