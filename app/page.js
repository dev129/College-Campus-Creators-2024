import Image from "next/legacy/image";
import Link from "next/link";
import { FaRegClipboard } from "react-icons/fa";
import { TbTimelineEvent } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SpeedInsights } from "@vercel/speed-insights/next";

const LandingPage = () => {
  return (
    <>
      <SpeedInsights />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-blue-400 to-blue-900">
        <div className="absolute inset-0">
          <Image
            src="/Landing.jpg"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            alt="College Campus"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium italic text-blue-300 mb-4">
              Debuggers Club & IIC presents:
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 mb-10"
              style={{
                textShadow: "0 0 20px rgba(0,0,0,0.5)",
                lineHeight: "1.1",
                padding: "0.25em",
              }}
            >
              College Campus Creators
            </h1>
            <p className="text-2xl md:text-3xl font-light italic text-gray-300 mb-8">
              ( Hack the Future: Campus Edition )
            </p>

            <div className="flex justify-center items-center space-x-4 mb-8">
              {[
                {
                  icon: FaRegClipboard,
                  color: "from-blue-400 to-blue-600",
                  path: "/pages/Registration",
                },
                {
                  icon: FaInfo,
                  color: "from-purple-400 to-purple-600",
                  path: "/pages/AboutUs",
                },
                {
                  icon: RiContactsBook3Fill,
                  color: "from-indigo-400 to-indigo-600",
                  path: "/pages/ContactUs",
                },
                {
                  icon: TbTimelineEvent,
                  color: "from-pink-400 to-pink-600",
                  path: "/pages/Schedule",
                },
              ].map((item, index) => (
                <Link href={item.path} key={index} passHref>
                  <div
                    className={`bg-gradient-to-br ${item.color} p-4 rounded-full shadow-lg cursor-pointer`}
                  >
                    <item.icon className="text-4xl text-white" />
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-xl italic font-light md:text-2xl text-white mb-8">
              Register • Create • Win
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link href="/pages/Registration" passHref>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-lg font-semibold transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Register Here
                </button>
              </Link>
              <Link href="/pages/AboutUs" passHref>
                <button className="px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                  Tell Me More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
