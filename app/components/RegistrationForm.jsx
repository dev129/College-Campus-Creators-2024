'use client'
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
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 min-h-screen">
      <div className="min-h-screen p-4 sm:p-8 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
              <div className="bg-blue-600 p-6 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                  Hack the Future: Registration
                </h2>
                <p className="text-center mt-2 text-blue-200">Join the innovation revolution!</p>
              </div>

              <div className="p-6 space-y-8">
                {/* Team Details Section */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">Team Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="teamName" className="block text-white mb-2">Team Name</label>
                        <input type="text" id="teamName" className="w-full px-3 py-2 border rounded-md text-white bg-gray-600 focus:ring-2 focus:ring-blue-400" required onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="teamIdea" className="block text-white mb-2">Team Idea</label>
                        <input type="text" id="teamIdea" className="w-full px-3 py-2 border rounded-md text-white bg-gray-600 focus:ring-2 focus:ring-blue-400" required onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-white mb-2">Team Size</label>
                      <select id="teamSize" className="w-full px-3 py-2 border rounded-md text-white bg-gray-600 focus:ring-2 focus:ring-blue-400" value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value))}>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Head Details Section */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                  <h3 className="text-2xl font-semibold mb-4 text-green-300">Head Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Name", "Branch", "Semester", "College Name", "Phone Number", "GitHub Profile Link"].map((field) => (
                      <div key={field}>
                        <label htmlFor={`head${field.replace(/\s+/g, '')}`} className="block text-white mb-2">{field}</label>
                        <input type={field === "Phone Number" ? "tel" : "text"} id={`head${field.replace(/\s+/g, '')}`} className="w-full px-3 py-2 border rounded-md text-white bg-gray-600 focus:ring-2 focus:ring-green-400" required onChange={handleChange} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Member Details Sections */}
                {[...Array(teamSize - 1)].map((_, index) => (
                  <section key={index} className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-300">Member {index + 1} Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Name", "Branch", "Semester", "College Name", "Role"].map((field) => (
                        <div key={field}>
                          <label htmlFor={`member${index + 1}-${field.toLowerCase()}`} className="block text-white mb-2">{field}</label>
                          <input type="text" id={`member${index + 1}-${field.toLowerCase()}`} className="w-full px-3 py-2 border rounded-md text-white bg-gray-600 focus:ring-2 focus:ring-purple-400" required onChange={(e) => handleMemberChange(index, e)} />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" id="terms-checkbox" type="checkbox" required />
                    <label className="ml-3 text-sm font-medium text-gray-300" htmlFor="terms-checkbox">
                      I agree with the{" "}
                      <span className="tooltip tooltip-right font-bold text-blue-400 cursor-help" data-tip="• Clean commit history required&#10;• One person per team&#10;• Use open-source software only&#10;• One entry per team&#10;• Teams of 2-4 members&#10;• Respect all participants, organizers">
                        Terms and Conditions.
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" id="whatsapp-checkbox" type="checkbox" required />
                    <label className="ml-3 text-sm font-medium text-gray-300" htmlFor="whatsapp-checkbox">
                      I have joined the official{" "}
                      <Link className="text-blue-400 hover:underline" href="https://chat.whatsapp.com/FCcsK5UFJbmBgTniYwTcVR">
                        WhatsApp Group
                      </Link>{" "}
                      of the hackathon.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Let's Hack
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;