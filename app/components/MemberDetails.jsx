// MemberDetails.js
import React from "react";

const MemberDetails = ({ memberDetails, setMemberDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
        
    <div className="sm:grid-cols-3 ">
    <div className="grid grid-cols-2 gap-4 sm:col-span-2">
      <div className="mb-4">
        <label htmlFor="memberName" className="block text-white">Member Name</label>
        <input
          type="text"
          id="memberName"
          name="memberName"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="memberSemester" className="block text-white">Semester</label>
        <input
          type="text"
          id="memberSemester"
          name="memberSemester"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberSemester}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="memberCollege" className="block text-white">College Name</label>
        <input
          type="text"
          id="memberCollege"
          name="memberCollege"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberCollege}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="memberRole" className="block text-white">Role in Team</label>
        <input
          type="text"
          id="memberRole"
          name="memberRole"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberRole}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="memberBranch" className="block text-white">Branch</label>
        <input
          type="text"
          id="memberBranch"
          name="memberBranch"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberBranch}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    </div>
  );
};

export default MemberDetails;
