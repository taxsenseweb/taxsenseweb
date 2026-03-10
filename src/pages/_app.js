import "@/styles/globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import { DefaultSeo } from "next-seo";
import defaultSEO from "../../next-seo.config";
import { GoogleAnalytics } from "../components/analytics/GoogleAnalytics";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../components/analytics/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <LanguageProvider>
      <DefaultSeo {...defaultSEO} />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
