import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      title: "One Page Website",
      description:
        "A one page website that contains all of the necessary information about a business or organization. The design of a one page website is typically minimalistic and focuses on delivering the key information in a clear and concise manner.",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$30",
      freeUpdates: true,
      premium: false,
    },
    {
      title: "Comprehensive Website",
      description:
        "A comprehensive website is a more complex website that consists of multiple pages and is built using a fullstack development framework. This type of website is suitable for businesses that require more advanced functionality such as e-commerce, custom forms, and integrations with other services",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$40",
      freeUpdates: false,
      premium: true,
    },
    {
      title: "Custom Application",
      description:
        "A custom application/script is a software solution that is developed specifically for a business's unique needs. This type of service involves creating a customized solution that meets the business's requirements and integrates with existing systems and software",
      image: "https://links.papareact.com/3ke",
      alt: "Picture of the author",
      price: "$50",
      freeUpdates: false,
      premium: true,
    },
  ];

  return (
    <section className=" bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className=" relative z-10 mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <p className=" mb-5 font-playfair text-2xl font-light text-gray-300 md:text-xl">
            At StarkByte Applications, we believe that every project is unique
            and deserves personalized attention. We offer free consultations and
            welcome discussions about your software ideas. Our pricing is based
            on the specific needs of each project, ensuring that you receive a
            customized solution that fits your budget and requirements.
          </p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {services.map((service) => (
            <ServiceCard service={service} key={services.indexOf(service)} />
          ))}
        </div>
        <p className="mt-4 text-center font-playfair italic text-gray-400"></p>
      </div>
    </section>
  );
};

export default ServicesPage;
