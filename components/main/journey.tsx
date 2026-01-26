'use client';

import { motion } from "framer-motion";

interface JourneyItem {
  title: string;
  percentage: number;
  icon: string;
  color: string;
}

const journeyData: JourneyItem[] = [
  {
    title: "React (Vite, Hooks, Context API, React Router)",
    percentage: 95,
    icon: "⚛️",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "JavaScript (ES6+)",
    percentage: 95,
    icon: "✨",
    color: "from-pink-500 to-cyan-500",
  },
  {
    title: "Axios (API Integration)",
    percentage: 90,
    icon: "🔌",
    color: "from-cyan-500 to-purple-500",
  },
  {
    title: "HTML5, CSS3",
    percentage: 95,
    icon: "🎨",
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Tailwind CSS",
    percentage: 95,
    icon: "🌊",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Bootstrap",
    percentage: 85,
    icon: "📦",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Responsive Design",
    percentage: 90,
    icon: "📱",
    color: "from-pink-500 to-cyan-500",
  },
  {
    title: "Flexbox & CSS Grid",
    percentage: 90,
    icon: "📐",
    color: "from-cyan-500 to-purple-500",
  },
  {
    title: "WordPress",
    percentage: 80,
    icon: "🌐",
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Git & GitHub",
    percentage: 85,
    icon: "🔧",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Canva",
    percentage: 80,
    icon: "🖼️",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Photoshop ",
    percentage: 75,
    icon: "🎭",
    color: "from-pink-500 to-cyan-500",
  },
];

export const Journey = () => {
  return (
    <section
      id="skills-expertise"
      className="flex flex-col items-center justify-center py-20 relative px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-5xl mb-4"
        >
          ✨
        </motion.div>
        <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-6">
          Professional Expertise
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Master skills across modern web technologies & design platforms
        </p>
      </motion.div>

      <div className="w-full max-w-5xl space-y-8">
        {journeyData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0], y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  className="text-2xl"
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                  {item.title}
                </h3>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {item.percentage}%
              </span>
            </div>

            {/* Outer glow container */}
            <div className="relative h-4 bg-[rgba(112,66,248,0.1)] rounded-full overflow-hidden border border-[rgba(112,66,248,0.2)] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percentage}%` }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`h-full bg-gradient-to-r ${item.color} rounded-full relative shadow-lg`}
              >
                {/* Animated shine effect */}
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.15,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                ></motion.div>
              </motion.div>

              {/* Floating particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-8, 8, -8],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5 + index * 0.08,
                  }}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full pointer-events-none`}
                  style={{
                    left: `${item.percentage * 0.5 + i * 10}%`,
                    top: "50%",
                    opacity: 0.6,
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.08 + 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`h-1 mt-1 bg-gradient-to-r ${item.color} rounded-full opacity-50`}
              style={{ transformOrigin: "left" }}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};
