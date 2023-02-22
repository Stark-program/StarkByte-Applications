const ServiceCard = (props: Service) => {
  if (!props?.service) {
    return null;
  } else {
    const { title, description, price, premium, freeUpdates } = props.service;

    return (
      <div className="mx-auto flex max-w-lg flex-col rounded-lg border-gray-700 bg-gray-800  p-6 text-center text-white shadow xl:p-8">
        <h3 className="mb-4 font-playfair text-2xl font-semibold">{title}</h3>
        <p className="font-playfair font-light text-gray-200 sm:text-lg">
          {description}
        </p>
        <div className="my-8 flex items-baseline justify-center">
          <span className="mr-2 font-playfair text-5xl font-extrabold">
            {price}
          </span>
          <span className="font-playfair text-gray-200 ">/hour</span>
        </div>

        <ul
          role="list"
          className=" align-center mb-8 flex flex-col justify-center space-y-4 text-left"
        >
          <li className="flex w-full items-center justify-center space-x-3 pr-1 lg:justify-start ">
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-playfair">Individual configuration</span>
          </li>
          <li className="flex w-full items-center justify-center space-x-3 lg:justify-start">
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-playfair">No setup, or hidden fees</span>
          </li>
          {freeUpdates ? (
            <li className="flex w-full items-center justify-center space-x-3 pr-4 lg:justify-start lg:pr-0">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="font-playfair">
                Free updates:{" "}
                <span className="font-playfair font-semibold">1 month</span>
              </span>
            </li>
          ) : null}
          {premium ? (
            <li className="flex w-full items-center justify-center  space-x-3 pl-6 lg:justify-start lg:pl-0">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="font-playfair">
                Premium support:{" "}
                <span className="font-playfair font-semibold">6 months</span>
              </span>
            </li>
          ) : null}
        </ul>
        <a
          href="#"
          className="rounded-lg bg-indigo-500 px-5 py-2.5 text-center font-playfair text-sm font-medium text-white hover:bg-indigo-600 focus:ring-4 focus:ring-primary-200 dark:text-white  dark:focus:ring-primary-900"
        >
          Get started
        </a>
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
