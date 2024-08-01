// Member3Details.js
import React from "react";

const Member3Details = ({ memberDetails, setMemberDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="sm:grid-cols-3">
    <div className="grid grid-cols-2 gap-4 sm:col-span-2">
      <div className="mb-4">
        <label htmlFor="member3Name" className="block text-white">Member 3 Name</label>
        <input
          type="text"
          id="member3Name"
          name="memberName"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member3Semester" className="block text-white">Semester</label>
        <input
          type="text"
          id="member3Semester"
          name="memberSemester"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberSemester}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member3College" className="block text-white">College Name</label>
        <input
          type="text"
          id="member3College"
          name="memberCollege"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberCollege}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member3Role" className="block text-white">Role in Team</label>
        <input
          type="text"
          id="member3Role"
          name="memberRole"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberRole}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member3Branch" className="block text-white">Branch</label>
        <input
          type="text"
          id="member3Branch"
          name="memberBranch"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberBranch}
          onChange={handleChange}
        />
      </div>
    </div>
    </div>
  );
};

export default Member3Details;