"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import Navbar from "@/app/components/Navbar.jsx";
import { useRouter } from "next/navigation"; // Import useRouter

const page = () => {
  const [teamSize, setTeamSize] = useState(2);
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    teamName: "",
    teamIdea: "",
    headName: "",
    headBranch: "",
    headSemester: "",
    headCollege: "",
    headPhone: "",
    headGithub: "",
    members: [],
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      members: Array(teamSize - 1)
        .fill()
        .map(() => ({
          name: "",
          branch: "",
          semester: "",
          college: "",
          role: "",
        })),
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
    const memberKey = id.split("-")[1];
    setFormData((prevState) => {
      const newMembers = [...prevState.members];
      newMembers[index] = { ...newMembers[index], [memberKey]: value };
      return { ...prevState, members: newMembers };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Registration Closed",
      text: "Sorry, the registration for Campus Creators is currently closed.",
      icon: "info",
      confirmButtonText: "Okay",
      confirmButtonColor: "#06166A",
    }).then(() => {
      router.push("/"); // Redirect to home when "Okay" is clicked
    });
  };
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 min-h-screen">
        <div className="min-h-screen p-4 sm:p-8 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="bg-blue-500 shadow-2xl rounded-lg overflow-hidden">
                <div className="bg-blue-500 p-6 text-white">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center">
                    Hack the Future: Registration
                  </h2>
                  <p className="text-center mt-2 text-white">
                    Join the innovation revolution!
                  </p>
                </div>

                <div className="p-6 space-y-8">
                  <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                      Team Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="teamName"
                            className="block text-white mb-2"
                          >
                            Team Name
                          </label>
                          <input
                            type="text"
                            id="teamName"
                            className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your team name"
                            required
                            value={formData.teamName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="teamIdea"
                            className="block text-white mb-2"
                          >
                            Team Idea
                          </label>
                          <input
                            type="text"
                            id="teamIdea"
                            className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-blue-400"
                            placeholder="Describe your team idea"
                            required
                            value={formData.teamIdea}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="teamSize"
                          className="block text-white mb-2"
                        >
                          Team Size
                        </label>
                        <select
                          id="teamSize"
                          className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-blue-400"
                          value={teamSize}
                          onChange={(e) => setTeamSize(parseInt(e.target.value))}
                        >
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h3 className="text-2xl font-semibold mb-4 text-green-300">
                      Head Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: "Name", id: "headName", type: "text" },
                        { label: "Branch", id: "headBranch", type: "text" },
                        { label: "Semester", id: "headSemester", type: "text" },
                        { label: "College Name", id: "headCollege", type: "text" },
                        { label: "Phone Number", id: "headPhone", type: "tel" },
                        { label: "GitHub Profile Link", id: "headGithub", type: "url" },
                      ].map(({ label, id, type }) => (
                        <div key={id}>
                          <label htmlFor={id} className="block text-white mb-2">
                            {label}
                          </label>
                          <input
                            type={type}
                            id={id}
                            className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-green-400"
                            placeholder={`Enter ${label.toLowerCase()}`}
                            required
                            value={formData[id]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="relative flex items-start">
                    <input
                      type="checkbox"
                      id="agree"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      required
                    />
                    <label
                      htmlFor="agree"
                      className="tooltip tooltip-right ml-2 text-black"
                      data-tip="
- The details entered by the head shall be final and verified and cannot be changed later.
- Participation in the event is subject to a per-team basis, i.e., one person is not allowed to be part of more than one team.
- Teams should strictly not use any proprietary software in their code, Ai assistant like chatGPT, claude can be used .
- Each team can submit only one entry for the event.
- A team can have 2 to 4 members.
- Any participant found annoying judges or organizers shall lead to disqualification of the whole team.
- Violating any terms and conditions shall lead to disqualification of whole team"
                    >
                      I agree to the
                      <span className="text-white underline ml-1">
                        Terms and Conditions.
                      </span>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="whatsapp"
                      className="form-checkbox h-5 w-5 text-green-600"
                      required
                    />
                    <label htmlFor="whatsapp" className="ml-2 text-black">
                      I have joined the official
                      <Link href="https://chat.whatsapp.com/IHykNHJwQnh8Lo3hwl3Dr5" passHref>
                        <span className="text-white underline ml-1">
                          WhatsApp group
                        </span>
                      </Link>
                      {''}where all the updates shall be given.
                    </label>
                  </div>

                  {[...Array(teamSize - 1)].map((_, index) => (
                    <section
                      key={index}
                      className="bg-gray-700 p-6 rounded-lg shadow-inner"
                    >
                      <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                        Member {index + 2} Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Name", "Branch", "Semester", "College Name", "Role"].map((field) => (
                          <div key={field}>
                            <label
                              htmlFor={`member${index + 1}-${field.toLowerCase()}`}
                              className="block text-white mb-2"
                            >
                              {field}
                            </label>
                            <input
                              type="text"
                              id={`member${index + 1}-${field.toLowerCase()}`}
                              className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-purple-400"
                              placeholder={`Enter ${field.toLowerCase()}`}
                              value={formData.members[index]?.[field.toLowerCase()] || ""}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                  <div className="mt-8 text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-full"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
