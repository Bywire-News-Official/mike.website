import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require('bootstrap/dist/js/bootstrap'); // Import bootstrap js
    }
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;