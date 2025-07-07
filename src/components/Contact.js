import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formElements = form.current.elements;

    const user_name = formElements.name.value;
    const user_email = formElements.email.value;
    const message = formElements.message.value;

    // Send to YOU
    emailjs
      .sendForm(
        "service_9lcx2o8",
        "template_ig2dq6g",
        form.current,
        "paPKS5PH1NLFvdGOX"
      )
      .then(() => {
        // Send auto-reply to USER
        emailjs.send(
          "service_9lcx2o8",
          "template_o766dco", // <-- Create this in your dashboard
          {
            user_name,
            user_email,
            message,
          },
          "paPKS5PH1NLFvdGOX"
        );

        setStatus("Message sent!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send. Try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
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
    </section>
  );
}
