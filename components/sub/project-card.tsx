'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  index?: number;
};

export const ProjectCard = ({
  src,
  title,
  description,
  index = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ height: isHovered ? "auto" : "100%" }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-xl border-2 border-[rgba(112,66,248,0.15)] hover:border-[rgba(112,66,248,0.5)] transition-all duration-500 shadow-lg md:shadow-2xl hover:shadow-2xl hover:shadow-purple-500/40 h-full flex flex-col"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5 group-hover:from-purple-500/15 group-hover:to-cyan-500/15 transition-all duration-500 -z-10" />

        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-b from-purple-900/40 to-transparent flex-shrink-0">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
          />

          {/* Image overlay gradient */}
          <motion.div
            animate={{ opacity: isHovered ? 0.85 : 0.4 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"
          />

          {/* Shine effect */}
          <motion.div
            animate={{
              x: isHovered ? 500 : -500,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        </div>

        {/* Content Container */}
        <motion.div
          animate={{
            paddingTop: isHovered ? 28 : 24,
            paddingBottom: isHovered ? 28 : 24,
          }}
          transition={{ duration: 0.3 }}
          className="relative px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-7 bg-gradient-to-b from-[rgba(3,0,20,0.9)] to-[rgba(3,0,20,0.98)] flex-grow flex flex-col justify-between"
        >
          {/* Title */}
          <motion.h1
            animate={{
              scale: isHovered ? 1.03 : 1,
              color: isHovered ? "#c4b5fd" : "#e5e7eb",
            }}
            transition={{ duration: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-snug origin-left"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            animate={{
              opacity: isHovered ? 1 : 0.82,
              color: isHovered ? "#f3f4f6" : "#d1d5db",
            }}
            transition={{ duration: 0.3 }}
            className="text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-4 mb-3 md:mb-4"
          >
            {description}
          </motion.p>

          {/* Accent line with hover effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            animate={{
              height: isHovered ? 3 : 2.5,
              background: isHovered 
                ? "linear-gradient(90deg, #c084fc, #f472b6, #06b6d4)" 
                : "linear-gradient(90deg, #a855f7, #9333ea, #06b6d4)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full h-1 w-12 md:w-16"
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Floating particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              x: isHovered ? [0, 25, -25, 0] : [0],
              y: isHovered ? [0, -20, 20, 0] : [0],
              opacity: isHovered ? [0.3, 0.7, 0.3] : 0.15,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            className="absolute w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full pointer-events-none blur-sm"
            style={{
              left: `${12 + i * 24}%`,
              top: `${25 + i * 12}%`,
            }}
          />
        ))}

        {/* Enhanced glow effect on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.7 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-transparent to-cyan-500/50 rounded-3xl pointer-events-none blur-2xl"
        />

        {/* Corner gradient effects */}
        <div className="absolute top-0 left-0 w-52 h-52 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-3xl -translate-x-24 -translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-full blur-3xl translate-x-24 translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};
