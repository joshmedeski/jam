import {
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
} from ".";

const Icon: React.FC<{ name: string }> = ({ name, children }) => (
  <div className="text-center">
    {children}
    <div className="font-bold leading-none mt-2">{name}</div>
  </div>
);

const Title: React.FC = ({ children }) => (
  <h1 className="text-3xl font-bold mb-4">{children}</h1>
);

export const IconStories = () => (
  <div className="space-y-4">
    <Title>Colors</Title>

    <div className="grid grid-cols-5 xl:grid-cols-10 gap-4">
      <div className="bg-black text-white -m-2 p-2">
        <Icon name="white">
          <StartHereIcon className="text-white w-20 h-20" />
        </Icon>
      </div>

      <div className="bg-white text-black -m-2 p-2">
        <Icon name="black">
          <StartHereIcon className="text-black w-20 h-20" />
        </Icon>
      </div>

      <Icon name="neutral">
        <StartHereIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="primary">
        <StartHereIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="cta">
        <StartHereIcon className="text-cta-500 w-20 h-20" />
      </Icon>

      <Icon name="error">
        <StartHereIcon className="text-error-500 w-20 h-20" />
      </Icon>

      <Icon name="dangerous">
        <StartHereIcon className="text-dangerous-500 w-20 h-20" />
      </Icon>

      <Icon name="warning">
        <StartHereIcon className="text-warning-500 w-20 h-20" />
      </Icon>

      <Icon name="success">
        <StartHereIcon className="text-success-500 w-20 h-20" />
      </Icon>

      <Icon name="uncommon">
        <StartHereIcon className="text-uncommon-500 w-20 h-20" />
      </Icon>
    </div>

    <Title>Navigation</Title>
    <div className="grid grid-cols-5 xl:grid-cols-10 gap-4">
      <Icon name="start here">
        <StartHereIcon className="text-cta-500 w-20 h-20" />
      </Icon>

      <Icon name="Newsletter">
        <NewsletterIcon className="text-cta-500 w-20 h-20" />
      </Icon>

      <Icon name="blog">
        <BlogIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="publications">
        <PublicationsIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="about">
        <AboutIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="second brain">
        <SecondBrainIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="uses">
        <UsesIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="analytics">
        <AnalyticsIcon className="text-primary-500 w-20 h-20" />
      </Icon>

      <Icon name="dark mode">
        <DarkModeIcon className="text-uncommon-500 w-20 h-20" />
      </Icon>

      <Icon name="light mode">
        <LightModeIcon className="text-uncommon-500 w-20 h-20" />
      </Icon>
    </div>

    <Title>Topics</Title>
    <div className="grid grid-cols-5 xl:grid-cols-10 gap-4">
      <Icon name="productivity">
        <ProductivityIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="personal development">
        <PersonalDevelopmentIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="development">
        <DevelopmentIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="Apple">
        <AppleIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="dotfiles">
        <DotfilesIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="products">
        <ProductsIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="books">
        <BooksIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="music">
        <MusicIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="film">
        <FilmIcon className="text-neutral-500 w-20 h-20" />
      </Icon>

      <Icon name="gaming">
        <GamingIcon className="text-neutral-500 w-20 h-20" />
      </Icon>
    </div>

    <Title>Social</Title>
    <div className="grid grid-cols-5 xl:grid-cols-10 gap-4">
      <Icon name="Twitter">
        <TwitterIcon className="text-[#1da1f2] w-20 h-20" />
      </Icon>

      <Icon name="YouTube">
        <YouTubeIcon className="text-[#ff0000] w-20 h-20" />
      </Icon>

      <Icon name="Twitch">
        <TwitchIcon className="text-[#9146ff] w-20 h-20" />
      </Icon>

      <Icon name="GitHub">
        <GitHubIcon className="text[#333] dark:text-[#fafafa] w-20 h-20" />
      </Icon>

      <Icon name="LinkedIn">
        <LinkedInIcon className="text-[#0077b5] w-20 h-20" />
      </Icon>

      <Icon name="Instagram">
        <InstagramIcon className="text-[#fd1d1d] w-20 h-20" />
      </Icon>
    </div>
  </div>
);
