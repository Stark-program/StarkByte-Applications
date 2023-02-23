import Link from "next/link";

const ServiceCard = (props: Service) => {
  if (!props?.service) {
    return null;
  } else {
    const { title, description, price, premium, freeUpdates } = props.service;

    return (
      <div className="mx-auto flex max-w-lg flex-col rounded-lg border-gray-700 bg-gray-800  p-6 text-center text-white shadow xl:p-8">
        <h3 className="mb-4 font-playfair text-2xl font-semibold">{title}</h3>
        <p className="mb-2 font-playfair font-light text-gray-200 sm:text-lg">
          {description}
        </p>
        <Link
          href="/contact"
          className="mt-auto rounded-lg bg-indigo-500 px-5 py-2.5 text-center font-playfair text-sm font-medium text-white hover:bg-indigo-600 focus:ring-4 focus:ring-primary-200 dark:text-white  dark:focus:ring-primary-900"
        >
          Get started
        </Link>
      </div>
    );
  }
};

interface Service {
  service: {
    title: string;
    description: string;
    image: string;
    alt: string;
    price: string;
    premium: boolean;
    freeUpdates: boolean;
  };
}

export default ServiceCard;
