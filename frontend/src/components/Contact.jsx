import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaFacebook, FaTwitter, FaPaperPlane, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/60 border border-blue-300 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider animate-border-pulse shadow-xs">
          <HiOutlineChatAlt2 className="text-blue-600 dark:text-cyan-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Let's <span className="animate-gradient-text">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          I'm open to junior and entry-level development opportunities, collaborative projects, and professional networking.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="shimmer-border-card shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-[calc(1rem-1.5px)] p-6 sm:p-8 space-y-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or any of the social platforms below. I respond promptly!
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email */}
                <a
                  href="mailto:nuruddinnur538@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50/70 dark:hover:bg-gray-800 border border-gray-200/80 dark:border-gray-800 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 group hover:shadow-md hover:shadow-blue-500/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <HiOutlineMail className="text-xl" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                      nuruddinnur538@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+8801766463242"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50/70 dark:hover:bg-gray-800 border border-gray-200/80 dark:border-gray-800 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 group hover:shadow-md hover:shadow-blue-500/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <HiOutlinePhone className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      +880 1766463242
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <HiOutlineLocationMarker className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Chattogram, Bangladesh
                    </span>
                  </div>
                </div>

                {/* Live Portfolio */}
                <a
                  href="https://glistening-yeot-3d11f9.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50/70 dark:hover:bg-gray-800 border border-gray-200/80 dark:border-gray-800 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 group hover:shadow-md hover:shadow-blue-500/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <FaGlobe className="text-lg" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                      Hosted Portfolio
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                      adorable-starship-b29618.netlify.app
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-3">
                  Social &amp; Developer Profiles
                </span>
                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/nuruddin538"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 hover:border-cyan-400 border border-transparent flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/nuruddin538"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook Profile"
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white hover:border-blue-400 border border-transparent flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                  >
                    <FaFacebook className="text-lg" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://x.com/NurUddinNur11"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X Twitter Profile"
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-sky-500 hover:text-white hover:border-cyan-400 border border-transparent flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                  >
                    <FaTwitter className="text-lg" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form with Rotating Border Beam (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="animated-border-wrapper shadow-2xl">
            <div className="animated-border-inner bg-white/95 dark:bg-gray-900/95 p-6 sm:p-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              {/* Success Toast with Framer Motion */}
              <AnimatePresence>
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 flex items-center gap-3 animate-border-pulse"
                  >
                    <HiOutlineCheckCircle className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Message sent successfully!</p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Thank you for reaching out. I will get back to you shortly at {formData.email || "your email"}.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              {status.error && (
                <div className="mb-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/60 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 hover:border-blue-400 dark:hover:border-cyan-400/80 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/60 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 hover:border-blue-400 dark:hover:border-cyan-400/80 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                    Subject / Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Junior Full-Stack Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/60 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 hover:border-blue-400 dark:hover:border-cyan-400/80 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Nur Uddin! We came across your portfolio and would love to discuss a Junior Developer opportunity..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/60 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 hover:border-blue-400 dark:hover:border-cyan-400/80 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button with Animated Gradient & Hover Glow */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:via-indigo-700 hover:to-cyan-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base border border-white/20"
                >
                  {status.submitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
