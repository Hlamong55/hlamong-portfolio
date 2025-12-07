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
      setIsScrolled(window.scrollY > 50);
      
      // Auto detect active section on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", offset: -80 },
    { id: "about", icon: <FaUser />, label: "About", offset: -80 },
    { id: "skills", icon: <FaCode />, label: "Skills", offset: -80 },
    {
      id: "projects",
      icon: <FaProjectDiagram />,
      label: "Projects",
      offset: -80,
    },
    { id: "contact", icon: <MdEmail />, label: "Contact", offset: -80 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-4 group"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <div className={`absolute -inset-2 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full transition-opacity duration-500 ${
                hoveredItem === 'logo' ? 'opacity-80' : 'opacity-60'
              }`}></div>

              <img
                src={Logo}
                alt="Portfolio Logo"
                className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-full border-4 border-white shadow-md object-cover transition-all duration-300 ${
                  hoveredItem === 'logo' ? 'scale-105 shadow-lg' : ''
                }`}
              />
            </div>

            <div className="text-left select-none">
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Hla Mong Sing
                </span>{" "}
                <span className="text-gray-900">Marma</span>
              </h1>

              <p className="mt-1 text-xs sm:text-sm text-gray-600 font-medium tracking-wide transition-colors duration-300 group-hover:text-emerald-600">
                MERN Stack Developer
              </p>

              <div className={`mt-1 h-1 w-12 sm:w-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-glow transition-all duration-500 ${
                hoveredItem === 'logo' ? 'w-16 sm:w-20' : ''
              }`}></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-1 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-100">
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    onSetActive={() => setActiveSection(item.id)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-white text-emerald-600 shadow-md"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-white/80"
                    }`}
                  >
                    <span className={`text-lg transition-transform duration-300 ${
                      activeSection === item.id ? 'scale-110 text-emerald-500' : ''
                    }`}>
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
                    <FaChevronRight className={`text-xs text-emerald-400 transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} />
                  </ScrollLink>
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Hire Me Button */}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="group"
            >
              <button className="flex items-center gap-1 px-2  py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                <MdWork className="animate-pulse group-hover:animate-bounce" />
                <span className="font-bold text-sm sm:text-base">Hire Me</span>
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl text-emerald-600" />
            ) : (
              <FaBars className="text-xl text-gray-600 hover:text-emerald-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-20 mt-2 mx-4 transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-emerald-50/50 to-blue-50/50' 
                      : ''
                  }`}></div>
                  
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-emerald-600"
                        : "text-gray-600 hover:text-emerald-500"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xl ${
                        activeSection === item.id ? 'text-emerald-500' : ''
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <FaChevronRight className="text-xs text-emerald-400" />
                  </ScrollLink>
                </div>
              ))}

              {/* Mobile Hire Button */}
              <div className="pt-4 border-t border-gray-100">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <button className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                    <MdWork className="group-hover:animate-bounce" />
                    <span className="font-bold">Hire Me</span>
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Section Indicator - Desktop Only */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent">
        <div 
          className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-500 ease-out shadow-lg shadow-emerald-400/30"
          style={{
            width: '20%',
            marginLeft: `${navItems.findIndex(item => item.id === activeSection) * 20}%`,
          }}
        ></div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;