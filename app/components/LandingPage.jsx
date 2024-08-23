'use client'
import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';
import { FaLaptopCode, FaLightbulb, FaUsers, FaTrophy, FaRegClipboard } from "react-icons/fa";

const LandingPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl font-medium italic text-blue-300 mb-4"
          >
            Debuggers Club & IIC presents:
          </motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 mb-10"
            style={{ textShadow: '0 0 20px rgba(0,0,0,0.5)', lineHeight: '1.1', padding: '0.25em' }}
          >
            College Campus Creators
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-2xl md:text-3xl font-light italic text-gray-300 mb-8"
          >
            ( Hack the Future: Campus Edition )
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            {[
              { icon: FaRegClipboard, color: "from-blue-400 to-blue-600" },
              { icon: FaLightbulb, color: "from-purple-400 to-purple-600" },
              { icon: FaLaptopCode, color: "from-indigo-400 to-indigo-600" },
              { icon: FaTrophy, color: "from-pink-400 to-pink-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-full shadow-lg`}
              >
                <item.icon className="text-4xl text-white" />
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl italic font-light md:text-2xl  text-white mb-8"
          >
            Register • Create • Win
          </motion.p>

          <motion.div 
            variants={containerVariants} 
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Link href="/pages/Registration" passHref>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-lg font-semibold transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Now
              </motion.button>
            </Link>
            <Link href="/pages/AboutUs" passHref>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
              >
                Tell Me More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
