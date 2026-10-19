import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles, HiLocationMarker } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Hire • Junior / Entry-Level Full-Stack Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 font-medium text-lg">
              <span>👋 Hello, I'm</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                <HiLocationMarker className="text-blue-600" /> Chattogram, Bangladesh
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Nur Uddin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                AI-Driven Full-Stack Next.js Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            I build modern, responsive, and high-performance web applications using{" "}
            <span className="text-gray-900 font-semibold">Next.js</span>,{" "}
            <span className="text-gray-900 font-semibold">React.js</span>,{" "}
            <span className="text-gray-900 font-semibold">TypeScript</span>, and{" "}
            <span className="text-gray-900 font-semibold">Tailwind CSS</span>.
            I leverage AI-assisted development workflows to boost productivity, solve complex engineering problems, and create seamless digital experiences.
          </p>

          {/* Action Buttons (Resume prominently featured) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl group-hover:scale-110 transition-transform" />
              <span>View Resume / CV</span>
              <span className="hidden sm:inline-block text-[10px] font-semibold uppercase bg-white/20 px-2 py-0.5 rounded-md text-white ml-1">
                Printable PDF
              </span>
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-blue-600 px-4 py-3.5 transition"
            >
              Let's Connect &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" /> Core Tech Stack &amp; Specialization
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiNextdotjs className="text-black text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiTypescript className="text-blue-600 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaNodeJs className="text-emerald-600 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiMongodb className="text-emerald-500 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase & Visual Card */}
        <div className="lg:col-span-5 relative">
          {/* Visual Code Box */}
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden text-left">
            {/* Terminal Window Header */}
            <div className="bg-gray-800/90 px-4 py-3 flex items-center justify-between border-b border-gray-700/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono">NurUddinProfile.ts</span>
              <div className="w-12"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
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
          </div>

          {/* Floating Pill Badges */}
          <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              5+
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Featured Projects</p>
              <p className="text-[11px] text-gray-500">BazarDor, DevStack &amp; More</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <p className="text-xs font-bold text-gray-900">AI-Assisted Workflow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;