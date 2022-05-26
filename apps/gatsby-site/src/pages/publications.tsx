import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageProps } from "gatsby"
import styled from "styled-components"
import Title from "../components/title"
import Prose from "../components/prose"

type PublicationType = {
  title: string
  url: string
  publication: string
  date?: string
}

const Publication: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="mb-4">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
      >
        {item.title}
      </a>
      <br />
      <div className="text-sm italic text-gray-500">
        {item.publication} {item.date ? `(${item.date})` : null}
      </div>
    </div>
  )
}

const Articles = styled.div``

const PublicationsPage: React.FC<PageProps> = () => {
  const writingsItems: PublicationType[] = [
    {
      title: "How to Easily Use Google Fonts with Sass",
      url:
        "https://www.developerdrive.com/how-to-easily-use-google-fonts-with-sass/",
      publication: "Developer Drive",
    },
    {
      title: "How to Have the Most Productive Year of Your Life",
      url: "https://blog.doist.com/most-productive-year/",
      publication: "Ambition & Balance, by Doist",
    },
    {
      title:
        "The Ultimate Guide to Being the Most Efficient Freelancer You Can Be",
      url: "https://doist.com/blog/ultimate-guide-efficient-freelancer/",
      publication: "Ambition & Balance, by Doist",
    },
    {
      title:
        "Your Freelance/Remote Work Lifestyle Can Be Much Better, Here’s How",
      url:
        "https://blog.doist.com/your-remote-work-lifestyle-can-be-much-better/",
      publication: "Ambition & Balance, by Doist",
    },
    {
      title: "ProTip: Mailbox + Evernote + IFTTT",
      url:
        "https://www.lifehack.org/articles/technology/protip-mailbox-evernote-ifttt.html",
      publication: "Lifehack",
    },
    {
      title: "Everything You Need To Know About OS X Mavericks",
      url:
        "https://www.lifehack.org/articles/technology/everything-you-need-know-about-mavericks.html",
      publication: "Lifehack",
    },
    {
      title: "Why Afternoon Procrastination Happens And How To Deal With It",
      url:
        "https://www.lifehack.org/articles/productivity/why-afternoon-procrastination-happens-and-how-deal-with.html",
      publication: "Lifehack",
    },
    {
      title: "The Beginner’s Guide to Content Management Systems",
      url:
        "https://www.lifehack.org/articles/technology/the-beginners-guide-to-content-management-systems.html",
      publication: "Lifehack",
    },
    {
      title: "7 Things I Wish Someone Told Me About Slack",
      url: "https://productivityist.com/7-things-about-slack/",
      publication: "Productivityist",
    },
    {
      title: "Using Trello to find a Job",
      url:
        "https://medium.com/productivity-chat/using-trello-to-find-a-job-724e92ee6635",
      publication: "Medium",
      date: "Apr 15, 2014",
    },
    {
      title: "Quick Tip: Use CodeKit 2.0 for Local WordPress Development",
      url:
        "https://webdesign.tutsplus.com/tutorials/quick-tip-use-codekit-20-for-local-wordpress-development--cms-19402",
      publication: "Tuts+",
      date: "Jun 17, 2014",
    },
    {
      title: "An Introduction to the BEM Methodology",
      url:
        "https://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology--cms-19403",
      publication: "Tuts+",
      date: "Feb 28, 2014",
    },
    {
      title: "Simple Visual Enhancements for Better Coding in Sublime Text",
      url:
        "https://webdesign.tutsplus.com/articles/simple-visual-enhancements-for-better-coding-in-sublime-text--webdesign-18052?ec_unit=translation-info-language",
      publication: "Tuts+",
      date: "Feb 3, 2014",
    },
    {
      title: "Turbo-Charge Your CSS With Emmet",
      url:
        "https://webdesign.tutsplus.com/articles/turbo-charge-your-css-with-emmet--webdesign-16511",
      publication: "Tuts+",
      date: "Dec 16, 2013",
    },
    {
      title: "What Do Entry-Level Software Engineers Do?",
      url:
        "https://www.digitalcrafts.com/blog/what-do-entry-level-software-engineers-do",
      publication: "DigitalCrafts",
    },
  ]

  const featuredItems: PublicationType[] = [
    {
      title: "Setup Interview",
      url: "https://people.zsa.io/josh-medeski/",
      publication: "ZSA: The People",
      date: "Feb 17, 2021",
    },
    {
      title: "Using Trello For A Job Search: Less Stress, More Process",
      url:
        "https://blog.trello.com/using-trello-for-a-job-search-less-stress-more-process",
      publication: "Trello",
      date: "Nov 06, 2014",
    },
    {
      title: "How To Find (And Land) Your Next Remote Job",
      url: "https://blog.trello.com/how-to-find-and-land-your-next-remote-job",
      publication: "Trello",
      date: "May 08, 2017",
    },
    {
      title: "Freelancer Spotlight: Josh Medeski",
      url:
        "http://freelancetofreedomproject.com/freelancer-spotlight-josh-medeski/",
      publication: "Freelance to Freedom",
    },
    {
      title: "Josh Medeski’s Mac and iPhone setup",
      url: "https://thesweetsetup.com/josh-medeskis-mac-and-iphone-setup",
      publication: "The Sweet Setup",
      date: "Feb 15, 2016",
    },
    {
      title: "What is Your Favorite Productivity Tool?",
      url:
        "https://www.lifehack.org/articles/productivity/what-your-favorite-productivity-tool.html",
      publication: "Lifehack",
    },
    {
      title: "60 personal effectiveness tips from world-class experts",
      url: "https://xquadrant.com/personal-effectiveness-tips/",
      publication: "Xquadrant",
    },
  ]

  const sortAlphabetically = (a: PublicationType, b: PublicationType) => {
    const titleA = a.title
    const titleB = b.title
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0
  }

  const sortedWritingsItems = writingsItems.sort(sortAlphabetically)
  const sortedFeaturedItems = featuredItems.sort(sortAlphabetically)

  const description = "Here's a collection of my writings from across the web."

  return (
    <Layout>
      <Title text="Publications" />
      <SEO
        title="Publications"
        description={description}
        thumbnail="/josh-freelance-to-freedom-quote.png"
      />

      <Prose>
        <img
          alt="quote from josh"
          src="/josh-freelance-to-freedom-quote.png"
          className="rounded-lg shadow-lg"
        />

        <h2>Articles</h2>
        <p>{description}</p>

        <Articles>
          <ul style={{ marginTop: 0 }}>
            {sortedWritingsItems.map((item, index) => {
              return (
                <li key={index}>
                  <Publication item={item} />
                </li>
              )
            })}
          </ul>
        </Articles>

        <h2>Featured</h2>

        <p>I've also been featured online by some cool people.</p>

        <ul>
          {sortedFeaturedItems.map((item, index) => {
            return (
              <li key={index}>
                <Publication item={item} />
              </li>
            )
          })}
        </ul>

        <h2>Podcast</h2>

        <p>
          <a
            href="https://podcasts.apple.com/us/podcast/one-intentional-life/id906575918"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            One Intentional Life
          </a>{" "}
          is a podcast I made with my buddy John talking about productivity and
          technology.
        </p>
      </Prose>
    </Layout>
  )
}

export default PublicationsPage
