import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { FaCode, FaServer, FaLayerGroup, FaRocket, FaStar } from "react-icons/fa";

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
import jwt from "../assets/jwt.png";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   SKILLS COMPONENT
========================================================= */

const Skills = () => {
  const [active, setActive] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  /* =======================================================
     SKILL DATA
  ======================================================= */

  const categories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: FaCode,
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
      icon: FaServer,
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
      icon: FaLayerGroup,
      skills: [
        { name: "Git & GitHub", img: git, level: 90 },
        { name: "REST API", img: api, level: 92 },
        { name: "TypeScript", img: ts, level: 50 },
        { name: "Firebase", img: firebase, level: 85 },
      ],
    },
  ];

  const allSkills = categories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.title,
    }))
  );

  const skillsToShow =
    active === "all"
      ? allSkills
      : categories
          .find((category) => category.id === active)
          ?.skills.map((skill) => ({
            ...skill,
            category:
              categories.find((category) => category.id === active)?.title ||
              "",
          })) || [];

  return (
    <section
      id="skills"
      className=" relative overflow-hidden bg-brand-bg px-4 py-24 sm:px-6 sm:py-28"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className=" pointer-events-none absolute inset-0  bg-linear-to-br from-brand-bg via-[#0b1527] to-brand-bg"
      />

      {/* Static ambient glows - better performance */}

      <div
        className=" pointer-events-none absolute -left-52 top-[15%] h-[500px]  w-[500px] rounded-full bg-purple-500/[0.07] blur-[130px]"
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[35%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[130px]
        "
      />

      <div
        className=" pointer-events-none absolute bottom-[-250px]  left-[30%] h-[480px]  w-[480px]  rounded-full bg-emerald-400/5 blur-[130px] "
      />

      {/* ===================================================
          GRID BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.028]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* ===================================================
          SPACE DOTS
          Only opacity/scale animation → lightweight
      =================================================== */}

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.2, 0.85, 0.2],
                scale: [0.8, 1.2, 0.8],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[15%]
          h-1.5
          w-1.5
          rounded-full
          bg-purple-400
          shadow-[0_0_12px_#8B5CF6]
        "
      />

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.15, 0.9, 0.15],
                scale: [0.75, 1.25, 0.75],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="
          pointer-events-none
          absolute
          right-[11%]
          top-[23%]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_14px_#00C8FF]
        "
      />

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.15, 0.8],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[18%]
          h-1.5
          w-1.5
          rounded-full
          bg-emerald-400
          shadow-[0_0_12px_#00E6A8]
        "
      />

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.12, 0.65, 0.12],
              }
        }
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[56%]
          top-[13%]
          h-[3px]
          w-[3px]
          rounded-full
          bg-white
          shadow-[0_0_7px_white]
        "
      />

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.1, 0.65, 0.1],
              }
        }
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[28%]
          bottom-[12%]
          h-[3px]
          w-[3px]
          rounded-full
          bg-white
          shadow-[0_0_7px_white]
        "
      />

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-14 text-center sm:mb-16"
        >
          {/* Badge */}

          <motion.div
            variants={fadeUp}
            className="
              glass-panel
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              px-5
              py-2.5
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.24em]
                text-slate-300
                sm:text-sm
              "
            >
              Skills
            </span>

            <FaStar className="text-cyan-300" />
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technical{" "}
            <span className="brand-gradient-text">
              Expertise
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            Technologies I use to build scalable, modern and high-quality web
            applications.
          </motion.p>
        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-14
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {/* ALL */}

          <motion.button
            layout
            onClick={() => setActive("all")}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={` relative  overflow-hidden rounded-xl  border px-6  py-3  text-sm font-semibold transition-colors  duration-300
              ${
                active === "all"
                  ? "border-cyan-400/25 text-white"
                  : "border-white/[0.07] bg-white/2.5 text-slate-400 hover:border-cyan-400/20 hover:text-white"
              }
            `}
          >
            {active === "all" && (
              <motion.span
                layoutId="active-skill-filter"
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-linear-to-r
                  from-purple-500/20
                  via-cyan-400/15
                  to-emerald-400/20
                "
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              All
            </span>
          </motion.button>

          {/* CATEGORY FILTERS */}

          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;

            return (
              <motion.button
                layout
                key={cat.id}
                onClick={() => setActive(cat.id)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={` relative flex  items-center  gap-2  overflow-hidden  rounded-xl  border  px-6  py-3  text-sm  font-semibold  transition-colors  duration-300
                  ${
                    isActive
                      ? "border-cyan-400/25 text-white"
                      : "border-white/[0.07] bg-white/2.5 text-slate-400 hover:border-cyan-400/20 hover:text-white"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-skill-filter"
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-linear-to-r
                      from-purple-500/20
                      via-cyan-400/15
                      to-emerald-400/20
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  <Icon />
                </span>

                <span className="relative z-10">
                  {cat.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <motion.div
          layout
          className="
            grid
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:gap-6
          "
        >
          <AnimatePresence mode="popLayout">
            {skillsToShow.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 18,
                        scale: 0.97,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }
                }
                transition={{
                  layout: {
                    type: "spring",
                    stiffness: 320,
                    damping: 30,
                  },
                  opacity: {
                    duration: 0.22,
                  },
                  y: {
                    duration: 0.35,
                    delay: Math.min(index * 0.025, 0.15),
                  },
                  scale: {
                    duration: 0.35,
                  },
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                      }
                }
                className="
                  group
                  relative
                  transform-gpu
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#111C30]/72
                  p-5
                  backdrop-blur-sm
                  transition-colors
                  duration-300
                  hover:border-cyan-400/20
                "
              >
                {/* Top gradient accent */}

                <div
                  className="
                    absolute
                    inset-x-8
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-cyan-400/60
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Hover glow - no continuous animation */}

                <div
                  className=" pointer-events-none absolute -right-12 -top-12 h-28  w-28 rounded-full bg-cyan-400/6 opacity-0 blur-3xl transition-opacity  duration-300  group-hover:opacity-100"
                />

                {/* Category */}

                <div className="mb-5 flex items-center justify-between">
                  <span
                    className=" rounded-md border  border-white/5 bg-white/2.5 px-2.5  py-1  text-[10px] font-bold  uppercase  tracking-[0.14em] text-slate-500"
                  >
                    {skill.category}
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      text-slate-500
                    "
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.08,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                  }}
                  className=" mx-auto mb-4 flex  h-[74px]  w-[74px] items-center  justify-center  rounded-2xl  border border-white/5 bg-brand-bg/65"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-12
                      w-12
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </motion.div>

                {/* Name */}

                <h3
                  className="
                    text-center
                    text-lg
                    font-bold
                    text-slate-100
                  "
                >
                  {skill.name}
                </h3>

                {/* Level */}

                <p
                  className="
                    mt-1
                    text-center
                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  Proficiency
                </p>

                {/* Progress */}

                <div
                  className=" mt-5 h-1.5 overflow-hidden rounded-full bg-white/6"
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: Math.min(index * 0.03, 0.18),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-linear-to-r
                      from-purple-500
                      via-cyan-400
                      to-emerald-400
                    "
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.15,
          }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -3,
                  }
            }
            className="
              glass-panel
              inline-flex
              max-w-full
              items-center
              gap-3
              rounded-2xl
              px-6
              py-4
              sm:px-8
            "
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaRocket className="text-emerald-400" />
            </motion.span>

            <span className="text-sm font-medium text-slate-300 sm:text-base">
              Always learning & improving with modern technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;