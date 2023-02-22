import { BiMailSend } from "react-icons/bi";

const SuccessfulEmail = () => {
  return (
    <div className="flex h-10 w-screen justify-center">
      <div className="flex flex-row items-center">
        <BiMailSend className="w-1/3 pl-2 text-3xl text-gray-400 md:text-6xl" />
        <p className=" pr-4 text-center font-playfair text-sm font-bold  text-gray-400 md:w-full md:text-xl">
          Thank you for your email! We will review it and respond as soon as
          possible
        </p>
      </div>
    </div>
  );
};

export default SuccessfulEmail;
