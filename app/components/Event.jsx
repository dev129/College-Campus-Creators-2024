import React from 'react'
import Image from "next/image";
import Medal from "@/app/components/Medal";
import TeamCards from './TeamCards';
const Event = () => {
  return (
    <main className="container mx-auto px-4 py-16">
    <h1 className="text-6xl font-extrabold text-center mb-16 text-neon-blue">
      Hack the Future: Campus Edition
    </h1>
  
    {/* What the event is about */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-blue transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-pink">
        What is Hack the Future?
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-4">
            This hackathon is a 48-hour event where developers and designers come together to build amazing projects. It's a great opportunity to network, learn new skills, and have fun!
          </p>
        </div>
        <div className="md:w-1/2 relative h-64 w-full">
          <Image
            src="/Event.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hackathon Event"
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  
    {/* Why this event */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-blue transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-pink">
        Why Hack the Future?
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>This hackathon provides an excellent opportunity to hone your fundamental web development skills.</li>
            <li>It's a starting point for your hackathon journey.</li>
            <li>Meet like-minded individuals and potentially form lasting connections.</li>
            <li>It's a fun and engaging way to challenge yourself and see what you can create with a limited toolset in a short amount of time.</li>
          </ul>
        </div>
        <div className="md:w-1/2 relative h-64 w-full">
          <Image
            src="/Event.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hackathon Event"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  {/* Our Team */}
  <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 ">
        Meet The Fabulous Team
      </h2>
  <TeamCards/>
  </section>
    {/* How the event will happen */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-pink">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-5xl mb-4 text-neon-blue">1</div>
          <h3 className="text-2xl font-semibold mb-2">Register</h3>
          <p className="text-gray-300">Register for the competition before July 24th.</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-4 text-neon-blue">2</div>
          <h3 className="text-2xl font-semibold mb-2">Hack</h3>
          <p className="text-gray-300">Start creating your web app with your team.</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-4 text-neon-blue">3</div>
          <h3 className="text-2xl font-semibold mb-2">Upload</h3>
          <p className="text-gray-300">Upload your code on GitHub and share the repo link.</p>
        </div>
      </div>
    </section>
  
    {/* Who can participate */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-yellow transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-blue">
        Who Can Participate?
      </h2>
      <p className="text-gray-300 mb-4">
        Any student pursuing a B.Tech. can enroll in this hackathon.
      </p>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2 text-neon-pink">
          Eligibility Criteria:
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Beginners who are planning their career in web development.</li>
          <li>People who are interested in design and animations.</li>
          <li>People who love coding.</li>
        </ul>
      </div>
    </section>
  
    {/* Timeline */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-yellow transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-blue">
        Participation Timeline 
      </h2>
    <ol className="items-center justify-center sm:flex">
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Registration Period
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        August 2 - August 5, 2024
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Registration period for participants.
      </p>
    </div>
  </li>
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Code Submission
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        August 6 - August 10, 2024
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Period for submitting code entries.
      </p>
    </div>
  </li>
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Result Declaration
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        August 13, 2024
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Announcement of results.
      </p>
    </div>
  </li>
</ol>
</section>
  
    {/* Challenge */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-orange transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-blue">
        The Challenge
      </h2>
      <p className="text-gray-300 mb-4">
        Create something that benefits our college community! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
      </p>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2 text-neon-pink">
          Potential Areas:
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Campus sustainability</li>
          <li>Student wellness</li>
          <li>Academic resource management</li>
          <li>Community engagement</li>
        </ul>
      </div>
    </section>
    {/* Prizes */}
    <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-pink">
        Prizes
      </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="text-center flex flex-col items-center">
    <Medal Medal={"Gold"} />
    <h3 className="text-2xl font-semibold mb-2">1st Place</h3>
    <p className="text-gray-300">Winner Certificate and Vouchers</p>
  </div>
  <div className="text-center flex flex-col items-center">
    <Medal Medal={"Silver"} />
    <h3 className="text-2xl font-semibold mb-2">2nd Place</h3>
    <p className="text-gray-300">Achievement Certificate</p>
  </div>
  <div className="text-center flex flex-col items-center">
    <Medal Medal={"Bronze"} />
    <h3 className="text-2xl font-semibold mb-2">3rd Place</h3>
    <p className="text-gray-300">Placeholder Certificate</p>
  </div>
</div>
      <p className="mt-8 text-center text-gray-300">
        All participants will receive a certificate of participation.
      </p>
    </section>
  
    {/* Rules and Regulations */}
    <section className="bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-blue transition-all duration-300">
      <h2 className="text-4xl font-bold mb-6 text-neon-pink">
        Rules and Regulations
      </h2>
      <div className='flex justify-center  '>

      <ul className="grid  grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-4 text-gray-300 ">
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> Clean commit history required
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> One person per team
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> Use open-source software only
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> One entry per team
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> Teams of 2-4 members
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> HTML, CSS, Vanilla JS only
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> Tailwind CSS is permitted
        </li>
        <li className="flex items-center">
          <span className="text-neon-blue mr-2">•</span> Respect all participants and organizers
        </li>
      </ul>
      </div>
      <p className="mt-4 text-gray-300 text-center ">
        For any disputes, the decision of the hackathon lead is final.
      </p>
    </section>
  </main>
  )
}

export default Event