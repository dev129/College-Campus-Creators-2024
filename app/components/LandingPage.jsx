import React from "react";
import Link from "next/link";
const LandingPage = () => {
  const codeString = `
 #include <stdio.h>

 int main()
 {

 printf("Hello World/n");

 return 0;

}

  `;

  return (
    <>
      <div className="h-full ">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Welcome to {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                College Campus Creators{' '}
              </span>
              An online hackathon by<br/> Debuggers!
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

  {/* <span className="relative z-10"><Link href="/pages/Registration">Register Now </Link> 
   </span>
  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out blur-xl"></div> */}

            </div>
          </div>
          <div className="w-full xl:w-3/5 flex justify-end p-12 overflow-hidden ">
          <div>
  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
      <img
        alt=""
        className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
      />
      <img
        alt=""
        className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
      />
    </div>
  </div>
  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-white" />
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
