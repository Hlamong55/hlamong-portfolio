import { useState } from "react";
import {
  FaServer,
  FaCode,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

// images
import project1a from "../assets/TravelEase1.jfif";
import project1b from "../assets/TravelEase2.jfif";
import project1c from "../assets/TravelEase3.jfif";
import project2b from "../assets/asset-verse-5bd83.web.app_.png";
import project2c from "../assets/asset-verse-5bd83.web.app2.png";
import project2a from "../assets/asset-verse-5bd83.web.app_dashboard_hr_profile.png";
import project3a from "../assets/beamish-tarsier-2d97c3.netlify.app_gameDetails_1.png";
import project3b from "../assets/beamish-tarsier-2d97c3.netlify.app_ (8).png";
import project3c from "../assets/beamish-tarsier-2d97c3.netlify.app_ (7).png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "TravelEase – Vehicle Booking & Trip Management Platform",
      description:
        "A booking platform where users can explore, list, manage, and book vehicles with secure authentication.",
      images: [project1a, project1b, project1c],
      githubClient: "https://github.com/Hlamong55/travelease-client",
      githubServer: "https://github.com/Hlamong55/travelease-server",
      liveDemo: "https://travel-easy-a9889.web.app/",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Express",
        "Firebase",
      ],
      features: [
        "Vehicle Management",
        "Secure Authentication",
        "Smart Booking Flow",
      ],
    },
    {
      id: 2,
      title: "AssetVerse – Corporate B2B Asset Management System",
      description:
        "A smart asset management system for tracking, assigning, and managing company resources efficiently.",
      images: [project2a, project2b, project2c],
      githubClient: "https://github.com/Hlamong55/asset-verse-client",
      githubServer: "https://github.com/Hlamong55/asset-verse-server",
      liveDemo: "https://asset-verse-5bd83.web.app/",
      technologies: ["React", "MongoDB", "Express", "Firebase", "JWT"],
      features: ["Centralized Asset Tracking", "Role-Based Dashboard", "Payment Based Subscription"],
    },
    {
      id: 3,
      title: "GameHub – A Game Library",
      description: "GameHub is a stylish and responsive web application designed for gamers to explore and manage games. It includes authentication, password reset, and profile management ",
      images: [project3a, project3b, project3c],
      githubClient: "https://github.com/Hlamong55/GameHub-A-Game-Library",
      // githubServer: "https://github.com/PritomChakma/PH-Assignment-10-Server",
      liveDemo: "https://beamish-tarsier-2d97c3.netlify.app/",
      technologies: ["React", "Context API", "Framer-Motion", "Firebase"],
      features: ["Dynamic Game Experience", "Smooth & Modern UI", "Secure Authentication & Profiles"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-slate-900 py-24 px-4 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-widest">
              PROJECTS
            </span>
            <FaStar className="text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
           My Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              Work
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real-world full-stack projects built with modern technologies.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-emerald-400/50 transition"
            >
              {/* image */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => {
                  setActiveProject(project);
                  setActiveImage(0);
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* features */}
                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-emerald-400" />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>

                {/* tech */}
                <div className="flex flex-wrap gap-2 my-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <a
                    href={project.githubClient}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-white hover:bg-slate-400 transition"
                  >
                    <FaCode /> Frontend
                  </a>
                  <a
                    href={project.githubServer}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-white hover:bg-slate-400 transition"
                  >
                    <FaServer /> Backend
                  </a>
                </div>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-linear-to-r from-emerald-500 to-cyan-500 text-slate-900 font-semibold"
                >
                  Live Demo <FiArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-124 right-4 bg-red-500 text-white hover:bg-red-700 px-3.5 py-1 font-semibold rounded-xl hover:scale-105 transition"
            >
              Exit
            </button>

            <img
              src={activeProject.images[activeImage]}
              alt="project"
              className="w-[550px] h-[450px] mx-auto object-contain rounded-xl mb-3 transition-transform duration-200 hover:scale-105"
            />

            <div className="flex gap-3 justify-center">
              {activeProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-10 object-cover rounded-lg cursor-pointer border ${
                    activeImage === i
                      ? "border-emerald-400"
                      : "border-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
