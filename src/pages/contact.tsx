import { useState } from "react";
import SuccessfulEmail from "../components/SuccessfulEmail";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  interface ResponseType {
    status: number;
    message: string;
  }

  const handleSubmit = async (data: ContactPageProps) => {
    try {
      const sendEmail = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response: ResponseType = await sendEmail.json();
      console.log(response);
      if (response.status === 201) {
        setSuccess(true);
        setMessage("");
        setEmail("");
        setSubject("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen overflow-hidden bg-gray-900">
      <div className="relative z-10 mx-auto max-w-screen-md py-8 px-4 lg:py-16">
        <p className="mb-8 text-center text-2xl font-light text-gray-400 md:text-xl lg:mb-16">
          We'd love to hear about your software ideas and how we can help turn
          them into reality. Please don't hesitate to reach out to us to get the
          conversation started.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Let us know how we can help you"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => handleSubmit({ email, subject, message })}
            type="submit"
            className="rounded-lg bg-indigo-500 py-3 px-5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
      {success && <SuccessfulEmail />}
    </section>
  );
};

interface ContactPageProps {
  email: string;
  subject: string;
  message: string;
}

export default ContactPage;
