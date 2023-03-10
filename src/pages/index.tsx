import Process from "../components/Process";
import LandingPageTitle from "../components/LandingPageTitle";
import Head from "next/head";

const LandingPage = () => {
  return (
    <main className="grow">
      <Head>
        <title>StarkByte Applications</title>
        <meta
          name="description"
          content="Affordable development for big ideas."
        />

        <meta property="og:title" content="StarkByte Applications" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starkbyteapps.com/" />
        <meta
          property="og:description"
          content="Affordable development for big ideas."
        />
        <meta property="og:image" content="https://i.imgur.com/6Rmi1Qo.png" />
        <meta name="twitter:card" content="https://i.imgur.com/6Rmi1Qo.png" />
        <meta property="twitter:domain" content="starkbyteapps.com" />
        <meta property="twitter:url" content="https://www.starkbyteapps.com/" />
        <meta name="twitter:title" content="StarkByte Applications" />
        <meta
          name="twitter:description"
          content="Affordable development for big ideas."
        />
        <meta name="twitter:image" content="https://i.imgur.com/6Rmi1Qo.png" />
      </Head>
      <div className="">
        <div className="">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="flex flex-col">
              <LandingPageTitle />
              <Process />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
