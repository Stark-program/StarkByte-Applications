import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";

const LandingPage = () => (
  <div className="min-h-screen w-screen bg-gray-900">
    <div className=" h-screen w-full">
      <div className="flex h-full flex-row items-center justify-center">
        <div className="flex h-full w-1/12 flex-col items-start space-y-80 text-white ">
          <div className="font-playfair flex w-full justify-center">
            <AiOutlineLaptop className="text-8xl" />
          </div>
          <nav className="flex w-full flex-col items-center ">
            <a
              rel="about"
              href="/about"
              className="font-playfair  w-full border-t-2 border-gray-500 py-2 text-center text-xl font-bold"
            >
              About
            </a>
            <a
              rel="services"
              href="/services"
              className="font-playfair w-full border-y-2 border-gray-500 py-2 text-center text-xl font-bold"
            >
              Services
            </a>
            <a
              rel="contact"
              href="/contact"
              className="font-playfair w-full border-b-2 border-gray-500 py-2 text-center text-xl font-bold"
            >
              Contact
            </a>
          </nav>
          <div className="font-playfair flex w-full justify-center">
            <div className="flex w-1/2 justify-between space-x-2">
              <Link
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle className="text-3xl" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillFacebook className="text-3xl" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillInstagram className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="items-left ml-20 flex w-11/12 flex-col">
          <h1 className="font-playfair text-7xl font-bold text-white">
            Stark Solutions
          </h1>
          <p className="font-playfair mt-4 text-left text-2xl text-gray-400">
            Affordable software for big ideas.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="font-playfair rounded-full bg-indigo-500 py-2 px-4 text-xl font-bold text-white hover:bg-indigo-600"
            >
              Click here for a free consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
