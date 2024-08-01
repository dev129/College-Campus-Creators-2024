// RegistrationForm.js
"use client";
import React, { useState } from "react";
import Link from "next/link";

const RegistrationForm = () => {
  const [teamSize, setTeamSize] = useState(2);

  return (
    <div className="bg-hackathon-background bg-cover bg-no-repeat min-h-screen">
      <div className="min-h-screen p-4 sm:p-8 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form className="p-4 sm:p-8 bg-gray-800 shadow-md rounded-md w-full max-w-3xl mx-auto text-white my-5">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 underline text-center">
              Registration Form
            </h2>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Team Details</h3>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                <div className="mb-4">
                  <label htmlFor="teamname" className="block text-white">Team Name</label>
                  <input
                    type="text"
                    id="teamname"
                    className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="teamidea" className="block text-white">Team Idea</label>
                  <input
                    type="text"
                    id="teamidea"
                    className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 sm:col-span-1">
                <label htmlFor="teamsize" className="block text-white">Team Size</label>
                <select
                  id="teamsize"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                >
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-4">Head Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="mb-4">
                <label htmlFor="headName" className="block text-white">Name</label>
                <input
                  type="text"
                  id="headName"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headBranch" className="block text-white">Branch</label>
                <input
                  type="text"
                  id="headBranch"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headSemester" className="block text-white">Semester</label>
                <input
                  type="text"
                  id="headSemester"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headCollege" className="block text-white">College Name</label>
                <input
                  type="text"
                  id="headCollege"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headPhone" className="block text-white">Phone Number</label>
                <input
                  type="tel"
                  id="headPhone"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headGithub" className="block text-white">GitHub</label>
                <input
                  type="text"
                  id="headGithub"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                />
              </div>
            </div>

            {[...Array(teamSize - 1)].map((_, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-6">Member {index + 1} Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="mb-4">
                    <label htmlFor={`member${index + 1}Name`} className="block text-white">Name</label>
                    <input
                      type="text"
                      id={`member${index + 1}Name`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index + 1}Branch`} className="block text-white">Branch</label>
                    <input
                      type="text"
                      id={`member${index + 1}Branch`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index + 1}Semester`} className="block text-white">Semester</label>
                    <input
                      type="text"
                      id={`member${index + 1}Semester`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index + 1}College`} className="block text-white">College Name</label>
                    <input
                      type="text"
                      id={`member${index + 1}College`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index + 1}Role`} className="block text-white">Role</label>
                    <input
                      type="text"
                      id={`member${index + 1}Role`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center mb-4">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id="terms-checkbox"
                type="checkbox"
                required
              />
              <label
                className="ms-2 text-sm font-medium text-gray-300"
                htmlFor="terms-checkbox"
              >
                I agree with the Terms and Conditions
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id="whatsapp-checkbox"
                type="checkbox"
                required
              />
              <label
                className="ms-2 text-sm font-medium text-gray-300"
                htmlFor="whatsapp-checkbox"
              >
                I have joined the official{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  href="https://chat.whatsapp.com/FCcsK5UFJbmBgTniYwTcVR"
                >
                  WhatsApp Group
                </Link>{" "}
                of the hackathon.
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-6"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;