import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode, FaLightbulb, FaUsers, FaTrophy, FaRegClipboard } from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
    <div className="grid place-items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
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

      <div className="relative z-10 container mx-auto px-4 py-16">
   
        <header className="text-center mb-16">
        <div className="text-center my-10 space-y-6">
  <p className="text-xl md:text-2xl font-medium italic text-blue-200">
     Debuggers Club & IIC presents:
  </p>
  <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 drop-shadow-lg ">
    College Campus Creators
  </h1>
  <p className="text-2xl md:text-3xl font-light italic text-gray-300 leading-relaxed">
    Hack the Future: College Campus Edition
  </p>
</div>

<div className="flex justify-center items-center space-x-4 mb-8">
      {[
        { icon: FaRegClipboard, color: "bg-blue-600", tip: "Register" },
        { icon: FaLightbulb, color: "bg-purple-600", tip: "Ideate" },
        { icon: FaLaptopCode, color: "bg-indigo-600", tip: "Code" },
        { icon: FaTrophy, color: "bg-pink-600", tip: "Win" },
      ].map((item, index) => (
        <div
          key={index}
          className={`${item.color} p-4 rounded-full shadow-lg tooltip tooltip-bottom`}
          data-tip={item.tip}
        >
          <item.icon className="text-4xl" />
        </div>
      ))}
    </div>  
        </header>

        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/pages/Registration" passHref>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Register Now
            </button>
          </Link>
          <Link href="/pages/AboutUs" passHref>
            <button className="px-8 py-4   bg-transparent border-2 border-blue-300 text-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
              Tell Me More
            </button>
          </Link>
        </section>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
