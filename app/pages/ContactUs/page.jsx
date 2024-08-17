"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import contactUsHackathonPoster from "@/public/hackathon.png";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { FaPaperPlane, FaRocket, FaLightbulb, FaQuestionCircle } from "react-icons/fa";

const Page = () => {
  const [state, handleSubmit, reset] = useForm("xgvwkpdn");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setFormSubmitted(true);
      reset();
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      Swal.fire({
        title: "Message Sent!",
        text: "Your query has been launched into cyberspace. We'll respond faster than light on your mail!",
        icon: "success",
        confirmButtonText: "Awesome!",
        confirmButtonColor: "#4F46E5",
        background: '#1F2937',
        color: '#FFFFFF',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-blue-900 text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Connect with the Code Wizards
          </h1>
          <p className="text-xl md:text-2xl text-blue-200">
            Got questions? Ideas? Or just want to say hi? We're all ears!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src={contactUsHackathonPoster}
              alt="Contact Image"
              className="relative z-10 transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-300 mb-2">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-blue-300 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  type="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300"
              >
                <FaPaperPlane className="inline mr-2" /> Launch Your Message
              </button>
            </form>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Page;