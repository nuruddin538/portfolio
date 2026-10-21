import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaChrome,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiVite,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineTerminal,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend Development", icon: HiOutlineCode },
  { id: "backend", name: "Backend & Database", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deployment", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    level: "Advanced",
    description: "App Router, Server & Client Components, Dynamic Routing, SSR, Data Fetching",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/50 border-cyan-100 dark:border-cyan-900/60",
    level: "Advanced",
    description: "Reusable Components, React Hooks, Context API, State Management",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60",
    level: "Proficient",
    description: "Type Annotations, Interfaces, Generics, Type-Safe Architecture",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/50 border-amber-100 dark:border-amber-900/60",
    level: "Advanced",
    description: "Promises, Async/Await, Array Methods, ES6 Modules, DOM Manipulation",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/50 border-teal-100 dark:border-teal-900/60",
    level: "Advanced",
    description: "Utility-First, Flexbox & CSS Grid, Responsive Design, Dark Mode",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/50 border-orange-100 dark:border-orange-900/60",
    level: "Advanced",
    description: "Semantic Markup, Accessible Forms, SEO-Friendly Structure",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60",
    level: "Advanced",
    description: "Modern Layouts, Transitions, Keyframe Animations, Flexbox, Grid",
  },
  {
    name: "HeroUI & UI Libraries",
    category: "frontend",
    icon: HiOutlineSparkles,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/50 border-purple-100 dark:border-purple-900/60",
    level: "Proficient",
    description: "Component-Based UI Development, Accessible Modals, Drawers",
  },

  // Backend & Database
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/60",
    level: "Proficient",
    description: "Server-Side JavaScript, Asynchronous Programming, NPM Packages",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-gray-800 dark:text-gray-200",
    bg: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    level: "Proficient",
    description: "RESTful APIs, Routing, Middleware, Request/Response Lifecycle",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: HiOutlineCode,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60",
    level: "Advanced",
    description: "API Integration, Request/Response Handling, Error Boundaries, JSON",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/60",
    level: "Proficient",
    description: "CRUD Operations, Collections, Documents, Query Filters",
  },
  {
    name: "Mongoose ODM",
    category: "backend",
    icon: SiMongoose,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50 border-rose-100 dark:border-rose-900/60",
    level: "Proficient",
    description: "Schema Design, Data Models, Validation, MongoDB Integration",
  },
  {
    name: "Better Auth",
    category: "backend",
    icon: HiOutlineShieldCheck,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50 border-indigo-100 dark:border-indigo-900/60",
    level: "Proficient",
    description: "Sign-Up, Sign-In, Session Management, Protected Routes, Profiles",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/50 border-orange-100 dark:border-orange-900/60",
    level: "Advanced",
    description: "Version Control, Branching, Repository Management, Collaboration",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/50 border-purple-100 dark:border-purple-900/60",
    level: "Advanced",
    description: "Fast Development Server, Hot Module Replacement (HMR), Build Bundler",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    level: "Advanced",
    description: "Application Deployment, Environment Variables, Production Builds",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/50 border-orange-100 dark:border-orange-900/60",
    level: "Proficient",
    description: "REST API Testing, Request Payloads, Headers, API Debugging",
  },
  {
    name: "AI-Assisted Development",
    category: "tools",
    icon: FaRobot,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/60",
    level: "Advanced",
    description: "AI-Powered Coding, Debugging, Problem-Solving, Workflow Optimization",
  },
  {
    name: "Chrome DevTools & npm",
    category: "tools",
    icon: FaChrome,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60",
    level: "Advanced",
    description: "DOM Inspection, Console Debugging, Network Analysis, Dependencies",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineCode className="text-blue-600 dark:text-cyan-400 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          The full-stack technologies, databases, modern authentication, and AI development workflows I leverage to build reliable products.
        </p>
      </motion.div>

      {/* Filter Tabs with Framer Motion animated background pill */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none ${
                isActive
                  ? "text-white"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-cyan-400 shadow-xs"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-cyan-600 rounded-full shadow-md shadow-blue-500/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Cards Grid with Framer Motion layout and hover animations */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon />
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        skill.level === "Advanced"
                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                          : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium capitalize">
                    {skill.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
