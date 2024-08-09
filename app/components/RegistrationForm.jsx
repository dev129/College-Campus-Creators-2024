// RegistrationForm.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../supabaseConfig.js";
import Swal from "sweetalert2";
const RegistrationForm = () => {
  const [teamSize, setTeamSize] = useState(2);

  const [formData, setFormData] = useState({
    teamName: "",
    teamIdea: "",
    headName: "",
    headBranch: "",
    headSemester: "",
    headCollege: "",
    headPhone: "",
    headGithub: "",
    members: Array(1).fill({
      name: "",
      branch: "",
      semester: "",
      college: "",
      role: "",
    }),
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      members: Array(teamSize - 1).fill({
        name: "",
        branch: "",
        semester: "",
        college: "",
        role: "",
      }),
    }));
  }, [teamSize]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleMemberChange = (index, e) => {
    const { id, value } = e.target;
    const members = [...formData.members];
    const memberKey = id.split("-")[1];
    members[index] = { ...members[index], [memberKey]: value };
    setFormData((prevState) => ({
      ...prevState,
      members,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      teamName,
      teamIdea,
      headName,
      headBranch,
      headSemester,
      headCollege,
      headPhone,
      headGithub,
      members,
    } = formData;
    const { error } = await supabase.from("registrations").insert([
      {
        team_name: teamName,
        team_idea: teamIdea,
        head_name: headName,
        head_branch: headBranch,
        head_semester: headSemester,
        head_college: headCollege,
        head_phone: headPhone,
        head_github: headGithub,
        members,
      },
    ]);

    if (error) {
      Swal.fire({
        title: "Oops!",
        text: "Sorry, your team couldn`t be registered.",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Woohoo!",
        text: "Your team is registered succesfully for Campus Creators",
        icon: "success",
        confirmButtonText: "Cool, Let`s Hack",
        confirmButtonColor: "#06166A",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900  min-h-screen">
      <div className="min-h-screen p-4 sm:p-8 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-8 bg-gray-800 shadow-md rounded-md w-full max-w-3xl mx-auto text-white my-5"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6  text-center">
              <div className="divider divider-accent ">Registration Form <br/>(Institute Level)</div>
            </h2>
            <br />

            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Team Details
            </h3>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                <div className="mb-4">
                  <label htmlFor="teamName" className="block text-white">
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="teamIdea" className="block text-white">
                    Team Idea
                  </label>
                  <input
                    type="text"
                    id="teamIdea"
                    className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4 sm:col-span-1">
                <label htmlFor="teamSize" className="block text-white">
                  Team Size
                </label>
                <select
                  id="teamSize"
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

            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Head Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="mb-4">
                <label htmlFor="headName" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="headName"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headBranch" className="block text-white">
                  Branch
                </label>
                <input
                  type="text"
                  id="headBranch"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headSemester" className="block text-white">
                  Semester
                </label>
                <input
                  type="text"
                  id="headSemester"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headCollege" className="block text-white">
                  College Name
                </label>
                <input
                  type="text"
                  id="headCollege"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headPhone" className="block text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="headPhone"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="headGithub" className="block text-white">
                  GitHub
                </label>
                <input
                  type="text"
                  id="headGithub"
                  className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
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
                I agree with the{" "}
                <span
                  className="tooltip tooltip-right font-bold"
                  data-tip="
• Clean commit history required
• One person per team
• Use open-source software only
• One entry per team
• Teams of 2-4 members
• Respect all participants, organizers"
                >
                  Terms and Conditions.{" "}
                </span>
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

            {[...Array(teamSize - 1)].map((_, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-6">
                  Member {index + 1} Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="mb-4">
                    <label
                      htmlFor={`member${index + 1}-name`}
                      className="block text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id={`member${index + 1}-name`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                      onChange={(e) => handleMemberChange(index, e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor={`member${index + 1}-branch`}
                      className="block text-white"
                    >
                      Branch
                    </label>
                    <input
                      type="text"
                      id={`member${index + 1}-branch`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                      onChange={(e) => handleMemberChange(index, e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor={`member${index + 1}-semester`}
                      className="block text-white"
                    >
                      Semester
                    </label>
                    <input
                      type="text"
                      id={`member${index + 1}-semester`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                      onChange={(e) => handleMemberChange(index, e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor={`member${index + 1}-college`}
                      className="block text-white"
                    >
                      College Name
                    </label>
                    <input
                      type="text"
                      id={`member${index + 1}-college`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                      onChange={(e) => handleMemberChange(index, e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor={`member${index + 1}-role`}
                      className="block text-white"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id={`member${index + 1}-role`}
                      className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                      required
                      onChange={(e) => handleMemberChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
            >
              Let's Hack
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
