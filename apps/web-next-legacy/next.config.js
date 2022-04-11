module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: 'raw-loader'
    })
    return config
  },

  async redirects() {
    return [
      {
        source: '/bullet-journal-didnt-work',
        destination: '/posts/bullet-journal-didnt-work',
        permanent: true
      },
      {
        source: '/deleting-mac-apps',
        destination: '/posts/deleting-mac-apps',
        permanent: true
      },
      {
        source: '/eisenhower-matrix-todoist',
        destination: '/posts/eisenhower-matrix-todoist',
        permanent: true
      },
      {
        source: '/four-letter-word-kills-productivity',
        destination: '/posts/four-letter-word-kills-productivity',
        permanent: true
      },
      {
        source: '/how-to-install-fathom-analytics-in-nextjs',
        destination: '/posts/how-to-install-fathom-analytics-in-nextjs',
        permanent: true
      },
      {
        source: '/how-to-make-an-ikea-hack-standing-desk',
        destination: '/posts/how-to-make-an-ikea-hack-standing-desk',
        permanent: true
      },
      {
        source: '/macos-keyboard-shortcuts-for-tmux',
        destination: '/posts/macos-keyboard-shortcuts-for-tmux',
        permanent: true
      },
      {
        source: '/navigate-the-web-with-vim',
        destination: '/posts/navigate-the-web-with-vim',
        permanent: true
      },
      {
        source: '/nextjs-blog-using-mdx',
        destination: '/posts/nextjs-blog-using-mdx',
        permanent: true
      },
      {
        source: '/overcome-perfectionism',
        destination: '/posts/overcome-perfectionism',
        permanent: true
      },
      {
        source: '/waiting-for',
        destination: '/posts/waiting-for',
        permanent: true
      },
      {
        source: '/weekly-review',
        destination: '/posts/weekly-review',
        permanent: true
      }
    ]
  }
}
