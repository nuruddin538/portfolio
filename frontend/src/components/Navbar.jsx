import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiDownload } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
  { name: "Resume", to: "/resume", isRoute: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";

  // Shadow and active section detection when scrolling on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks
        .filter((link) => link.id)
        .map((link) => document.getElementById(link.id));

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm dark:shadow-gray-950/50 border-b border-gray-200/80 dark:border-gray-800/80"
          : "bg-white/40 dark:bg-gray-950/40 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white group flex items-center gap-2.5 shrink-0"
        >
          <motion.span
            whileHover={{ scale: 1.08, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono font-extrabold text-lg shadow-md shadow-blue-500/25"
          >
            NU
          </motion.span>
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 dark:from-white dark:via-blue-200 dark:to-cyan-400 bg-clip-text text-transparent">
            Nur Uddin<span className="text-blue-600 dark:text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links (Large Screens) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            if (link.isRoute) {
              const isLinkActive = isResumePage;
              return (
                <li key={link.name} className="relative">
                  <Link
                    to={link.to}
                    className={`relative py-1.5 font-medium text-sm transition-colors duration-200 flex items-center gap-1.5 ${
                      isLinkActive
                        ? "text-blue-600 dark:text-cyan-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded border border-blue-200/60 dark:border-blue-800">
                      CV
                    </span>
                    {isLinkActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            }

            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id} className="relative">
                <a
                  href={href}
                  className={`relative py-1.5 font-medium text-sm transition-colors duration-200 ${
                    isLinkActive
                      ? "text-blue-600 dark:text-cyan-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                  {isLinkActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA & Theme Toggle (Tablet & Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download="Nur_Uddin_Resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 lg:px-5 rounded-full text-xs lg:text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer shrink-0"
          >
            <HiDownload className="text-base" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile / Small Tablet Action Bar (Right side) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
          >
            {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="py-6 px-6 max-w-7xl mx-auto space-y-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  if (link.isRoute) {
                    const isLinkActive = isResumePage;
                    return (
                      <li key={link.name}>
                        <Link
                          to={link.to}
                          onClick={closeMenu}
                          className={`flex items-center justify-between py-2 px-3 rounded-lg text-base font-medium transition ${
                            isLinkActive
                              ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 font-semibold"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                          }`}
                        >
                          <span>{link.name}</span>
                          <span className="text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-semibold border border-blue-200 dark:border-blue-800">
                            Printable CV
                          </span>
                        </Link>
                      </li>
                    );
                  }

                  const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
                  const isLinkActive = isHomePage && active === link.id;

                  return (
                    <li key={link.id}>
                      <a
                        href={href}
                        onClick={closeMenu}
                        className={`block py-2 px-3 rounded-lg text-base font-medium transition ${
                          isLinkActive
                            ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 font-semibold"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Download Resume Button */}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="/resume.pdf"
                  download="Nur_Uddin_Resume.pdf"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md transition cursor-pointer"
                >
                  <HiDownload className="text-xl" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;