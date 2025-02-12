import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded values
    const serviceId = "service_wacfd5i";
    const templateId = "template_1zoqkx6";
    const publicKey = "7ecI0Cw2QeD7bJF70";

    // Ensure the form fields are being passed correctly
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(
        (result) => {
          console.log(result);
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text); // Log the error text for debugging
          setFormStatus("Message failed to send, please try again.");
        }
      );
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Let's Discuss Your Project</h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        {/* Ensure the name and email fields have matching names as in the EmailJS template */}
        <input
          className="border border-gray-300 p-2 rounded-md w-1/3 m-2"
          type="text"
          name="fullName" // This should match the template placeholder `{{fullName}}`
          placeholder="Full Name"
          required
        />
        <input
          className="border border-gray-300 p-2 rounded-md w-1/3 m-2"
          type="email"
          name="email" // This should match the template placeholder `{{email}}`
          placeholder="Your Email"
          required
        />
        <textarea
          className="border border-gray-300 p-2 rounded-md w-2/3 m-2"
          name="message" // This should match the template placeholder `{{message}}`
          placeholder="Message"
          required
        ></textarea>
        <button
          className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-700"
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
