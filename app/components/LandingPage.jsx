import React from 'react';
import Link from 'next/link';
const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-900 text-white relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Debuggers X <span className="text-slate-300">IIC</span> </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">presents </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">College Campus Creators</h1>
        <p className="mb-8 text-base md:text-lg">Register Create Win</p>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <button className="px-8 py-4 bg-white text-black rounded-full">
            <Link href="/pages/Registration" passHref>Register Now</Link>
          </button>
          <button className="px-8 py-4 bg-blue-950 text-white rounded-full">
            <Link href="/pages/AboutUs"passHref>Tell Me More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
