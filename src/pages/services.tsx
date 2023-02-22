import React from "react";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      title: "One Page Website",
      description: "One page website for your business needs.",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$30",
      freeUpdates: true,
      premium: false,
    },
    {
      title: "Multi-Page Website",
      description: "Website will be built and maintained for 6 months ",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$40",
      freeUpdates: false,
      premium: true,
    },
    {
      title: "Custom Application",
      description: "Custom application built to meet your specific needs.",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$50",
      freeUpdates: false,
      premium: true,
    },
  ];

  return (
    <section className=" bg-gray-900 lg:h-screen">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="font-playfair mb-4 text-4xl font-extrabold tracking-tight text-white">
            STARK SOLUTION SERVICES
          </h2>
          <p className="font-playfair mb-5 font-light text-gray-300 sm:text-xl">
            Stark Solutions provides affordable and reliable software solutions
            tailored to the specific needs of small businesses. Our direct and
            focused approach empowers our clients with the tools and resources
            they need to succeed in today's competitive business environment.
          </p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {services.map((service) => (
            <ServiceCard service={service} key={services.indexOf(service)} />
          ))}
        </div>
        <p className="font-playfair mt-4 text-center italic text-gray-400">
          Please note that pricing for our software services may vary depending
          on the specific needs of your business, and a minimum of 5 hours will
          be billed for every job.
        </p>
      </div>
    </section>
  );
};

export default ServicesPage;
