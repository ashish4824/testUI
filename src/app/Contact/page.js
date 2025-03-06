"use client"; // If using Next.js 13+

import React, { useState } from "react";
import bg from "./bg.jpg";
import Link from "next/link";
import Headers from "@/components/pages/Headers";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://ashish.girdharengineering.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setResponseMsg("Failed to send message. Try again!");
      }
    } catch (error) {
      setResponseMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Headers/>
      <div
        className="relative bg-cover bg-center h-48 text-white flex items-center w-full"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex items-center justify-between xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">CONTACT US</h1>
            <p className="text-gray-300 text-sm">Get in Touch with Us</p>
          </div>
          {/* Breadcrumbs */}
          <div className="text-xs">
            <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link>
            <span className="text-red-500 mx-2">/</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">COMPANY</span>
            <span className="text-red-500 mx-2">/</span>
            <Link href="/ContactForm" className="text-red-400 font-semibold">CONTACT US</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%]">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">SEND US A MESSAGE</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded h-32" required></textarea>
            <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600" disabled={loading}>
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
            {responseMsg && <p className="text-sm mt-2 text-green-600">{responseMsg}</p>}
          </form>
        </div>

        {/* Office Addresses */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div>
            <h3 className="font-semibold">CORPORATE OFFICE ADDRESS:</h3>
            <p>📍 14/3A 1A4, Brigade Cosmpolis, Balaraj's Arcade, 4th Floor, Whitefeild Main Road, Whitefield, Bangalore India-560102.</p>
            <p>📞 080-45687798</p>
            <p>✉️ info@criticaltouchinfo.com</p>
          </div>
          <div>
            <h3 className="font-semibold">SALES OFFICE ADDRESS:</h3>
            <p>📍 5A, City Vista, Kolte-Patil Downtown, Pune, Maharashtra 411014</p>
          </div>
          <div>
            <h3 className="font-semibold">BRANCH OFFICE:</h3>
            <p>📍 Dudley House, 169 Piccadilly, London W1J 9EH, UK</p>
            <p>📞 +44 20 3951 00577</p>
            <p>✉️ infouk@criticaltouchinfo.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
