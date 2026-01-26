"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypingEffect } from "./typing-effect";

export const HeroContent = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 mt-20 md:mt-40 w-full z-[20] gap-8"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-semibold">
            Frontend Developer (React) Portfolio
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <TypingEffect
              texts={["Shivam Negi", "a Developer", "a Designer"]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={2000}
              className="inline"
              cursorClassName="text-cyan-400"
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-base lg:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Frontend Developer with strong expertise in React, JavaScript, HTML, CSS, and Bootstrap. Experienced in building responsive web applications with a focus on clean, reusable components, performance optimization, modern UI best practices, accessibility, cross-browser compatibility & scalable frontend architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="mailto:negishivam066@gmail.com"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-bold bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Me
          </a>
          
          <div className="group relative w-full sm:w-auto">
            <a
              href="https://wa.me/919675086197?text=Hi%20Shivam,%20I%20would%20like%20to%20hire%20you"
              target="_blank"
              rel="noreferrer noopener"
              className="py-3 px-6 button-secendry text-center text-white cursor-pointer rounded-lg font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 inline-block w-full sm:w-auto"
            >
              Hire Me
            </a>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              🥹 Please...
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-pink-500"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full h-auto flex justify-center items-center hidden lg:flex"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </div>
  );
};
