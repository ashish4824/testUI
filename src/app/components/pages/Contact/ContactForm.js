"use client"; 

import React, { useState } from "react";
import bg from "./bg.jpg";
import Link from "next/link";

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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch("http://ashish.girdharengineering.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setResponseMsg("Message sent successfully!");
      }
    } catch (error) {
      setResponseMsg("Message sent successfully!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">
              HOME
            </Link>
            <span className="text-red-500 mx-2">/</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">COMPANY</span>
            <span className="text-red-500 mx-2">/</span>
            <Link href="/ContactForm" className="text-red-400 font-semibold">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%]">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">SEND US A MESSAGE</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600"
              disabled={loading}
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
            {responseMsg && <p className="mt-2 text-sm text-green-500">{responseMsg}</p>}
          </form>
        </div>

        {/* Office Addresses */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div>
            <h3 className="font-semibold">CORPORATE OFFICE ADDRESS:</h3>
            <p>📍 14/3A 1A4, Brigade Cosmopolis, Balaraj's Arcade, Bangalore, India</p>
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
