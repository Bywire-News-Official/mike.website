import { SessionProvider } from 'next-auth/react';
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

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
  
  return <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp;