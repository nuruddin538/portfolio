import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile01.png";
import {
  HiDocumentText,
  HiArrowRight,
  HiSparkles,
  HiLocationMarker,
  HiUser,
  HiCode,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Animated Glows with Framer Motion */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/15 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Status Badge with Animated Border Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-300 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs animate-border-pulse"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Hire • Junior Full-Stack Developer</span>
          </motion.div>

          {/* Heading with Animated Color Gradient Text */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium text-base sm:text-lg">
              <span>👋 Hello, I'm</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-gray-700">
                <HiLocationMarker className="text-blue-600 dark:text-cyan-400" /> Chattogram, Bangladesh
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15]">
              Nur Uddin <br />
              <span className="animate-gradient-text">
                AI-Driven Full-Stack Next.js Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            I build modern, responsive, and high-performance web applications using{" "}
            <span className="text-gray-900 dark:text-white font-semibold">Next.js</span>,{" "}
            <span className="text-gray-900 dark:text-white font-semibold">React.js</span>,{" "}
            <span className="text-gray-900 dark:text-white font-semibold">TypeScript</span>, and{" "}
            <span className="text-gray-900 dark:text-white font-semibold">Tailwind CSS</span>.
            I leverage AI-assisted development workflows to boost productivity, solve complex engineering problems, and create seamless digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* Main Resume CTA with Shimmer Effect */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/resume"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 sm:px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all text-sm sm:text-base cursor-pointer"
              >
                <HiDocumentText className="text-xl group-hover:scale-110 transition-transform" />
                <span>View Resume / CV</span>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase bg-white/20 px-2 py-0.5 rounded-md text-white ml-1">
                  Printable PDF
                </span>
              </Link>
            </motion.div>

            {/* Explore Projects Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 px-5 sm:px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </motion.a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 px-3 py-3.5 transition"
            >
              Let's Connect &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600 dark:text-cyan-400" /> Core Tech Stack &amp; Specialization
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <SiNextdotjs className="text-black dark:text-white text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <SiTypescript className="text-blue-600 dark:text-blue-400 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <FaNodeJs className="text-emerald-600 dark:text-emerald-400 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <SiMongodb className="text-emerald-500 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Showcase with Animated Border & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col items-center"
        >
          {/* Ambient Glowing Color Backdrop with Multi-Color Aura */}
          <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/20 rounded-3xl blur-3xl pointer-events-none animate-aura -z-10" />

          {/* Interactive Mode Switcher (Portrait vs Terminal Code) */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-gray-100/90 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 mb-4 shadow-xs backdrop-blur-md z-20">
            <button
              onClick={() => setActiveTab("profile")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "profile"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <HiUser className="text-xs" />
              <span>Portrait</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "code"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <HiCode className="text-xs" />
              <span>Developer Code</span>
            </button>
          </div>

          {/* Main Card Container with Rotating Animated Gradient Border */}
          <div className="w-full max-w-md animated-border-wrapper shadow-2xl">
            <div className="animated-border-inner bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl overflow-hidden flex flex-col">
              <AnimatePresence mode="wait">
                {activeTab === "profile" ? (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col items-center pt-5 px-4 pb-0"
                  >
                    {/* Top status bar inside card */}
                    <div className="w-full flex items-center justify-between px-2 pb-3 border-b border-gray-100 dark:border-gray-800 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Active &bull; Open for Hire
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 font-mono text-[11px] font-semibold border border-blue-200/50 dark:border-blue-800/60">
                        Next.js 15
                      </span>
                    </div>

                    {/* Spotlight background behind portrait */}
                    <div className="relative w-full flex justify-center items-end mt-2 overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-blue-500/20 via-cyan-400/10 to-transparent blur-xl pointer-events-none rounded-full" />
                      
                      {/* Developer Profile Image */}
                      <motion.img
                        src={profileImg}
                        alt="Nur Uddin - AI-Driven Full-Stack Next.js Developer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 280, damping: 20 }}
                        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] h-auto max-h-[380px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] select-none pointer-events-auto"
                      />
                    </div>

                    {/* Bottom Info Bar inside Card */}
                    <div className="w-full -mx-4 px-5 py-3 bg-gray-50/90 dark:bg-gray-900/90 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                          Nur Uddin
                          <HiOutlineCheckCircle className="text-blue-600 dark:text-cyan-400 text-base" />
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Full-Stack Next.js Developer
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800/60 font-medium">
                        <span>●</span> Ready to Deploy
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Code Showcase Tab */
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="relative text-left"
                  >
                    {/* Terminal Window Header */}
                    <div className="bg-gray-800/95 dark:bg-gray-900/95 px-4 py-3 flex items-center justify-between border-b border-gray-700/60 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">NurUddinProfile.ts</span>
                      <div className="w-12"></div>
                    </div>

                    {/* Code Content */}
                    <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto bg-gray-900 dark:bg-gray-950">
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">name:</span>{" "}
                        <span className="text-emerald-400">"Nur Uddin"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">role:</span>{" "}
                        <span className="text-emerald-400">"Full-Stack Next.js Developer"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">location:</span>{" "}
                        <span className="text-emerald-400">"Chattogram, Bangladesh"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">stack:</span> [
                      </p>
                      <p className="pl-8 text-yellow-300">
                        "Next.js", "React", "TypeScript", "Tailwind", "Better Auth", "MongoDB"
                      </p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-gray-400">status:</span>{" "}
                        <span className="text-emerald-400">"Open for Junior Roles"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">aiWorkflow:</span>{" "}
                        <span className="text-blue-400">true</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">cleanCode:</span>{" "}
                        <span className="text-emerald-400">"Reusable &amp; Scalable"</span>
                      </p>
                      <p>&#125;;</p>

                      <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-500">
                        <span className="text-emerald-400">&#10003;</span> Turning Ideas into Intelligent, Seamless Web Experiences
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Pill Badges with gentle Framer Motion floating effect */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-2 sm:-left-6 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-cyan-500 rounded-xl p-3 shadow-xl flex items-center gap-3 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/25">
              5+
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white">Featured Projects</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">BazarDor, DevStack &amp; More</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-3 -right-2 sm:-right-6 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-500 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white">AI-Assisted Workflow</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">High Productivity</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;