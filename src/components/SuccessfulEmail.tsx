import { BiMailSend } from "react-icons/bi";

const SuccessfulEmail = () => {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex flex-col items-center lg:flex-row">
        <BiMailSend className="w-1/3 pl-2 text-7xl text-gray-400 md:text-6xl" />
        <p className=" pr-4 text-center font-playfair text-2xl font-bold  text-gray-400 md:w-full md:text-xl">
          Thank you for your email! We will review it and respond as soon as
          possible
        </p>
      </div>
    </div>
  );
};

export default SuccessfulEmail;
