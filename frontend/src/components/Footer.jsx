import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp, HiPhone } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200/90 dark:border-gray-800 text-gray-600 dark:text-gray-400 print:hidden mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="sm:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-sm font-bold shadow-xs group-hover:scale-105 transition-transform">
                NU
              </span>
              <span>
                Nur Uddin<span className="text-blue-600 dark:text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              AI-Driven Full-Stack Next.js Developer specializing in building modern, responsive, and high-performance web applications using Next.js, React.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Open to Junior / Entry-Level Full-Stack Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
                  Printable Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Let's Connect
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Chattogram, Bangladesh • Available for remote and on-site roles.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/nuruddin538"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
              >
                <FaGithub className="text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/nuruddin538"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
              >
                <FaFacebook className="text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/NurUddinNur11"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-sky-500 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
              >
                <FaTwitter className="text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nuruddinnur538@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-rose-500 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
              >
                <HiMail className="text-base" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+8801766463242"
                aria-label="Call or WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
              >
                <HiPhone className="text-base" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nur Uddin. Built with React 19, Framer Motion &amp; Tailwind CSS.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
