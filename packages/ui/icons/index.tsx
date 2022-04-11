import React from "react";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {
  faAlbumCollection,
  faBooks,
  faBoxOpen,
  faChartLine,
  faCommand,
  faComputerSpeaker,
  faDoorOpen,
  faEnvelopeOpenText,
  faGamepadModern,
  faHeadSide,
  faHeadSideBrain,
  faLaptopCode,
  faListCheck,
  faNewspaper,
  faPopcorn,
  faSeedling,
  faSquareTerminal,
  faSunrise,
  faSunset,
  faTypewriter,
} from "@fortawesome/pro-duotone-svg-icons";

import {
  faGithubAlt,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type IconProps = { className: string };

/**
 * Base
 */
const Icon: React.FC<FontAwesomeIconProps> = ({ style, ...props }) => (
  <FontAwesomeIcon
    style={{
      "--fa-primary-color:": "currentColor",
      ...style,
    }}
    {...props}
  />
);

/**
 * Navigation
 */
const StartHereIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faDoorOpen} {...props} />
);

const BlogIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faTypewriter} {...props} />
);

const PublicationsIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faNewspaper} {...props} />
);

const AboutIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faHeadSide} {...props} />
);

const NewsletterIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faEnvelopeOpenText} {...props} />
);

const AnalyticsIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faChartLine} {...props} />
);

const SecondBrainIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faHeadSideBrain} {...props} />
);

const UsesIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faComputerSpeaker} {...props} />
);

const DarkModeIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faSunset} {...props} />
);

const LightModeIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faSunrise} {...props} />
);

/**
 * Topics
 */
const ProductivityIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faListCheck} {...props} />
);

const DevelopmentIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faLaptopCode} {...props} />
);

const DotfilesIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faSquareTerminal} {...props} />
);

const AppleIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faCommand} {...props} />
);

const ProductsIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faBoxOpen} {...props} />
);

const MusicIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faAlbumCollection} {...props} />
);

const FilmIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faPopcorn} {...props} />
);

const GamingIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faGamepadModern} {...props} />
);

const BooksIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faBooks} {...props} />
);

const PersonalDevelopmentIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faSeedling} {...props} />
);

/**
 * Social
 */
const GitHubIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faGithubAlt} {...props} />
);

const TwitchIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faTwitch} {...props} />
);

const TwitterIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faTwitter} {...props} />
);

const InstagramIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faInstagram} {...props} />
);

const LinkedInIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faLinkedin} {...props} />
);

const YouTubeIcon: React.FC<IconProps> = ({ ...props }) => (
  <Icon icon={faYoutube} {...props} />
);

/**
 * Export
 */
export {
  AboutIcon,
  AnalyticsIcon,
  AppleIcon,
  BlogIcon,
  BooksIcon,
  DarkModeIcon,
  DevelopmentIcon,
  DotfilesIcon,
  FilmIcon,
  GamingIcon,
  GitHubIcon,
  InstagramIcon,
  LightModeIcon,
  LinkedInIcon,
  MusicIcon,
  NewsletterIcon,
  PersonalDevelopmentIcon,
  ProductivityIcon,
  ProductsIcon,
  PublicationsIcon,
  SecondBrainIcon,
  StartHereIcon,
  TwitchIcon,
  TwitterIcon,
  UsesIcon,
  YouTubeIcon,
};
