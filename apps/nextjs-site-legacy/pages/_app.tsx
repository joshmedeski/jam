import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { useEffect } from "react";

import "../styles/globals.css";

function JoshMedeskiApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("VLMOLRDQ", {
      includedDomains: ["www.joshmedeski.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...pageProps} />;
}

export default JoshMedeskiApp;
