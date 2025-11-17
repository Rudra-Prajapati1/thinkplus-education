import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/Data";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-gray-300 pt-14 pb-8 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-gray-600/40 pb-10">
        {/* === Brand & Description === */}
        <div className="flex-1 md:max-w-md">
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-white mb-4"
          >
            ThinkPlus
            <Plus className="w-4 h-4 text-primary" strokeWidth={5} />
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            An initiative by IIM graduates to empower students with structured
            learning, personalized mentorship, and professional development.
            ThinkPlus bridges ambition with achievement through innovation in
            education.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a
              href="tel:+910000000000"
              className="text-sm text-gray-300 hover:text-primary transition"
            >
              +91 0000000000
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="mailto:support@thinkplus.com"
              className="text-sm text-gray-300 hover:text-primary transition"
            >
              support@thinkplus.com
            </a>
          </div>
        </div>

        {/* === Quick Links + Contact === */}
        <div className="flex-1 flex flex-col sm:flex-row justify-evenly gap-10 md:gap-20">
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Copyright === */}
      <p className="relative z-10 text-center text-xs md:text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">ThinkPlus</span>. All rights
        reserved.
      </p>

      {/* Gradient Divider */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-pink-500/60 to-transparent opacity-60"></div>
    </footer>
  );
};

export default Footer;
