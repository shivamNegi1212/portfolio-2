"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.5 }}
      className="group relative cursor-pointer"
      whileHover={{ scale: 1.15, rotateY: 10 }}
    >
      <div className="relative p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
        <Image 
          src={`/skills/${src}`} 
          width={width} 
          height={height} 
          alt={name}
          className="group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300"
        />
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  );
};
