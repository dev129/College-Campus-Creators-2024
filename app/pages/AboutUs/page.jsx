import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Medal from "@/app/components/Medal";
import FAQ from "@/app/components/FAQ";

const HackathonPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-blue-600 to-indigo-900 min-h-screen text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-7 text-white bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Hack the Future: Campus Edition
          </h1>
          {/* What the event is about */}
          <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-blue-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-indigo-400 text-center divider divider-accent">
              What is this?
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-300 text-lg mb-4 text-justify">
                  This hackathon is organised by debuggers in association with Institute Innovation Cell where students from all branches come together to build amazing projects for colleges. It's a great opportunity to network, learn new skills, and have fun!
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
          <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-pink-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-400 text-center divider divider-accent">
              Why this Event?
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <ul className="list-disc ml-6 text-gray-300 space-y-2 text-justify text-lg">
                  <li>Hone your skills across various disciplines - not just coding!</li>
                  <li>Perfect starting point for your hackathon journey, regardless of your branch.</li>
                  <li>Network with diverse minds and form interdisciplinary connections.</li>
                  <li>Challenge yourself to create innovative solutions with limited resources.</li>
                  <li>Gain exposure to real-world problems and industry mentors.</li>
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
          <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-green-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pink-400 text-center divider divider-accent">
              How It Works?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: 1, title: "Register", content: "Sign up before the deadline: Aug 24th (Beginners) or Sep 14th (Advanced)" },
                { number: 2, title: "Form Teams", content: "Create diverse teams with members from different branches" },
                { number: 3, title: "Ideate", content: "Brainstorm and present your ideas on Aug 25th (Beginners) or Sep 15th (All)" },
                { number: 4, title: "Hack", content: "Finalists bring their A-game to build solutions on September 30th" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl mb-4 text-blue-400">{step.number}</div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-lg">{step.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Themes */}
          <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-purple-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-400 text-center divider divider-accent">
              Hackathon Themes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🌱", theme: "Sustainable Campus", description: "Develop eco-friendly solutions for college sustainability" },
                { icon: "🤖", theme: "AI for Education", description: "Leverage AI to enhance learning experiences" },
                { icon: "🏥", theme: "HealthTech Innovation", description: "Create solutions for student health and wellness" },
                { icon: "🎨", theme: "Creative Arts & Tech", description: "Blend technology with arts for campus enrichment" },
                { icon: "🔬", theme: "Science & Engineering", description: "Tackle complex problems with cutting-edge tech" },
                { icon: "🌐", theme: "Smart Campus", description: "IoT and digital solutions for a connected campus" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.theme}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-4xl md:text-6xl mt-12 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Have your own idea? Go for it!
          </div>
          </section>

          {/* Prizes */}
          <section className="mb-16 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-yellow-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pink-400 text-center divider divider-accent">Prizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { medal: "Gold", place: "1st Place", prize: "Goodies, Vouchers & Winner Certificate" },
                { medal: "Silver", place: "2nd Place", prize: "Swags & Achievement Certificate" },
                { medal: "Bronze", place: "3rd Place", prize: "Perks & Recognition Certificate" }
              ].map((prize, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <Medal Medal={prize.medal} />
                  <h3 className="text-2xl font-semibold mb-2">{prize.place}</h3>
                  <p className="text-gray-300 text-lg">{prize.prize}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-300 text-lg">
              All participants will receive a certificate of participation !
            </p>
          </section>

         

          {/* FAQ */}
          <section className="mb-10 bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-purple-400 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-400 text-center divider divider-accent">FAQs</h2>
            <FAQ />
          </section>

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">Ready to Innovate?</h2>
            <Link href="/pages/Registration">
              <button className="bg-blue-950 hover:bg-blue-300 hover:text-black text-white font-bold py-3 px-6 rounded-xl text-xl transition-colors duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HackathonPage;