import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaFileDownload,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaRegStar,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdVerified, MdWork } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import resume from "../assets/resumePDF.pdf";
import img from "./../assets/Logo.jpeg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    // Typewriter effect for title
    const roles = [
      "Full Stack Developer",
      "MERN Stack Expert",
      "UI/UX Designer",
      "Problem Solver",
      "Tech Enthusiast",
    ];

    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentRole = roles[currentIndex];

      if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentIndex = (currentIndex + 1) % roles.length;
        }
      }

      setTextIndex(charIndex);
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Hlamong55",
      label: "GitHub",
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: <FaLinkedin />,
      url: "#",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800",
    },

    {
      icon: <MdEmail />,
      url: "bijoymarma55@gmail.com",
      label: "Email",
      color: "from-emerald-500 to-green-600",
    },
  ];

  const skills = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-600" },
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-600" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-lime-500" },
    { name: "Express", level: 88, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 80, color: "from-blue-600 to-indigo-700" },
    { name: "Tailwind", level: 95, color: "from-teal-500 to-cyan-600" },
  ];

  const currentRole = "Full Stack Developer".substring(0, textIndex);

  // Resume download handler
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement("a");

    // Use a sample resume PDF URL or your actual resume file
    link.href = resume; // Update with your actual resume path
    link.download = "Hla_Mong_Marma_Resume.pdf";

    // Append to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/20 pt-16"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(16, 185, 129, ${
                Math.random() * 0.1 + 0.05
              }) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              transform: `translate(${mousePosition.x * 0.1}px, ${
                mousePosition.y * 0.1
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Elegant & Modern */}
          <div className="space-y-8 lg:space-y-10 relative z-10">
            {/* Greeting Badge with Animation */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-lg shadow-emerald-500/10 group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-emerald-700 tracking-wide">
                HELLO THERE! 👋
              </span>
              <FaRegStar className="text-amber-400 animate-pulse group-hover:rotate-180 transition-transform duration-700" />
            </div>

            {/* Name with Gradient Glow */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
                <span className="text-gray-900">Hla Mong </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 animate-gradient-flow bg-[length:200%_auto]">
                  Marma
                </span>
              </h1>

              {/* Animated Role */}
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                <div className="relative">
                  <div className="text-2xl lg:text-3xl font-semibold text-gray-700 min-h-[3rem]">
                    <span className="text-gray-900">{currentRole}</span>
                    <span className="ml-1 w-[2px] h-8 bg-emerald-500 inline-block animate-pulse"></span>
                  </div>
                  <div className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Description with Highlight */}
            <div className="relative">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                I'm a passionate{" "}
                <span className="relative">
                  <span className="text-emerald-600 font-semibold">
                    Full Stack Developer
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/50 to-blue-400/50 rounded-full"></span>
                </span>{" "}
                specializing in creating{" "}
                <span className="font-medium text-gray-800">
                  beautiful digital experiences
                </span>{" "}
                that combine{" "}
                <span className="font-medium text-gray-800">
                  aesthetic design
                </span>{" "}
                with{" "}
                <span className="font-medium text-gray-800">
                  robust functionality
                </span>
                .
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaCode className="text-emerald-500" />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Core Skills
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-gray-600">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons with Effects - Including Resume Download */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <button className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <MdWork className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold tracking-wide relative z-10">
                    Explore Projects
                  </span>
                  <FaArrowRight className="text-sm relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </ScrollLink>

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaFileDownload className="text-xl relative z-10 group-hover:animate-bounce transition-transform duration-300" />
                <span className="font-bold tracking-wide relative z-10">
                  Download Resume
                </span>
                <FaFilePdf className="text-sm relative z-10" />
              </button>

              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="sm:hidden group"
              >
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
                  <span className="font-bold tracking-wide">Get In Touch</span>
                  <FaArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </ScrollLink>
            </div>

            {/* Get In Touch Button for Desktop */}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="hidden sm:block"
            >
              <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
                <span className="font-bold tracking-wide">Get In Touch</span>
                <FaArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </ScrollLink>

            {/* Social Links & Info */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white hover:scale-110 hover:shadow-lg transition-all duration-300 relative group`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}

                {/* Resume Download Small Button */}
                <button
                  onClick={handleResumeDownload}
                  className="p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:scale-110 hover:shadow-lg transition-all duration-300 relative group"
                  title="Download Resume"
                >
                  <FaFileDownload className="group-hover:animate-bounce" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Download CV
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MdLocationOn className="text-emerald-500" />
                  <span className="text-sm font-medium">
                    Bandarban, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-emerald-700">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Elegant Profile Card */}
          <div className="relative lg:flex justify-end">
            {/* Main Profile Container */}
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-lg">
              {/* Floating Background Effects */}
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/10 via-blue-400/10 to-purple-400/10 rounded-[3rem] blur-2xl animate-pulse"></div>

              {/* Profile Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden group">
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-r from-emerald-50/80 to-blue-50/80 border-b border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{
                            background:
                              i === 0
                                ? "#10b981"
                                : i === 1
                                ? "#3b82f6"
                                : "#8b5cf6",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <MdVerified className="text-emerald-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        Verified Profile
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Image with Effects */}
                <div className="p-8 lg:p-10">
                  <div className="relative w-72 h-72 mx-auto">
                    {/* Animated Rings */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 border-2 border-emerald-300/30 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-6 border-2 border-blue-300/30 rounded-full animate-spin-slow-reverse"></div>
                      <div className="absolute inset-12 border-2 border-purple-300/30 rounded-full animate-spin-slow"></div>
                    </div>

                    {/* Profile Image Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl group-hover:border-emerald-200 transition-all duration-700">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-blue-500/10 z-10"></div>

                      {/* Profile Image */}
                      <img
                        src={img}
                        alt="Hla Mong Marma"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -top-2 -right-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl shadow-lg animate-float">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-300" />
                        <span className="text-sm font-bold">MERN Expert</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 -left-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-100 animate-float-slow">
                      <div className="flex items-center gap-2">
                        <FaRocket className="text-emerald-500" />
                        <span className="text-sm font-semibold text-gray-700">
                          1+ Years Exp
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Bar with Resume Info */}
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 group hover:bg-emerald-100/70 transition-all duration-300">
                      <div className="text-2xl font-bold text-emerald-600">
                        15+
                      </div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100 group hover:bg-blue-100/70 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600">
                        10+
                      </div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50/50 rounded-xl border border-purple-100 group hover:bg-purple-100/70 transition-all duration-300">
                      <div className="text-2xl font-bold text-purple-600">
                        100%
                      </div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-4">
            <div className="text-sm text-gray-500 font-medium tracking-wide">
              SCROLL DOWN
            </div>
            <div className="relative group">
              {/* Animated Circle */}
              <div className="w-16 h-16 rounded-full border-2 border-gray-300/50 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400/30 animate-spin-slow"></div>
              </div>

              {/* Arrow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 border-b-2 border-r-2 border-emerald-500 transform rotate-45 translate-y-1 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            filter: drop-shadow(0 10px 20px rgba(16, 185, 129, 0.1));
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            filter: drop-shadow(0 20px 40px rgba(16, 185, 129, 0.2));
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(10px) rotate(3deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(-3deg);
          }
        }

        @keyframes gradient-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-gradient-flow {
          animation: gradient-flow 4s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow 12s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default Hero;
