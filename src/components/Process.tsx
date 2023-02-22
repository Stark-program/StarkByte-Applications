const Process = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2
              className="h2 mb-4 font-playfair text-xl  text-white"
              data-aos="fade-up"
            >
              Built exclusively for your business.
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At StarkByte Applications, we follow a rigorous software
              development process that encompasses everything from ideation and
              planning to design, development, and launch. Our team of
              developers works alongside our clients to ensure that their vision
              is brought to life through a seamless and efficient process.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-3 lg:gap-16">
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute hidden h-1 border-t border-dashed border-gray-700 md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <svg
                className="mb-4 h-16 w-16"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2 font-playfair text-white">
                <span className="text-white">1</span>. Consultation and planning
              </h4>
              <p className="text-center text-lg text-gray-400">
                We work closely with clients to understand their needs and
                objectives, and create a project plan that outlines key
                milestones.
              </p>
            </div>

            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute hidden h-1 border-t border-dashed border-gray-700 md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <svg
                className="mb-4 h-16 w-16"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g fill="none" fillRule="evenodd">
                  <path
                    className="stroke-current text-purple-300"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M36 32l-4-3-4 3V22h8z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2 font-playfair text-white">
                <span className="text-white">2</span>. Design and development
              </h4>
              <p className="text-center text-lg text-gray-400">
                Our experienced team of developers designs user interfaces,
                builds software features, and iterates on the development
                process until the software meets the client&apos;s needs.
              </p>
            </div>

            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="mb-4 h-16 w-16"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 35l4 4 12-15"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M42 29h-3M42 34h-7M42 39H31"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2 font-playfair text-white">
                <span className="text-white">3</span>. Launch and support
              </h4>
              <p className="text-center text-lg text-gray-400">
                We help clients get their software up and running and provide
                ongoing support and maintenance, including bug fixing, new
                feature additions, and technical support as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
