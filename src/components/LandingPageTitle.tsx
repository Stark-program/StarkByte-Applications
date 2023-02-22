import Link from "next/link";

const LandingPageTitle = () => {
  return (
    <div className=" z-10 mx-auto  max-w-sm text-center font-playfair font-bold text-white  lg:mt-20 lg:max-w-3xl lg:pb-12">
      <h1 className="h1 mb-4 text-4xl lg:text-7xl" data-aos="fade-up">
        StarkByte Applications
      </h1>
      <p
        className="mb-8 font-playfair text-xl text-gray-400 lg:text-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Affordable development for big ideas.
      </p>
      <div className="sm:max-w-s mx-auto max-w-xs sm:flex sm:justify-center">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className=" md::mr-2 flex items-center justify-center sm:w-full "
        >
          <Link
            className="btn mb-4 w-1/2 rounded-lg bg-indigo-500 p-4 font-playfair text-xl text-white hover:bg-indigo-600 sm:mb-0 sm:w-auto lg:w-full"
            href="/services"
          >
            Services
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className=" flex items-center justify-center sm:w-full md:ml-2 "
        >
          <Link
            className="btn w-1/2 rounded-lg bg-gray-700 p-4 text-xl text-white hover:bg-gray-800 sm:w-auto lg:w-full"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageTitle;
