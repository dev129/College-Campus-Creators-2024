import Navbar from "@/app/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";

const Team = dynamic(() => import("@/app/components/TeamCards"), {
  loading: () => <p>Loading</p>,ssr:true
});
const page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Team />
    </div>
  );
};

export default page;
