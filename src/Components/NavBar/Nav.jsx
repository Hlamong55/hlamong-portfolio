import { useEffect, useState } from "react";
import {
  FaBars,
  FaCode,
  FaHome,
  FaProjectDiagram,
  FaTimes,
  FaUser,
  FaChevronRight,
} from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/Logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", offset: -80 },
    { id: "home", icon: <FaUser />, label: "About", offset: -80 },
    { id: "skills", icon: <FaCode />, label: "Skills", offset: -80 },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects", offset: -80 },
    { id: "contact", icon: <MdEmail />, label: "Contact", offset: -80 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-black/30 py-3"
          : "bg-slate-950 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-md"></div>
              <img
                src={Logo}
                alt="Logo"
                className="relative h-14 w-14 rounded-full border-4 border-slate-900 object-cover"
              />
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold">
                <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Hla Mong Sing
                </span>{" "}
                <span className="text-slate-100">Marma</span>
              </h1>
              <p className="text-sm text-slate-300 group-hover:text-emerald-400 transition">
                MERN Stack Developer
              </p>
              <div
                className={`mt-1 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500 ${
                  hoveredItem === "logo" ? "w-20" : "w-14"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-800/70 backdrop-blur-xl rounded-2xl p-2 border border-slate-700">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <ScrollLink
                    to={item.id}
                    smooth
                    offset={item.offset}
                    duration={500}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition-all ${
                      activeSection === item.id
                        ? "bg-slate-900 text-emerald-400 shadow-md shadow-emerald-500/20"
                        : "text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60"
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        activeSection === item.id
                          ? "text-emerald-400 scale-110"
                          : "text-slate-400"
                      } transition`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                    <FaChevronRight
                      className={`text-xs transition-all ${
                        hoveredItem === item.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </ScrollLink>

                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full shadow-md shadow-emerald-400/40" />
                  )}
                </div>
              ))}
            </div>

            {/* Hire Me */}
            <ScrollLink to="contact" smooth offset={-80} duration={500}>
              <button className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 transition">
                <MdWork />
                Hire Me
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          >
            {isMenuOpen ? (
              <FaTimes className="text-emerald-400 text-xl" />
            ) : (
              <FaBars className="text-slate-300 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-24 mx-4 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700 p-4 space-y-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth
                offset={item.offset}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl transition ${
                  activeSection === item.id
                    ? "bg-slate-800 text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                <FaChevronRight className="text-xs" />
              </ScrollLink>
            ))}

            <ScrollLink
              to="contact"
              smooth
              offset={-80}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full mt-3 flex items-center justify-center gap-2 p-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold rounded-xl">
                <MdWork />
                Hire Me
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
