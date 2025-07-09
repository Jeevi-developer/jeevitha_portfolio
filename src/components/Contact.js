import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Sending...");

    const formElements = form.current.elements;

    const user_name = formElements.name.value;
    const user_email = formElements.email.value;
    const message = formElements.message.value;

    // Send to YOU
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_NOTIFICATION_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        // Send auto-reply to USER
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // <-- Create this in your dashboard
          {
            user_name,
            user_email,
            message,
          },
          process.env.REACT_APP_EMAILJS_USER_ID
        );

        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
}
