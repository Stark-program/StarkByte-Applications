import { type AppType } from "next/dist/shared/lib/utils";
import Background from "../components/Background";
import Pageillustration from "../components/PageIllustration";
import MobileHamburger from "../components/mobile/MobileHamburger";
import { useState } from "react";
import MobileMenu from "../components/mobile/MobileMenu";
import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
const MyApp: AppType = ({ Component, pageProps }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden bg-gray-900">
      <Head>
        <meta
          name="theme-color"
          content="#151719"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#151719"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="StarkByte Applications"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative mx-auto h-0 max-w-5xl" aria-hidden="true">
        <Pageillustration />
      </div>
      <MobileHamburger mobileMenu={handleMobileMenu} />
      {mobileMenu ? (
        <MobileMenu mobileMenu={handleMobileMenu} mobileMenuShow={mobileMenu} />
      ) : (
        <Header />
      )}
      <Background />
      <Component className="" {...pageProps} />
    </div>
  );
};

export default MyApp;
