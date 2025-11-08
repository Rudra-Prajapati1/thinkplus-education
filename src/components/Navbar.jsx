import { Plus, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../utils/Data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-md" : "bg-white/90 shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <Link
          to="/"
          className="flex gap-1 text-3xl sm:text-4xl font-poppins text-primary font-bold hover:opacity-80 transition"
        >
          ThinkPlus
          <Plus className="w-4 h-4" strokeWidth={4} />
        </Link>

        <div className="hidden md:flex gap-6 lg:gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-primary transition-colors ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-primary transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 max-h-[300px]"
            : "opacity-0 -translate-y-5 max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6 text-gray-700 font-medium text-base sm:text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `hover:text-primary transition-colors ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
