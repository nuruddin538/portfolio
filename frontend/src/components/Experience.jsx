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
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
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
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
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
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>Hands-on Experience</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Development Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Real-world project engineering, component architecture, authentication, and full-stack implementation experience.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
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
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Technologies:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me as a Junior Developer Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Why Hire Me as a Junior Developer?
          </h3>
          <p className="text-sm text-gray-500">
            Core attributes and strengths I contribute to engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHireMe.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col p-4 rounded-xl bg-blue-50/40 border border-blue-100/60 justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs mb-3">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
