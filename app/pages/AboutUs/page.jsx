import React from "react";
import Navbar from "@/app/components/Navbar";
import dynamic from "next/dynamic";
import Event from "@/app/components/Event";
const Page = () => {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <Navbar />
      <Event/>
      
    </div>
  );
};

export default Page;
