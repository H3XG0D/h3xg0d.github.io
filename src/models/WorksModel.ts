import { SocialIconType } from "./IconsModel";

export interface IWorkLink {
  icon: SocialIconType;
  src: string;
}

export interface IWorkItem {
  id: number;
  name: string;
  categ: string;
  descr: string;
  img: string;
  tags: string[];
  links: IWorkLink[];
}
