import { type AppType } from "next/dist/shared/lib/utils";
import Background from "../components/Background";
import Pageillustration from "../components/PageIllustration";
import MobileHamburger from "../components/mobile/MobileHamburger";
import { useState } from "react";
import MobileMenu from "../components/mobile/MobileMenu";
import Header from "../components/Header";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="overflow-x-hidden overflow-y-visible bg-gray-900">
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
