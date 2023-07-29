import { AppProps } from "next/app";
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css'
import 'highlight.js/styles/github.css'; // or another style if you prefer
import 'react-quill/dist/quill.snow.css';
import Head from 'next/head';  // import the Head component from Next.js

// Add this type definition
type CustomAppProps = AppProps & {
  pageProps: {
    session: any;
  };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require('bootstrap/dist/js/bootstrap'); // Import bootstrap js
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Michael O'Sullivan's Website - Bywire News, Labour Party, UK Fact Check Politics</title>
        <meta name="description" content="This is Michael O'Sullivan, the founder and CEO of Bywire News, personal website. He loves technology, innovation, and Python programming." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
