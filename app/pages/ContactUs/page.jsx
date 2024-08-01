'use client';

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Page = () => {
  const [state, handleSubmit, reset] = useForm("mrbzqkdb");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    await handleSubmit(event);
    if (state.succeeded) {
      setFormSubmitted(true); // Set state to trigger the SweetAlert
      reset(); // Reset the form on successful submission
    }
  };

  // Use useEffect to handle SweetAlert2 notifications
  useEffect(() => {
    if (formSubmitted) {
      Swal.fire({
        title: "Done!",
        text: "Your query is sent successfully, we will contact you.",
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#06166A"
      });
      setFormSubmitted(false); // Reset formSubmitted state
    }
  }, [formSubmitted]);

  return (
    <div className="bg-black text-white">
      <Navbar />

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 dark:text-blue-400">
              Contact us
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Chat to our friendly team
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We’d love to hear from you. Please fill out this form for any help.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="align-middle">
              <Image src='/hack-removebg-preview.png' width={500} height={500} alt="Contact Image" priority />
            </div>
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form
                action="https://formspree.io/f/mrbzqkdb"
                method="POST"
                className="space-y-4"
                onSubmit={onSubmit} // Use custom onSubmit handler
              >
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="John"
                      type="text"
                      required
                    />
                    <ValidationError 
                      prefix="First Name" 
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Doe"
                      type="text"
                      required
                    />
                    <ValidationError 
                      prefix="Last Name" 
                      field="lastName"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="johndoe@example.com"
                    type="email"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
