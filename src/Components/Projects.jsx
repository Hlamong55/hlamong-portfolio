import React from "react";
import { FaGithub, FaExternalLinkAlt, FaServer, FaCode, FaDatabase, FaNodeJs, FaReact, FaCheckCircle, FaCogs, FaPalette } from "react-icons/fa";
import { FiArrowUpRight, FiBox } from "react-icons/fi";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Medical Camp Management System",
      description: "A full-stack platform for organizing and managing medical camps with real-time registration, payment processing, and dynamic dashboards for administrators and participants.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-12",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-12-Server",
      liveDemo: "https://ph-assignment-112.web.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Firebase"],
      type: "Full Stack",
      category: "Healthcare Technology",
      features: ["Real-time Authentication", "Payment Integration", "Admin Dashboard", "Responsive Design"],
      status: "Production Ready"
    },
    {
      id: 2,
      image: project2,
      title: "Volunteer Coordination Platform",
      description: "Comprehensive system for managing volunteer activities with task assignment, scheduling, progress tracking, and team communication features.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-11",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-11-Server",
      liveDemo: "https://ph-assignment-11-f2153.web.app",
      technologies: ["React", "Express", "MongoDB", "JWT", "Tailwind", "Firebase"],
      type: "Full Stack",
      category: "Management System",
      features: ["Task Management", "Real-time Updates", "User Roles", "Data Analytics"],
      status: "Live"
    },
    {
      id: 3,
      image: project3,
      title: "Interactive Gaming Review Platform",
      description: "Community-driven platform for gamers to rate, review, and discuss games with moderation tools and social features.",
      githubClient: "https://github.com/PritomChakma/PH-Assignment-10",
      githubServer: "https://github.com/PritomChakma/PH-Assignment-10-Server",
      liveDemo: "https://ph-assignment-10-22d95.web.app/",
      technologies: ["React", "Node.js", "MongoDB", "Context API", "Firebase", "Tailwind"],
      type: "Full Stack",
      category: "Social Platform",
      features: ["User Reviews", "Rating System", "Content Moderation", "Community Forums"],
      status: "Live"
    }
  ];

  const techStack = [
    { name: "MongoDB", icon: <FaDatabase />, color: "bg-green-100 text-green-600" },
    { name: "Express", icon: <FiBox />, color: "bg-gray-100 text-gray-600" },
    { name: "React", icon: <FaReact />, color: "bg-blue-100 text-blue-600" },
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-100 text-green-600" },
    { name: "Firebase", icon: <FaCogs />, color: "bg-yellow-100 text-yellow-600" },
    { name: "JWT", icon: <FaPalette />, color: "bg-purple-100 text-purple-600" }
  ];

  return (
    <section className="py-20 px-4 bg-white relative" id="projects">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300"></div>
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">PORTFOLIO SHOWCASE</span>
            <div className="h-px w-16 bg-gradient-to-r from-blue-300 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 ml-2">Projects</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional full-stack applications showcasing modern web development expertise
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`px-6 py-3 rounded-xl ${tech.color} border border-transparent group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 flex items-center gap-3`}>
                  <div className="text-xl">{tech.icon}</div>
                  <span className="text-gray-800 font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-semibold rounded-full border border-green-200">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full border border-blue-200">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Description */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <FaCode className="group-hover/btn:text-blue-600 transition-colors" />
                        <span className="font-medium">Frontend</span>
                      </a>
                      
                      <a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-600 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <FaServer className="group-hover/btn:text-green-600 transition-colors" />
                        <span className="font-medium">Backend</span>
                      </a>
                    </div>
                    
                    {/* Live Demo Button */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg group/live"
                    >
                      <FaExternalLinkAlt />
                      <span className="font-medium">Live Demo</span>
                      <FiArrowUpRight className="group-hover/live:translate-x-1 group-hover/live:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700 font-medium">Full Stack Projects</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-700 font-medium">Technologies</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">Live</div>
              <div className="text-gray-700 font-medium">All Deployed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-8">
              Let's build something amazing together. Explore my complete portfolio or discuss your project requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Hlamong55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-300 hover:border-blue-300 text-gray-800 hover:text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <FaGithub className="text-xl" />
                <span>View GitHub Portfolio</span>
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Start a Project</span>
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              All projects include detailed documentation, clean code architecture, and are ready for production
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;