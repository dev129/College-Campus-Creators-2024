import React from "react";
import Link from "next/link";
import Image from "next/image";
import hackathonposter from "@/public/hackathon-poster.webp"
const LandingPage = () => {

  return (
    <>
      <div className="h-full ">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                College Campus Creators{" "}
              </span>
              An online hackathon by
              <br /> Debuggers!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Your first step to hackathon!
            </p>
            <div className="flex flex-row justify-center md:justify-start mb-8  h-full  ">
              <button className="cursor-pointer bg-gradient-to-r from-[#06166A] to-[#F45C43] px-6 py-2 rounded text-white font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow">
                <Link href="/pages/Registration" passHref>
                  Register Now
                </Link>
              </button>
            </div>
          </div>
          <div className="w-full xl:w-3/5 flex justify-end p-12 overflow-hidden ">
            <Image
              src={hackathonposter}
              alt=""
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
