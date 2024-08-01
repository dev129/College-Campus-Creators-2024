// Member2Details.js
const Member2Details = ({ memberDetails, setMemberDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className=" sm:grid-cols-3 ">
    <div className="grid grid-cols-2 gap-4 sm:col-span-2">
   
      <div className="mb-4">
        <label htmlFor="member2Name" className="block text-white">Member 2 Name</label>
        <input
          type="text"
          id="member2Name"
          name="memberName"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member2Semester" className="block text-white">Semester</label>
        <input
          type="text"
          id="member2Semester"
          name="memberSemester"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberSemester}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member2College" className="block text-white">College Name</label>
        <input
          type="text"
          id="member2College"
          name="memberCollege"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberCollege}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member2Role" className="block text-white">Role in Team</label>
        <input
          type="text"
          id="member2Role"
          name="memberRole"
          className="w-full px-3 py-2 border rounded-md"
          value={memberDetails.memberRole}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="member2Branch" className="block text-white">Branch</label>
        <input
          type="text"
          id="member2Branch"
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

export default Member2Details;