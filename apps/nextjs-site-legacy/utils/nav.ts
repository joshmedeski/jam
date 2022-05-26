import {
  DesktopComputerIcon,
  HomeIcon,
  NewspaperIcon,
  RssIcon,
  UserIcon,
} from "@heroicons/react/outline";

export class NavItem {
  text: string;
  to: string;
  icon: React.FC;

  constructor(text: string, to: string, icon: React.FC) {
    this.text = text;
    this.to = to;
    this.icon = icon;
  }
}

export const headerNavItems: NavItem[] = [
  new NavItem("Home", "/", HomeIcon),
  new NavItem("About", "/about", UserIcon),
  new NavItem("Posts", "/posts", RssIcon),
];

export const footerNavItems: NavItem[] = [
  ...headerNavItems,
  new NavItem("Publications", "/publications", NewspaperIcon),
  new NavItem("Uses", "/uses", DesktopComputerIcon),
];
