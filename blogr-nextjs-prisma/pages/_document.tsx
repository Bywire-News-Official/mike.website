import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            data-domain="mike.website"
            src="https://plausible.io/js/script.js"
          />
          {/* Add the highlight.js library */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/styles/default.min.css" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js"></script>
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
