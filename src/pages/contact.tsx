<<<<<<< HEAD
import { useState } from "react";
import SuccessfulEmail from "../components/SuccessfulEmail";
import Pageillustration from "../components/PageIllustration";
import Background from "../components/Background";
=======
import React from "react";
>>>>>>> 6e70cd66edbcdd7f829ad2631910ad8e7a407327

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: ContactPageProps) => {
    try {
      const sendEmail = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await sendEmail.json();
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
<<<<<<< HEAD
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
=======
              className="dark:shadow-sm-light focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@example.com"
>>>>>>> 6e70cd66edbcdd7f829ad2631910ad8e7a407327
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
              className="dark:shadow-sm-light focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
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
              className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => handleSubmit({ email, subject, message })}
            type="submit"
            className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-indigo-500 py-3 px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
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
