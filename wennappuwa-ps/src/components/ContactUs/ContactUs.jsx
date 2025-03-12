import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-6">
      {/* Left Side - Contact Info */}
      <ContactInfo />
      {/* Right Side - Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;
