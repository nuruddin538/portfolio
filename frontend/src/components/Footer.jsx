import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp, HiPhone } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200/90 text-gray-600 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-black text-gray-900 flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-sm font-bold shadow-xs">
                NU
              </span>
              <span>
                Nur Uddin<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              AI-Driven Full-Stack Next.js Developer specializing in building modern, responsive, and high-performance web applications using Next.js, React.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-gray-500 font-medium">
                Open to Junior / Entry-Level Full-Stack Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-600 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-600 transition">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-600 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-blue-600 font-semibold hover:underline">
                  Printable Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Let's Connect
            </h4>
            <p className="text-xs text-gray-500">
              Chattogram, Bangladesh • Available for remote and on-site roles.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/nuruddin538"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.facebook.com/nuruddin538"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href="https://x.com/NurUddinNur11"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter Profile"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-sky-500 hover:text-white flex items-center justify-center text-gray-700 transition"
              >
                <FaTwitter className="text-base" />
              </a>
              <a
                href="mailto:nuruddinnur538@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-rose-500 hover:text-white flex items-center justify-center text-gray-700 transition"
              >
                <HiMail className="text-base" />
              </a>
              <a
                href="tel:+8801766463242"
                aria-label="Call or WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition"
              >
                <HiPhone className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Nur Uddin. Built with React 19, Next.js knowledge &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-blue-600 font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
