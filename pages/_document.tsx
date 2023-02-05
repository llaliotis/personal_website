import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <meta property="og:title" content="Nickolas Tazes"/>
            <meta property="og:description" content="Founder of Readnet Publications"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://tazes.me"/>
            <meta property="og:image" content="/ogpersonal.png"/>
            <link rel="icon" href="/Group 219.png"/>
            <meta name="twitter :site" content="@nickolas_tazes" />
            <meta name= "twitter:creator" content="@nickolas_tazes"/>
            <meta property="og:url" content=" https://tazes.me"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="orange tazes in a black background"/>
            <meta name="twitter:title" content="Nickolas Tazes"/>
            <meta name="twitter:description" content="Founder of Readnet Publications. Since the start of 2020, I have envisioned, organized, developed, and launched a series of innovative projects. My goal is to solve some of the biggest social & economical problems in the world. The list of projects includes"/>
            <meta name="twitter:image" content="https://tazes.me/ogpersonal.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument