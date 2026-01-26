"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] font-semibold">
          Skills & Technologies
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[30px] md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-bold mt-[20px] text-center mb-[15px]"
      >
        My Technical Arsenal
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-[16px] text-gray-300 mb-10 mt-[10px] text-center max-w-2xl"
      >
        Experienced with cutting-edge technologies to build scalable and performant applications.
      </motion.div>
    </div>
  );
};
