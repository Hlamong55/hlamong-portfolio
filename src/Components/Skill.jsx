import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaRocket,
  FaStar,
} from "react-icons/fa";

// images
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/JavaScript.png";
import react from "../assets/React.png";
import node from "../assets/NodeJs.png";
import express from "../assets/express-js.png";
import mongo from "../assets/MongoDB.png";
import git from "../assets/Git.png";
import api from "../assets/Api.png";
import next from "../assets/Nextjs (2).png";
import ts from "../assets/TypeScript.png";
import firebase from "../assets/Firebase.png";
import jwt from "../assets/jwt.png"

const Skills = () => {
  const [active, setActive] = useState("all");

  const categories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "HTML5", img: html, level: 100 },
        { name: "CSS3", img: css, level: 95 },
        { name: "Tailwind", img: tailwind, level: 98 },
        { name: "JavaScript", img: js, level: 90 },
        { name: "React", img: react, level: 95 },
        { name: "Next.js", img: next, level: 75 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", img: node, level: 92 },
        { name: "Express.js", img: express, level: 93 },
        { name: "MongoDB", img: mongo, level: 95 },
        { name: "JWT", img: jwt, level: 95 },
      ],
    },
    {
      id: "tools",
      title: "Tools",
      icon: <FaLayerGroup />,
      skills: [
        { name: "Git & GitHub", img: git, level: 90 },
        { name: "REST API", img: api, level: 92 },
        { name: "TypeScript", img: ts, level: 50 },
        { name: "Firebase", img: firebase, level: 85 },
      ],
    },
  ];

  const allSkills = categories.flatMap((c) => c.skills);
  const skillsToShow =
    active === "all"
      ? allSkills
      : categories.find((c) => c.id === active)?.skills || [];

  return (
    <section
      id="skills"
      className="relative bg-slate-900 py-20 px-4 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-widest">
              SKILLS
            </span>
            <FaStar className="text-emerald-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              Expertise
            </span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable, modern and high-quality web
            applications.
          </p>
        </div>

        {/* filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button
            onClick={() => setActive("all")}
            className={`px-6 py-3 rounded-xl border transition ${
              active === "all"
                ? "bg-emerald-500 text-slate-900 border-emerald-400"
                : "bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-400"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-3 rounded-xl border flex items-center gap-2 transition ${
                active === cat.id
                  ? "bg-emerald-500 text-slate-900 border-emerald-400"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-400"
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* skills grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsToShow.map((skill, i) => (
            <div
              key={i}
              className="
                group relative bg-slate-800/90 border border-slate-700
                rounded-2xl p-6 backdrop-blur
                hover:-translate-y-2
                hover:border-emerald-400/50
                hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                transition
              "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 mx-auto mb-4 group-hover:scale-110 transition"
              />

              <h3 className="text-lg font-semibold text-slate-100 text-center">
                {skill.name}
              </h3>

              <p className="text-sm text-slate-400 text-center mb-4">
                Proficiency: {skill.level}%
              </p>

              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-emerald-400 to-cyan-400 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700">
            <FaRocket className="text-emerald-400" />
            <span className="text-slate-300 font-medium">
              Always learning & improving with modern technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
