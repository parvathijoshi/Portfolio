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
    <section id="contact" className="py-16 bg-gradient-to-r from-pink-100 to-purple-100 text-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-10 bg-no-repeat bg-cover bg-center" 
           style={{ backgroundImage: 'url("/illustration.png")' }}></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-[#E18AAA] mb-6">Let's Connect</h2>
        <form
          className="mt-6 max-w-3xl mx-auto space-y-4 p-6 bg-white shadow-lg rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {/* Name input field */}
            <input
              className="border border-[#D37F92] p-3 rounded-md w-full md:w-1/2 focus:ring-2 focus:ring-[#E18AAA] focus:border-[#E18AAA]"
              type="text"
              name="fullName" // This should match the template placeholder `{{fullName}}`
              placeholder="Full Name"
              required
            />
            {/* Email input field */}
            <input
              className="border border-[#D37F92] p-3 rounded-md w-full md:w-1/2 focus:ring-2 focus:ring-[#E18AAA] focus:border-[#E18AAA]"
              type="email"
              name="email" // This should match the template placeholder `{{email}}`
              placeholder="Your Email"
              required
            />
          </div>
          {/* Message input field */}
          <textarea
            className="border border-[#D37F92] p-3 rounded-md w-full focus:ring-2 focus:ring-[#E18AAA] focus:border-[#E18AAA]"
            name="message" // This should match the template placeholder `{{message}}`
            placeholder="Message"
            required
          ></textarea>
          {/* Submit button */}
          <button
            className="bg-[#E18AAA] text-white px-6 py-3 rounded-md hover:bg-[#D37F92] transition-transform transform hover:scale-105 shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
        {formStatus && (
          <div className="mt-4 text-lg text-[#D37F92]">{formStatus}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
