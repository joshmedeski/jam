import Document, { Head, Html, Main, NextScript } from 'next/document'

class JoshMedeskiDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-50 dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default JoshMedeskiDocument
