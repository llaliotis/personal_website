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
            <meta property="og:title" content="Eleftherios Laliotis"/>
            <meta property="og:description" content="Founder of Swollet"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://lalioits.me"/>
            <meta property="og:image" content="/ogpersonal.png"/>
            <link rel="icon" href="/Group 219.png"/>
            <meta name="twitter :site" content="@greekdubliner" />
            <meta name= "twitter:creator" content="@greekdubliner"/>
            <meta property="og:url" content=" https://laliotis.me"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="emerald laliotis in a black background"/>
            <meta name="twitter:title" content="Eleftherios Laliotis"/>
            <meta name="twitter:description" content="Founder of Swollet. Since the beginning of 2020, I have been creating and implementing a range of groundbreaking initiatives with the aim of addressing significant social and economic issues. The projects I have undertaken include:"/>
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