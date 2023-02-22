import Process from "../components/Process";
import LandingPageTitle from "../components/LandingPageTitle";

const LandingPage = () => {
  return (
    <main className="grow overflow-hidden ">
      <div className="min-h-screen w-full overflow-hidden ">
        <div className="lg:h-full lg:w-full">
          <div className="flex h-full flex-col items-center justify-center lg:flex-row">
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
