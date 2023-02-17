import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import Process from "../partials/Process";
import FeaturesHome from "../partials/FeaturesHome";
import Tabs from "../partials/Tabs";
import Target from "../partials/Target";
import News from "../partials/News";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/* Page sections */}
        <HeroHome />
        <Process />
        <FeaturesHome />
        <Tabs />
        <Target />
        {/* <News /> */}
        <Newsletter />
      </main>

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
