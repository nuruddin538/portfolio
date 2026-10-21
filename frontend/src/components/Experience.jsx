import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward, FaBrain } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Next.js Development — Project-Based Experience",
    company: "Personal & Academic Projects",
    location: "Chattogram, Bangladesh",
    period: "2023 – Present",
    type: "Practical Full-Stack Engineering",
    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-blue-800",
    responsibilities: [
      "Developed responsive, production-ready web applications using Next.js (App Router), React.js, TypeScript, and Tailwind CSS.",
      "Built reusable, modular UI components and implemented intuitive modern UI/UX designs with mobile-first responsiveness.",
      "Integrated REST APIs, handled asynchronous state pipelines, JSON data rendering, and comprehensive error boundaries.",
      "Implemented secure authentication workflows and protected routes using Better Auth.",
      "Practiced backend development with Node.js, Express.js, MongoDB, and Mongoose schema modeling.",
      "Used Git and GitHub for source control, feature branching, and collaborative development workflows.",
      "Deployed full-stack and frontend applications reliably using Vercel and Netlify with environment configuration.",
      "Applied AI-assisted development tools to accelerate implementation, debug complex edge cases, and optimize workflows.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Better Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
    ],
  },
  {
    role: "Frontend & Web Application Development",
    company: "Hands-on Showcase & Client Prototypes",
    location: "Remote / Chattogram",
    period: "2023 – 2024",
    type: "Project Engineering",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    responsibilities: [
      "Built interactive web applications including BazarDor (grocery price tracker), DevStack, and Fit-Log.",
      "Crafted accessible, high-performance user interfaces achieving fast load times and clean Lighthouse metrics.",
      "Transformed project requirements into functional component hierarchies and state models.",
      "Continuously iterated on UI components using feedback and cross-device testing across Chrome, Firefox, and mobile browsers.",
    ],
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Context API", "REST APIs"],
  },
];

const whyHireMe = [
  {
    icon: FaLaptopCode,
    title: "Rapid Learning & Adaptability",
    desc: "I have a strong foundation in modern web technologies and a proactive willingness to learn new tools, frameworks, and engineering practices.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Clean Code & Maintainability",
    desc: "I focus on readable code, reusable components, structured component architecture, and continuous quality improvement.",
  },
  {
    icon: FaHandsHelping,
    title: "Collaboration & Teamwork",
    desc: "I value constructive feedback, clear communication, collaborative code reviews, and shared problem-solving within engineering teams.",
  },
  {
    icon: FaBrain,
    title: "Modern & AI-Driven Development",
    desc: "I leverage AI-assisted workflows alongside fundamental programming knowledge to improve efficiency and solve development challenges.",
  },
  {
    icon: FaAward,
    title: "Growth Mindset",
    desc: "I am eager to contribute to real-world projects, learn from experienced developers, and grow into a versatile full-stack engineer.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-950/40">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 dark:text-cyan-400 text-sm" />
          <span>Hands-on Experience</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400">Development Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Real-world project engineering, component architecture, authentication, and full-stack implementation experience.
        </p>
      </motion.div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-14 sm:mb-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-5 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-cyan-500/50 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 dark:text-gray-400 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300">
                  <HiOutlineCalendar className="text-blue-600 dark:text-cyan-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <HiOutlineCheckCircle className="text-blue-600 dark:text-cyan-400 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mr-1">
                Technologies:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Hire Me as a Junior Developer Callout Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-blue-200/80 dark:border-blue-900/60 p-6 sm:p-8 shadow-sm"
      >
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Why Hire Me as a Junior Developer?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Core attributes and strengths I contribute to engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {whyHireMe.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex flex-col p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/30 border border-blue-100/60 dark:border-blue-900/40 justify-between transition-colors hover:border-blue-300 dark:hover:border-blue-700"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-xs mb-3">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
