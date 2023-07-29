import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            src="https://plausible.io/js/script.js"
            data-domain="mike.website"
            strategy="afterInteractive"
          />
          {/* Add the highlight.js library */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/styles/default.min.css" />
          <Script 
            src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js" 
            strategy="afterInteractive"
          />
                  <title>Michael O'Sullivcan's Website - Bywire News, Labour Party, UK Fact Check Politics</title>
                  <meta name="description" content="This is Michael O'Sullivan, the founder and CEO of Bywire News, personal website. He loves technology, innovation, and Python programming." />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
