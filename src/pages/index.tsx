<<<<<<< HEAD
import Process from "../components/Process";
import LandingPageTitle from "../components/LandingPageTitle";
=======
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
>>>>>>> 6e70cd66edbcdd7f829ad2631910ad8e7a407327

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
