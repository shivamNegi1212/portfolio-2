'use client';

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="inline-block text-5xl mb-4"
        >
          🚀
        </motion.div>

        <h1 className="text-[40px] md:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-6">
          Featured Projects
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          Discover my latest work showcasing modern web development, UI/UX design, and innovative solutions
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
          style={{ transformOrigin: "center" }}
        ></motion.div>
      </motion.div>

      {/* Projects Grid - 3x2 layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent element */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
        style={{ transformOrigin: "center" }}
      ></motion.div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-cyan-500/5 pointer-events-none -z-10" />
    </section>
  );
};
