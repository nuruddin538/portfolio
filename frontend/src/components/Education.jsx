import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "Bachelor of Science (B.Sc.) — Physics, Chemistry & Mathematics",
    institution: "Chittagong College",
    location: "Chattogram, Bangladesh",
    period: "Undergraduate Studies",
    grade: "Coursework Completed",
    description:
      "Studied Physics, Chemistry, and Mathematics, developing analytical thinking, logical reasoning, quantitative problem-solving skills, and scientific curiosity that translate directly into structured software engineering.",
    coursework: [
      "Mathematical Analysis & Calculus",
      "Applied Physics & Mechanics",
      "Chemical Thermodynamics",
      "Analytical & Quantitative Problem Solving",
      "Logical & Structured Reasoning",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Baitush Sharaf Adarsha Kamil Madrasah",
    location: "Chattogram, Bangladesh",
    period: "2016 – 2018",
    grade: "GPA: 4.33 / 5.00",
    description:
      "Completed higher secondary education in the Science stream with a strong emphasis on mathematical reasoning, analytical sciences, and foundational ICT concepts.",
    coursework: [
      "Higher Mathematics",
      "Physics",
      "Chemistry",
      "Information and Communication Technology (ICT)",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Sakfura Darus Sunnah Kamil Madrasa",
    location: "Chattogram, Bangladesh",
    period: "2014 – 2015",
    grade: "GPA: 4.44 / 5.00",
    description:
      "Graduated secondary school with distinction in Science, establishing core scientific methodology, computational logic, and problem-solving fundamentals.",
    coursework: [
      "General Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "ICT (Information Tech)",
    ],
  },
];

const certifications = [
  {
    title: "AI-Driven Full-Stack Next.js Engineering",
    issuer: "Independent Project Mastery",
    year: "2024",
    desc: "Built comprehensive full-stack applications integrating Next.js App Router, TypeScript, Better Auth, MongoDB, and Tailwind CSS.",
  },
  {
    title: "Modern React.js & TypeScript Architecture",
    issuer: "Self-Directed Development",
    year: "2024",
    desc: "Mastery of React hooks, context state management, reusable component design, and type-safe frontend structures.",
  },
  {
    title: "REST APIs & Asynchronous JavaScript",
    issuer: "Full-Stack Development Workflow",
    year: "2023",
    desc: "Rigorous practice with asynchronous HTTP requests, Express.js middleware, Postman debugging, and CRUD data pipelines.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 dark:text-cyan-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400">Background</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          My academic qualifications in science and mathematics that built my analytical foundation and disciplined engineering mindset.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600 dark:text-cyan-400" />
            <span>Academic History</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800/80 text-xs font-bold px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-blue-600 dark:text-cyan-400 text-sm" />
                    Key Subjects &amp; Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Continuous Learning (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <FaCertificate className="text-amber-500" />
            <span>Continuous Learning</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-5 shadow-xs hover:border-amber-300 dark:hover:border-amber-700/60 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineBadgeCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 dark:text-white text-sm mt-3">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {cert.desc}
                </p>
              </motion.div>
            ))}

            {/* AI-Assisted Engineering Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-700 dark:via-indigo-800 dark:to-cyan-900 text-white shadow-md"
            >
              <h4 className="font-bold text-base mb-1">AI-Assisted Engineering</h4>
              <p className="text-xs text-blue-100 dark:text-blue-200 leading-relaxed mb-3">
                Combining sound software fundamentals with AI-driven development to prototype quickly, debug effectively, and write high-standard code.
              </p>
              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                Productive &amp; Scalable
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
