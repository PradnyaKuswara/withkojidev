import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const message = "";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qj3a41p",
        "template_m816vxd",
        form.current,
        "NSWAg7yOYEU8rai5K"
      )
      .then(
        (result) => {
          message = result.text
        },
        (error) => {
          message = error.text;
        }
      );

      e.target.reset();
  };
  return (
    <div
      data-aos="fade-in" data-offset ="200"
      id="contact"
      className="mt-20 max-w-xs sm:max-w-lg lg:max-w-2xl  mx-auto"
    >
      <h2 className="mb-4 text-5xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="mb-8 lg:mb-16 font-light  dark:text-gray-400 sm:text-xl">
        Love to hear from you, let's get in touch!
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
      <p className="mb-8 text-sm text-blue-400">{message}</p>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your Subject"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center transition ease-in-out delay-150 hover:bg-opacity-75 hover:scale-110 text-white rounded-lg bg-teal-900 border border-teal-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Message <i className="ms-1 fas fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
