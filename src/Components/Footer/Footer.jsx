import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaCoffee,
  FaCode,
  FaRocket,
  FaGlobeAmericas,
  FaRegPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden text-slate-200">
      {/* Glow Background */}
      <div className="absolute -top-32 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
            <FaGlobeAmericas className="text-2xl text-emerald-400" />
            <span className="text-sm font-semibold tracking-widest uppercase text-emerald-400">
              Let's Connect
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              Ready to Build?
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Let’s collaborate and turn ideas into real-world products
          </p>

          <a
            href="mailto:bijoymarma55@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-amber-100 bg-linear-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition-all shadow-lg"
          >
            <FaRegPaperPlane />
            Start a Conversation
          </a>
        </div>

        {/* Navlink */}
        <div className="flex justify-center gap-8 mb-14">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer font-medium text-slate-300 hover:text-emerald-400 transition"
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { icon: <SiMongodb />, label: "MongoDB", color: "text-teal-400" },
            {
              icon: <SiExpress />,
              label: "Express.js",
              color: "text-blue-400",
            },
            { icon: <SiReact />, label: "React", color: "text-cyan-400" },
            { icon: <FaCode />, label: "Node.js", color: "text-green-400" },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-emerald-400 transition"
            >
              <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
              <span className="text-slate-300">{tech.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-500 pt-5 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <FaRocket className="text-emerald-400" />
              <span className="font-bold text-slate-200">
                Hla Mong Sing Marma
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} • MERN Stack Developer
            </p>
          </div>

          {/* Middle - Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Hlamong55",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/hlamong-sing/",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:bijoymarma55@gmail.com",
                label: "Gmail",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-12 h-12 text-xl flex items-center justify-center rounded-full 
                   bg-slate-800 border border-slate-700 
                   hover:border-emerald-400 hover:text-emerald-400 
                   transition-all duration-300 hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Right - Crafted Badge */}
          <div className="flex justify-center md:justify-end">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-800 border border-slate-700 rounded-full">
              <FaHeart size={18} className="text-red-500 animate-pulse" />
              <span className="text-slate-300 text-sm font-semibold">
                Crafted with Passion {" "}
                
              </span>
              <FaCoffee size={18} className="text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* arrow btn */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-emerald-400 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-115 transition z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
