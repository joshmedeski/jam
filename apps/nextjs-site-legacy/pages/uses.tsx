import React from "react";
import { NextPage } from "next";
import Img from "next/image";
import Link from "next/link";

import PageLayout from "@jam/ui/PageLayout";
import PageTitle from "@jam/ui/PageTitle";

class Use {
  name: string;
  product: string;
  href: string;

  constructor(name: string, product: string, href: string) {
    this.name = name;
    this.product = product;
    this.href = href;
  }
}

const UseItem: React.FC<{ name: string; product: string; href: string }> = ({
  name,
  product,
  href,
}) => (
  <li>
    {name}:{" "}
    <a href={href} target="_blank" rel="noopener noreferrer">
      {product}
    </a>
  </li>
);

const computers: Use[] = [
  new Use("Desktop", "Mac Mini (M1)", "https://www.apple.com/mac-mini/"),
  new Use("Laptop", "Thinkpad T430s", "https://www.lenovo.com/us/en/"),
  new Use("Tablet", 'iPad Pro 12.9" (2018)', "https://www.apple.com/ipad-pro/"),
  new Use("Phone", "iPhone 11", "https://www.apple.com/iphone/"),
];

const hardware: Use[] = [
  new Use("Keyboard", "Moonlander", "https://www.zsa.io/moonlander/"),
  new Use(
    "Mouse",
    "Wireless Trackball M570",
    "https://www.logitech.com/en-us/product/wireless-trackball-m570"
  ),
];

const audio: Use[] = [
  new Use(
    "Speakers",
    "Audioengine A2+",
    "https://audioengineusa.com/shop/wirelessspeakers/a2-wireless-computer-speakers"
  ),
  new Use(
    "Wired Headphones",
    "Sennheiser HD 6XX",
    "https://drop.com/buy/massdrop-sennheiser-hd6xx"
  ),
  new Use(
    "SDAC",
    "O2 + SDAC DAC/AMP",
    "https://drop.com/buy/massdrop-o2-sdac-dac-amp"
  ),
  new Use("Earbuds", "AirPods (1st Gen)", "https://www.apple.com/airpods/"),
  new Use(
    "Wireless Headphones",
    "Sony WH-1000XM",
    "https://www.sony.com/electronics/headband-headphones/wh-1000xm3"
  ),
  new Use(
    "Bone Conduction Headphones",
    "AfterShoks",
    "https://aftershokz.com/us/"
  ),
];

const software: Use[] = [
  new Use("Main Browser", "Safari", "https://www.apple.com/safari/"),
  new Use("Developer Browser", "Vivaldi", "https://vivaldi.com"),
  new Use("Calendar", "Fantastical", "https://flexibits.com/fantastical"),
  new Use("Email", "Spark", "https://sparkmailapp.com/"),
  new Use("Tasks", "Things 3", "https://culturedcode.com/things/"),
  new Use("Notes", "Drafts", "https://getdrafts.com/"),
  new Use("Read it later", "Instapaper", "https://www.instapaper.com/"),
  new Use("Window Management", "Yabai", "https://github.com/koekeishiya/yabai"),
  new Use("Groceries", "Anylist", "https://www.anylist.com/"),
  new Use(
    "Budgeting",
    "YNAB (Referral)",
    "https://ynab.com/referral/?ref=h0if_VB0j_jCMSwN&utm_source=customer_referral"
  ),
  new Use("Knowledge Management", "Evernote", "https://evernote.com"),
  new Use("Music Player", "Spotify", "https://www.spotify.com/"),
  new Use("Photo Editing", "Pixelmator Pro", "https://www.pixelmator.com/pro/"),
];

const terminal: Use[] = [
  new Use("Terminal", "Alacritty", "https://github.com/alacritty/alacritty"),
  new Use("Multiplexer", "tmux", "https://github.com/tmux/tmux"),
  new Use("Shell", "fish", "https://fishshell.com/"),
  new Use("Editor", "neovim", "https://neovim.io/"),
];

const UsesPage: NextPage = () => {
  return (
    <PageLayout title="Uses">
      <PageTitle>Uses</PageTitle>
      <div className="mx-4 my-6 sm:my-12">
        <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
          <div className="md:float-right md:ml-4 md:my-0 md:-mr-12 lg:-mr-40">
            <Img
              src="/images/josh-sitting-at-desk.jpg"
              alt="Josh sitting on a bench with a man made out of legos"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={550}
              height={413}
            />
          </div>

          <h2>Computers</h2>
          <ul>
            {computers.map((use) => (
              <UseItem key={use.name} {...use} />
            ))}
          </ul>

          <h2>Hardware</h2>
          <ul>
            {hardware.map((use) => (
              <UseItem key={use.name} {...use} />
            ))}
          </ul>

          <div className="grid sm:grid-cols-2">
            <div>
              <h2>Software</h2>
              <ul>
                {software.map((use) => (
                  <UseItem key={use.name} {...use} />
                ))}
              </ul>
            </div>

            <div>
              <h2>Terminal</h2>
              <ul>
                {terminal.map((use) => (
                  <UseItem key={use.name} {...use} />
                ))}
              </ul>

              <h2>Audio</h2>
              <ul>
                {audio.map((use) => (
                  <UseItem key={use.name} {...use} />
                ))}
              </ul>
            </div>
          </div>

          <h2>Desk</h2>
          <p>
            I wrote a blog post about{" "}
            <Link href="/how-to-make-an-ikea-hack-standing-desk/">
              how to make an IKEA hack standing desk
            </Link>
            .
          </p>

          <p>
            Check out more users at{" "}
            <a href="https://uses.tech" rel="noreferrer" target="_blank">
              users.tech
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default UsesPage;
