import React from "react";

const HeadDetails = ({ headDetails, setHeadDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeadDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="mb-4">
        <label htmlFor="headname" className="block text-white">
          Head Name
        </label>
        <input
          type="text"
          id="headname"
          name="headName"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.headName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="branch" className="block text-white">
          Branch
        </label>
        <input
          type="text"
          id="branch"
          name="branch"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.branch}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="semester" className="block text-white">
          Semester
        </label>
        <input
          type="text"
          id="semester"
          name="semester"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.semester}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="collegeName" className="block text-white">
          College Name
        </label>
        <input
          type="text"
          id="collegeName"
          name="collegeName"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.collegeName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-white">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="github" className="block text-white">
          GitHub Profile Link
        </label>
        <input
          type="url"
          id="github"
          name="github"
          className="w-full px-3 py-2 border rounded-md"
          value={headDetails.github}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default HeadDetails;
