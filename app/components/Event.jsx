import React from "react";
import Image from "next/image";
import Medal from "@/app/components/Medal";
import TeamCards from "./TeamCards";
import FAQ from "./FAQ";

const Event = () => {
  return (
    <main className="bg-gradient-to-r text-white from-blue-500 to-blue-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-neon-blue">
          Creative Minds: Campus Edition
        </h1>

        {/* What the event is about */}
        <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-blue transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 text-neon-pink">
            What is College Campus Creators?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                This offline 48 hour hackathon where students with different
                interests come together to build amazing projects for colleges.
                It's a great opportunity to network, learn new skills, and have
                fun!
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 w-full">
              <Image
                src="/hack-removebg-preview.png"
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
            Why you should participate?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  This hackathon provides an excellent opportunity to hone your
                  fundamental skills of your field.
                </li>
                <li>It's a starting point for your hackathon journey.</li>
                <li>
                  Meet like-minded individuals and potentially form lasting
                  connections.
                </li>
                <li>
                  It's a fun and engaging way to challenge yourself and see what
                  you can create with a limited toolset in a short amount of
                  time.
                </li>
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

        {/* How the event will happen */}
        <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 text-neon-pink">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-neon-blue">1</div>
              <h3 className="text-2xl font-semibold mb-2">Register</h3>
              <p className="text-gray-300">
                Beginner Users register before August 24th. <br />
                Advance Users register before September 14th.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-neon-blue">2</div>
              <h3 className="text-2xl font-semibold mb-2">Idea Presentation</h3>
              <p className="text-gray-300">
                {" "}
                Idea Presentation on 25 August (Beginners) <br />
                15 september (Beginners & Advance)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-neon-blue">3</div>
              <h3 className="text-2xl font-semibold mb-2">Create and Upload</h3>
              <p className="text-gray-300">
                Finalists come with their laptops to create application on
                September 30th.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Our Team
        <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 ">
            Meet The Fabulous Team
          </h2>
          <TeamCards />
        </section>
            */}

        {/* Prizes */}
        <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-green transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 text-neon-pink">Prizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <Medal Medal={"Gold"} />
              <h3 className="text-2xl font-semibold mb-2">1st Place</h3>
              <p className="text-gray-300">
                Winner Certificate, Vouchers and Goodies
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Medal Medal={"Silver"} />
              <h3 className="text-2xl font-semibold mb-2">2nd Place</h3>
              <p className="text-gray-300">
                Achievement Certificate and Vouchers
              </p>
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

        {/* FAQ */}
        <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-neon-yellow transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 text-neon-green">FAQs</h2>
          <FAQ />
        </section>
      </div>
    </main>
  );
};

export default Event;
