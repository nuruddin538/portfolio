import { Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/80 py-10 px-4 sm:px-6 lg:px-8 text-slate-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Screen Only) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 px-4 py-2.5 rounded-xl shadow-xs hover:bg-slate-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Junior Full-Stack Developer • Available Immediately
          </span>

          <a
            href="/resume.pdf"
            download="Nur_Uddin_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition cursor-pointer"
          >
            <HiDownload className="text-base" /> Download PDF
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/90 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">

        {/* ================= HEADER SECTION ================= */}
        <header className="border-b border-slate-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Nur Uddin
              </h1>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1">
                AI-Driven Full-Stack Next.js Developer
              </p>
              <p className="text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                Passionate and self-driven developer building modern, responsive, and high-performance web applications using Next.js, React.js, TypeScript, and Tailwind CSS.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Junior / Entry-Level Full-Stack Role
              </span>
              <span className="text-xs text-slate-500 mt-0.5">Ready for immediate joining</span>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-slate-600 pt-4 border-t border-slate-100">
            <a
              href="mailto:nuruddinnur538@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition truncate"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span className="truncate">nuruddinnur538@gmail.com</span>
            </a>
            <a
              href="tel:+8801766463242"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>+880 1766463242</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 text-base shrink-0" />
              <span>Chattogram, Bangladesh</span>
            </div>
            <a
              href="https://github.com/nuruddin538"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-slate-800 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.facebook.com/nuruddin538"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaFacebook className="text-blue-600 text-base shrink-0" />
              <span>Facebook</span>
            </a>
            <a
              href="https://developer-portfolio500.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* ================= CAREER OBJECTIVE / SUMMARY ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Career Objective &amp; Professional Summary
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed text-justify">
            My goal is to secure a junior or entry-level developer position where I can apply my skills in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>full-stack development</strong> while learning from an experienced team. I aspire to build reliable, scalable, and user-friendly applications and continue growing as a software engineer. I leverage AI-assisted development tools to improve productivity, solve problems efficiently, and create intuitive digital experiences with clean, reusable components and maintainable architecture.
          </p>
        </section>

        {/* ================= TECHNICAL SKILLS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Technical Skills Matrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider text-blue-700">
                Frontend Development
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Next.js (App Router, SSR, Server/Client Components, Dynamic Routing), React.js, TypeScript (Interfaces, Generics, Type Safety), JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, HeroUI.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider text-indigo-700">
                Backend &amp; Authentication
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Node.js, Express.js (REST APIs, Middleware, Routing), Better Auth (Sign-Up, Sign-In, Session Management, Protected Routes, User Profiles), Asynchronous JavaScript.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider text-emerald-700">
                Database Management
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                MongoDB (CRUD Operations, Collections, Documents, Query Filters), Mongoose (Schema Design, Models, Data Validation, MongoDB Integration).
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider text-amber-700">
                Tools, Workflow &amp; AI Engineering
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Git &amp; GitHub, Vite, npm, Postman, Chrome DevTools, Vercel &amp; Netlify Deployment, AI-Assisted Development (Problem Solving, Debugging, Speed Optimization).
              </p>
            </div>
          </div>
        </section>

        {/* ================= FEATURED PROJECTS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Featured Projects &amp; Applications
          </h2>

          <div className="space-y-4">
            {projects.map((project, index) => {
              const borderColors = [
                "border-blue-600",
                "border-indigo-600",
                "border-teal-600",
                "border-emerald-600",
                "border-purple-600",
              ];
              const borderColor = borderColors[index % borderColors.length];

              return (
                <div
                  key={project.id}
                  className={`border-l-3 ${borderColor} pl-4 py-1 bg-slate-50/40 rounded-r-xl border-y border-r border-slate-200/60 p-3`}
                >
                  {/* Title & Links Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-slate-900 flex flex-wrap items-center gap-2">
                      {project.title}
                      {project.category && (
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {project.category}
                        </span>
                      )}
                    </h3>

                    {/* Action Links */}
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-blue-600 print:text-slate-700">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          Live Demo <HiExternalLink className="print:hidden text-[11px]" />
                        </a>
                      )}
                      {project.github && (
                        <>
                          <span className="text-slate-300">•</span>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            GitHub <HiExternalLink className="print:hidden text-[11px]" />
                          </a>
                        </>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-indigo-600 hover:underline print:hidden ml-1"
                      >
                        [Details]
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 my-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                    {project.description}
                  </p>

                  {/* Key Contributions & Challenges Solved */}
                  {project.challenges && project.challenges.length > 0 && (
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
                      {project.challenges.map((challenge, cIdx) => (
                        <li key={cIdx}>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PRACTICAL EXPERIENCE ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Practical Development Experience
          </h2>

          <div className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-sm gap-1">
              <div>
                <h3 className="font-bold text-slate-900">
                  Full-Stack Next.js Development — Project-Based Experience
                </h3>
                <p className="text-xs font-semibold text-blue-600">
                  Personal &amp; Academic Projects • Chattogram, Bangladesh
                </p>
              </div>
              <span className="text-xs font-medium text-slate-500">
                2023 – Present
              </span>
            </div>

            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pt-1">
              <li>Developed responsive web applications using Next.js, React.js, TypeScript, and Tailwind CSS.</li>
              <li>Built reusable UI components and implemented modern UI/UX designs with component-driven architecture.</li>
              <li>Integrated REST APIs and handled application data asynchronously with clean error boundaries.</li>
              <li>Implemented authentication workflows and protected routes using Better Auth.</li>
              <li>Practiced backend development with Node.js, Express.js, MongoDB, and Mongoose.</li>
              <li>Used Git and GitHub for source control, feature branching, and project management.</li>
              <li>Deployed applications using Vercel and Netlify with environment configurations.</li>
              <li>Applied AI-assisted development tools to support debugging, implementation, and problem-solving.</li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-1 text-[11px] text-slate-500">
              <strong className="text-slate-700">Tech:</strong> Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Better Auth, Node.js, Express.js, MongoDB, Mongoose, Git, GitHub, Vercel, Netlify.
            </div>
          </div>
        </section>

        {/* ================= EDUCATIONAL BACKGROUND ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Educational Background
          </h2>

          <div className="space-y-3">
            {/* Degree 1 */}
            <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Bachelor of Science (B.Sc.) — Physics, Chemistry &amp; Mathematics
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Chittagong College, Chattogram, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 sm:mt-0 sm:text-right">
                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-semibold">
                    Coursework completed; degree not awarded
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Studied Physics, Chemistry, and Mathematics, developing strong analytical thinking, logical reasoning, and quantitative problem-solving skills that enhance my software engineering capability.
              </p>
            </div>

            {/* Degree 2 & 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-xs text-slate-500 font-medium">Baitush Sharaf Adarsha Kamil Madrasah</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    GPA: 4.33 / 5.00
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1">Science Group • 2016 – 2018</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Physics, Chemistry, Higher Mathematics, ICT</p>
              </div>

              <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">Secondary School Certificate (SSC)</h4>
                    <p className="text-xs text-slate-500 font-medium">Sakfura Darus Sunnah Kamil Madrasa</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    GPA: 4.44 / 5.00
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1">Science Group • 2014 – 2015</p>
                <p className="text-[11px] text-slate-500 mt-0.5">General Science, Mathematics, Physics, Chemistry, ICT</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE COMPETENCIES & STRENGTHS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            Why Hire Me &amp; Core Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">Key Strengths:</span>
              <p>Rapid Learning &amp; Adaptability, Clean Code &amp; Maintainability, Collaboration &amp; Teamwork, Modern AI-Driven Workflows, Growth Mindset.</p>
            </div>
            <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">Languages &amp; Availability:</span>
              <p>English (Professional Working Proficiency), Bengali (Native). Open to remote or on-site Junior / Entry-Level roles with immediate availability.</p>
            </div>
          </div>
        </section>

        {/* ================= RESUME LITTLE FOOTER ================= */}
        <footer className="pt-5 border-t-2 border-slate-200 text-xs text-slate-500 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="italic">
              <strong>Declaration:</strong> I confirm that the information provided above is accurate to the best of my knowledge.
            </p>
            <p className="shrink-0 font-medium text-slate-600">
              References: Available upon request
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] text-slate-400 pt-1">
            <span>Nur Uddin • Portfolio &amp; Resume • Updated {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
            <span className="print:hidden">Press "Print / Save as PDF" for ATS-compliant copy</span>
          </div>
        </footer>

      </main>

      {/* ================= PAGE LITTLE FOOTER (Screen Only) ================= */}
      <div className="max-w-4xl mx-auto mt-8 text-center text-xs text-slate-500 print:hidden space-y-2">
        <p>
          Looking to hire an eager, fast-learning full-stack developer?{" "}
          <Link to="/#contact" className="text-blue-600 font-semibold hover:underline">
            Get in touch with Nur Uddin directly &rarr;
          </Link>
        </p>
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Nur Uddin • Designed with React 19, Tailwind CSS v4 &amp; Modern Web Standards
        </p>
      </div>

    </div>
  );
};

export default Resume;
