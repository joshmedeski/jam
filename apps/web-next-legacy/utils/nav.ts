import {
  DesktopComputerIcon,
  HomeIcon,
  NewspaperIcon,
  RssIcon,
  UserIcon
} from '@heroicons/react/outline'
import { BsTwitch, BsTwitter, BsYoutube } from 'react-icons/bs'

import BrainIcon from '@/ui/BrainIcon'

export class NavItem {
  text: string
  to: string
  icon: React.FC<{ className: string }>

  constructor(text: string, to: string, icon: React.FC) {
    this.text = text
    this.to = to
    this.icon = icon
  }
}

export const headerNavItems: NavItem[] = [
  new NavItem('Home', '/', HomeIcon),
  new NavItem('About', '/about', UserIcon),
  new NavItem('Posts', '/posts', RssIcon)
]

export const footerNavItems: NavItem[] = [
  new NavItem('Second Brain', '/secondbrain', BrainIcon),
  new NavItem('Publications', '/publications', NewspaperIcon),
  new NavItem('Uses', '/uses', DesktopComputerIcon)
]

export const socialFooterNavItems: NavItem[] = [
  new NavItem('Twitter', 'https://twitter.com/joshmedeski', BsTwitter),
  new NavItem('YouTube', 'https://www.youtube.com/joshmedeski', BsYoutube),
  new NavItem('Twitch', 'http://twitch.tv/joshmedeski', BsTwitch)
]

export const sidebarNavItems: NavItem[] = [
  ...headerNavItems,
  ...footerNavItems,
  ...socialFooterNavItems
]
