import React, { useState } from "react";
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaLayerGroup, 
  FaRocket,
  FaPaintBrush,
  FaBolt,
  FaLightbulb,
  FaStar,
  FaArrowRight
} from "react-icons/fa";
import { MdSpeed, MdDesignServices } from "react-icons/md";

// Import your images
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/JavaScript.png";
import ReactJs from "../assets/React.png";
import NodeJs from "../assets/NodeJs.png";
import ExpressJs from "../assets/ExpressJs.png";
import MongoDB from "../assets/MongoDB.png";
import Git from "../assets/Git.png";
import RestApi from "../assets/Api.png";
import NextJs from "../assets/NextJs.png";
import TypeScript from "../assets/TypeScript.png";
import Firebase from "../assets/Firebase.png";
import Redux from "../assets/Redux.png";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <FaPaintBrush className="text-emerald-500" />,
      gradient: "from-emerald-500 to-blue-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      skills: [
        { name: "HTML5", image: html, level: 98, color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
        { name: "CSS3", image: css, level: 95, color: "from-blue-500 to-indigo-500", bg: "bg-blue-50" },
        { name: "Tailwind", image: tailwind, level: 95, color: "from-teal-400 to-cyan-500", bg: "bg-cyan-50" },
        { name: "JavaScript", image: JavaScript, level: 90, color: "from-yellow-500 to-amber-500", bg: "bg-amber-50" },
        { name: "React", image: ReactJs, level: 92, color: "from-cyan-400 to-blue-500", bg: "bg-blue-50" },
        { name: "Redux", image: Redux, level: 85, color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: <FaServer className="text-blue-500" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      skills: [
        { name: "Node.js", image: NodeJs, level: 88, color: "from-green-500 to-emerald-500", bg: "bg-emerald-50" },
        { name: "Express.js", image: ExpressJs, level: 90, color: "from-gray-700 to-gray-900", bg: "bg-gray-100" },
        { name: "MongoDB", image: MongoDB, level: 85, color: "from-green-400 to-lime-500", bg: "bg-green-50" },
      ]
    },
    {
      id: "tools",
      title: "Tools",
      icon: <FaLayerGroup className="text-purple-500" />,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      skills: [
        { name: "Git/GitHub", image: Git, level: 90, color: "from-gray-700 to-gray-900", bg: "bg-gray-100" },
        { name: "REST API", image: RestApi, level: 88, color: "from-blue-400 to-indigo-400", bg: "bg-indigo-50" },
        { name: "Next.js", image: NextJs, level: 85, color: "from-gray-500 to-gray-700", bg: "bg-gray-100" },
        { name: "TypeScript", image: TypeScript, level: 80, color: "from-blue-600 to-blue-800", bg: "bg-blue-50" },
        { name: "Firebase", image: Firebase, level: 75, color: "from-yellow-500 to-orange-500", bg: "bg-orange-50" },
      ]
    }
  ];

  const expertiseHighlights = [
    {
      title: "Modern Stack",
      description: "Using latest technologies for optimal performance",
      icon: <FaRocket className="text-xl" />,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Clean Code",
      description: "Maintainable and scalable code architecture",
      icon: <FaCode className="text-xl" />,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Fast Delivery",
      description: "Efficient development without compromising quality",
      icon: <MdSpeed className="text-xl" />,
      color: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      title: "Problem Solving",
      description: "Creative solutions for complex challenges",
      icon: <FaLightbulb className="text-xl" />,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return skillCategories.flatMap(cat => cat.skills);
    }
    return skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  };

  return (
    <section 
      className="relative min-h-screen py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-emerald-50/20 overflow-hidden"
      id="skills"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        
        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg shadow-emerald-500/5">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase">
              Technical Skills
            </span>
            <FaStar className="text-amber-400 animate-pulse" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">Skills & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Expertise
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Mastery of modern technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-16">
          {/* All Skills Button */}
          <button
            onClick={() => setActiveCategory("all")}
            onMouseEnter={() => setHoveredSkill("all")}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`group relative px-5 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/20"
                : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-md"
            }`}
          >
            <div className="relative flex items-center gap-2 sm:gap-3">
              <FaCode className={`text-lg ${activeCategory === "all" ? 'text-white' : 'text-emerald-500 group-hover:text-emerald-600'}`} />
              <span className="font-medium text-sm sm:text-base">All Skills</span>
            </div>
          </button>
          
          {/* Category Buttons */}
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={() => setHoveredSkill(category.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group relative px-5 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              <div className="relative flex items-center gap-2 sm:gap-3">
                <span className={activeCategory === category.id ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'}>
                  {category.icon}
                </span>
                <span className="font-medium text-sm sm:text-base">
                  {category.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Main Card */}
              <div className={`relative bg-white rounded-2xl border ${
                hoveredSkill === skill.name ? 'border-emerald-300 shadow-xl' : 'border-gray-200 shadow-lg'
              } p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-2 overflow-hidden`}>
                
                {/* Animated Background Effect */}
                <div className={`absolute inset-0 ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Skill Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl ${skill.bg} border border-gray-100 group-hover:border-emerald-100 transition-all duration-300`}>
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Skill Info */}
                <div className="relative text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Expertise</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative space-y-2">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Basic</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-emerald-600">Why</span> Choose My Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Combining technical skills with strategic thinking for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseHighlights.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${item.color}`}>
                  
                  {/* Icon Container */}
                  <div className="inline-flex p-3 bg-white rounded-xl border border-gray-100 mb-6 group-hover:border-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block group max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 group-hover:border-emerald-300 group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 relative z-10">
                Ready to Build Something <span className="text-emerald-600">Amazing</span>?
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed relative z-10">
                Let's combine these skills to create exceptional digital experiences that drive results
              </p>
              <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  Start a Project
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;