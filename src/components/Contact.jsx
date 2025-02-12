import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded values for EmailJS
    const serviceId = "service_wacfd5i";
    const templateId = "template_1zoqkx6";
    const publicKey = "7ecI0Cw2QeD7bJF70";

    // Sending email via EmailJS
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(
        (result) => {
          console.log(result);
          setFormStatus("Message sent successfully!");
          
          // Clear the form fields after successful submission
          e.target.reset();
        },
        (error) => {
          console.log(error.text); // Log error for debugging
          setFormStatus("Message failed to send, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
      <form
        className="mt-6 max-w-3xl mx-auto space-y-4 p-6 bg-white shadow-lg rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Name input field */}
          <input
            className="border border-gray-300 p-3 rounded-md w-full md:w-1/2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            type="text"
            name="fullName" // This should match the template placeholder `{{fullName}}`
            placeholder="Full Name"
            required
          />
          {/* Email input field */}
          <input
            className="border border-gray-300 p-3 rounded-md w-full md:w-1/2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            type="email"
            name="email" // This should match the template placeholder `{{email}}`
            placeholder="Your Email"
            required
          />
        </div>
        {/* Message input field */}
        <textarea
          className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          name="message" // This should match the template placeholder `{{message}}`
          placeholder="Message"
          required
        ></textarea>
        {/* Submit button */}
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700"
          type="submit"
        >
          Submit
        </button>
      </form>
      {formStatus && (
        <div className="mt-4 text-lg text-gray-700">{formStatus}</div>
      )}
    </section>
  );
};

export default Contact;
