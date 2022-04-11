import Img from 'next/image'
import Link from 'next/link'
import React from 'react'

import PageTitle from '@/ui/PageTitle'
import { NextPageWithLayout } from '@/ui/layouts'

class Use {
  name: string
  product: string
  href: string

  constructor(name: string, product: string, href: string) {
    this.name = name
    this.product = product
    this.href = href
  }
}

const UseItem: React.FC<{ name: string; product: string; href: string }> = ({
  name,
  product,
  href
}) => (
  <li>
    {name}:{' '}
    <a href={href} target="_blank" rel="noopener noreferrer">
      {product}
    </a>
  </li>
)

const hardware: Use[] = [
  new Use(
    'Laptop',
    'Macbook Pro 16" (2021)',
    'https://www.apple.com/macbook-pro-14-and-16/'
  ),
  new Use(
    'Monitor',
    'ASUS 27" IPS PA279CV',
    'https://www.asus.com/us/Displays-Desktops/Monitors/ProArt/ProArt-Display-PA279CV/'
  ),
  new Use(
    'Stand',
    'Rain Design mStand',
    'https://www.raindesigninc.com/mstand.html'
  ),
  new Use('Keyboard', 'Moonlander', 'https://www.zsa.io/moonlander/'),
  new Use(
    'Mouse',
    'Wireless Trackball M570',
    'https://www.logitech.com/en-us/product/wireless-trackball-m570'
  ),
  new Use(
    'Mousepad',
    'StormTrooper XXL',
    'https://gutzyaiden.com/collections/topo-collection/products/stormtrooper-topo-xxl-mousepad'
  ),
  new Use(
    'Hub',
    '7-in-1 Multiport',
    'https://www.bestbuy.com/site/satechi-usb-type-c-slim-7-in-1-multiport-adapter-with-ethernet-4k-hdmi-gigabit-ethernet-usb-c-pd-charging-space-gray/6410333.p?skuId=6410333'
  ),
  new Use(
    'Lamp',
    'ScreenBar LED Monitor Light',
    'https://www.benq.com/en-us/lamps/computer-desklamp/screenbar.html'
  ),
  new Use('Tablet', 'iPad Pro 12.9" (2018)', 'https://www.apple.com/ipad-pro/'),
  new Use('Phone', 'iPhone 12 Mini', 'https://www.apple.com/iphone-12')
]

const audio: Use[] = [
  new Use(
    'Speakers',
    'Audioengine A2+',
    'https://audioengineusa.com/shop/wirelessspeakers/a2-wireless-computer-speakers'
  ),
  new Use(
    'Headphones',
    'Sennheiser HD 6XX',
    'https://drop.com/buy/massdrop-sennheiser-hd6xx'
  ),
  new Use(
    'SDAC',
    'O2 + SDAC DAC/AMP',
    'https://drop.com/buy/massdrop-o2-sdac-dac-amp'
  ),
  new Use(
    'Earbuds',
    'AirPods (3rd generation)',
    'https://www.apple.com/airpods/'
  ),
  new Use(
    'Headphones',
    'Sony WH-1000XM',
    'https://www.sony.com/electronics/headband-headphones/wh-1000xm3'
  ),
  new Use('Headphones', 'AfterShoks', 'https://aftershokz.com/us/')
]

const software: Use[] = [
  new Use('Main Browser', 'Safari', 'https://www.apple.com/safari/'),
  new Use('Developer Browser', 'Chrome', 'https://www.google.com/chrome/'),
  new Use('Calendar', 'Fantastical', 'https://flexibits.com/fantastical'),
  new Use('Email', 'Spark', 'https://sparkmailapp.com/'),
  new Use('Tasks', 'Things 3', 'https://culturedcode.com/things/'),
  new Use('Notes', 'Obsidian', 'https://obsidian.md'),
  new Use('Read it later', 'Instapaper', 'https://www.instapaper.com/'),
  new Use('Window Management', 'Yabai', 'https://github.com/koekeishiya/yabai'),
  new Use('Groceries', 'Anylist', 'https://www.anylist.com/'),
  new Use(
    'Budgeting',
    'YNAB (Referral)',
    'https://ynab.com/referral/?ref=h0if_VB0j_jCMSwN&utm_source=customer_referral'
  ),
  new Use('Knowledge Management', 'Evernote', 'https://evernote.com'),
  new Use('Music Player', 'Spotify', 'https://www.spotify.com/'),
  new Use(
    'Photo Editing',
    'Photoshop',
    'https://www.adobe.com/products/photoshop'
  )
]

const terminal: Use[] = [
  new Use('Terminal', 'Alacritty', 'https://github.com/alacritty/alacritty'),
  new Use('Multiplexer', 'tmux', 'https://github.com/tmux/tmux'),
  new Use('Shell', 'fish', 'https://fishshell.com/'),
  new Use('Editor', 'neovim', 'https://neovim.io/')
]

const UsesPage: NextPageWithLayout<any> = () => {
  return (
    <div className="mx-4 my-6 sm:my-12">
      <PageTitle>Uses</PageTitle>
      <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark max-w-none">
        <p>A list of my gear, software, and developer setup.</p>
        <div className="md:float-right md:ml-4 md:my-0">
          <Img
            src="/images/josh-medeski-uses.jpg"
            alt="Josh Medeski's desk"
            className="rounded-lg shadow-lg"
            layout="intrinsic"
            width={400}
            height={300}
          />
        </div>

        <h2>Hardware</h2>
        <ul>
          {hardware.map((use) => (
            <UseItem key={use.name} {...use} />
          ))}
        </ul>

        <div>
          <h2>Software</h2>
          <ul className="grid sm:grid-cols-2">
            {terminal.map((use) => (
              <UseItem key={use.name} {...use} />
            ))}
            {software.map((use) => (
              <UseItem key={use.name} {...use} />
            ))}
          </ul>
        </div>

        <div>
          <h2>Audio</h2>
          <ul className="grid sm:grid-cols-2">
            {audio.map((use) => (
              <UseItem key={use.name} {...use} />
            ))}
          </ul>
        </div>

        <h2>Desk</h2>
        <p>
          I wrote a blog post about{' '}
          <Link href="/how-to-make-an-ikea-hack-standing-desk/">
            how to make an IKEA hack standing desk
          </Link>
        </p>

        <h2>Dotfiles</h2>
        <p>
          For a complete look at my development configuration and setup, go to{' '}
          <a
            href="https://dotfiles.joshmedeski.com"
            rel="noreferrer"
            target="_blank"
          >
            dotfiles.joshmedeski.com
          </a>
        </p>

        <hr className="dark:border-gray-700" />

        <p>
          Check out more users at{' '}
          <a href="https://uses.tech" rel="noreferrer" target="_blank">
            users.tech
          </a>
        </p>
      </div>
    </div>
  )
}

UsesPage.metaData = {
  title: 'Uses',
  description: 'A list of my gear, software, and developer setup.'
}

export default UsesPage
