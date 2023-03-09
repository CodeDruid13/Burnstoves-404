import { Ubuntu } from "next/font/google";

import "focus-visible/dist/focus-visible";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "@definitions/chakra/theme";
import { ThemeColorProvider } from "@definitions/context/theme";

const Layout = dynamic(() => import("@layouts/default"));

import "@styles/app.css";
import "@styles/global.scss";

import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import SEO from "../../next-seo.config";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

const ubt = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--ubuntu-font",
});

function BurnstovesApp({
  Component,
  pageProps,
}: ComponentWithPageLayout): JSX.Element {
  const AnyComponent = Component as any;
  const Layoutio = Component.PageLayout as any;

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <ThemeColorProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Script
            strategy="lazyOnload"
            src="https://embed.tawk.to/60a37ddeb1d5182476b9e72d/1f5va7cj3"
          />
          <Head>
            <title>BURN stoves | The Future of Clean Cooking</title>
            <meta
              name="description"
              content="Super fuel-efficient cooking appliances, designed and manufactured in Kenya and used around the world."
              key="desc"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Analytics />
          {Component.PageLayout ? (
            <Layoutio>
              <main className={ubt.className}>
                <AnyComponent {...pageProps} />
              </main>
            </Layoutio>
          ) : (
            <Layout>
              <main className={ubt.className}>
                <AnyComponent {...pageProps} />
              </main>
            </Layout>
          )}
        </ThemeColorProvider>
      </ChakraBaseProvider>
    </>
  );
  // }
}

export default BurnstovesApp;
