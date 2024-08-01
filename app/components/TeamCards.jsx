import React from "react";
import Image from "next/image";
const TeamCards = () => {
  const TeamMembers = [
    {
      id: 1,
      FirstName: "Devansh",
      LastName: "Vishwa",
      Role: "Hackathon Lead",
      Message:
        "Hello, I am Devansh Vishwa, your Hackathon Lead. I am excited to bring innovative ideas and lead our event to success. ",
    },
    {
      id: 2,
      FirstName: "Alisha",
      LastName: "Vashishtha",
      Role: "Marketing Head",
      Message:
        "Hi everyone, I am Alisha Vashishtha, the Marketing Head. I look forward to creating dynamic campaigns and promoting our events. ",
    },
    {
      id: 3,
      FirstName: "Doli",
      LastName: "Jha",
      Role: "Student Coordinator",
      Message:
        "Greetings, I am Dolly Jha, your Student Coordinator. My goal is to ensure smooth and successful events for all of us. I am here to support and guide you .",
    },
    {
      id: 4,
      FirstName: "Himwan",
      LastName: "Singh Shekhawat",
      Role: "Graphics & Video Editor",
      Message:
        "Hello, I am Himwan Singh Shekhawat, the Graphics & Video Editor. I am excited to create amazing visuals and bring our vision to life.",
    },
    {
      id: 5,
      FirstName: "Vinayak",
      LastName: "Kumar Sharma",
      Role: "Tech Lead",
      Message:
        "Hi, I am Vinayak Kumar, your Tech Lead. I am here to offer my technical expertise and work on cutting-edge projects with you all.",
    },
  ];

  return (
    <>
 <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white ">
  <div className="flex-col grid gap-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg">
    {TeamMembers.map((member) => (
      <div key={member.id} className="text-center p-4 rounded-md bg-gray-800 shadow-lg">
        <Image
          alt={`${member.FirstName} ${member.LastName}`}
          className="object-cover w-20 h-20 mx-auto rounded-xl shadow "
          width={80}
          height={80}
          src={`/${member.FirstName}.webp`}
        />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold">{`${member.FirstName} ${member.LastName}`}</p>
          <p className="mb-4 text-xs text-white">{member.Role}</p>
          <p className="text-sm tracking-wide text-white text-left">{member.Message}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default TeamCards;
