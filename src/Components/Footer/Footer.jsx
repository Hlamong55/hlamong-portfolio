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
  FaRegPaperPlane
} from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-32 pb-16 overflow-hidden">
      {/* Floating Islands */}
      <div className="absolute -top-32 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-100/40 to-blue-100/40 blur-3xl"></div>
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-orange-100/30 to-red-100/30 blur-3xl"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <FaGlobeAmericas className="text-2xl text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-500 tracking-widest uppercase">Let's Connect</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500">
                Ready to Build?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
              Let's collaborate on your next big project
            </p>
            
            <a 
              href="mailto:chakmapritom1@gmail.com" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <FaRegPaperPlane className="group-hover:rotate-12 transition-transform duration-300" />
              Start a Conversation
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-600 hover:text-cyan-500 cursor-pointer font-medium transition-colors duration-300"
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <SiReact />, label: "React", color: "text-cyan-500" },
              { icon: <SiTailwindcss />, label: "Tailwind", color: "text-teal-400" },
              { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-500" },
              { icon: <FaCode />, label: "Node.js", color: "text-green-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-xl border border-gray-200 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <span className="text-gray-700 font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-300/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <FaRocket className="text-cyan-500" />
                <span className="text-gray-800 font-semibold">Hla Mong Sing Marma</span>
              </div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} • MERN Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/Hlamong55", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/pritomchakma/", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:border-cyan-400 border border-gray-200 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-gray-700 text-sm">
                Crafted with passion by 
                <span className="text-cyan-500 font-medium ml-1">Bijoy</span>
              </span>
              <FaCoffee className="text-amber-500 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 border border-cyan-400/50 hover:-translate-y-1 z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
