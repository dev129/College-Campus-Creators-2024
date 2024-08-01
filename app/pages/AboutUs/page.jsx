import React from "react";
import Navbar from "@/app/components/Navbar";
import dynamic from "next/dynamic";
const EventPage=dynamic(()=>import('@/app/components/Event'),{ssr:true,loading:()=><p>Loading</p>})
const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <EventPage/>
    </div>
  );
};

export default Page;
