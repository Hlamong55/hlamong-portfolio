import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "framer-motion";

import { FaBrain, FaCode, FaFilm, FaFootballBall, FaGraduationCap, FaHeart, FaLaptopCode, FaPlane, FaRocket, FaStar } from "react-icons/fa";

import { MdAutoAwesome, MdWorkOutline } from "react-icons/md";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   TIMELINE DATA
========================================================= */

const timelineItems = [
  {
    year: "2022",
    title: "University Journey Begins",
    description:
      "Started my BSc in Computer Science & Engineering at Port City International University.",
    icon: FaGraduationCap,
    accent: "#8B5CF6",
  },

  {
    year: "2025",
    title: "Programming Journey Begins",
    description:
      "Started building a strong foundation with HTML, CSS, JavaScript, programming fundamentals, and problem-solving.",
    icon: FaCode,
    accent: "#00C8FF",
  },

  {
    year: "Progress",
    title: "Frontend & UI Development",
    description:
      "Moved into React, Tailwind CSS, responsive interfaces, reusable components, and smooth UI animation.",
    icon: FaLaptopCode,
    accent: "#00E6A8",
  },

  {
    year: "Growth",
    title: "Full-Stack Development",
    description:
      "Expanded into backend APIs, databases, authentication, full-stack applications, Next.js, TypeScript, FastAPI, and modern development workflows.",
    icon: FaRocket,
    accent: "#00C8FF",
  },

  {
    year: "2026",
    title: "Career Goal",
    description:
      "Focused on securing an Internship or Junior Developer opportunity where I can contribute, learn, and grow as a professional developer.",
    icon: MdWorkOutline,
    accent: "#8B5CF6",
  },
];

/* =========================================================
   INTERESTS
========================================================= */

const interests = [
  {
    label: "Travelling",
    icon: FaPlane,
  },
  {
    label: "Football",
    icon: FaFootballBall,
  },
  {
    label: "Movies",
    icon: FaFilm,
  },
  {
    label: "Learning",
    icon: FaBrain,
  },
  {
    label: "Exploring",
    icon: MdAutoAwesome,
  },
];

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = () => {
  const sectionRef = useRef(null);

  /* =======================================================
     TIMELINE SCROLL PROGRESS
  ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 70%"],
  });

  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className=" relative  overflow-hidden bg-[#0D1729] py-24 text-slate-300 sm:py-28"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className=" pointer-events-none  absolute inset-0  bg-linear-to-br from-[#0D1729]  via-[#101B30] to-brand-bg"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute -left-48  top-1/4 h-[430px]  w-[430px]  rounded-full bg-purple-500/[0.07] blur-[120px]"
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 0.92, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[125px]
        "
      />

      {/* Green Glow */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" pointer-events-none absolute left-[35%] top-[40%]  h-[350px] w-[350px] rounded-full bg-emerald-400/8 blur-[120px]"
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ===================================================
          MAIN WRAPPER
      =================================================== */}

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* Title */}

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
            About{" "}

            <span className="brand-gradient-text">
              Me
            </span>
          </motion.h2>

          {/* Short intro */}

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
            A little about my journey, development mindset, and
            the direction I am building my career toward.
          </motion.p>
        </div>

        {/* =================================================
            MAIN CONTENT GRID
        ================================================= */}

        <div
          className="
            grid
            items-start
            gap-14
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            variants={fadeLeft}
            className="space-y-8"
          >
            {/* Professional Intro */}

            <div className="space-y-5">
              <p
                className="
                  text-lg
                  leading-8
                  text-slate-300
                "
              >
                Hello! I’m{" "}

                <span className="font-semibold text-white">
                  Hlamong Sing Marma
                </span>
                , a passionate{" "}

                <span className="font-semibold text-cyan-300">
                  Full-Stack Developer
                </span>{" "}

                with a strong interest in building modern,
                responsive, scalable, and user-focused web
                applications.
              </p>

              <p
                className="
                  leading-8
                  text-slate-400
                "
              >
                My focused programming journey began in{" "}

                <span className="font-semibold text-emerald-400">
                  2025
                </span>
                . What started as curiosity quickly developed into
                a genuine passion for understanding how digital
                products work — from polished frontend interfaces
                to backend logic, APIs, authentication, and
                databases.
              </p>

              <p
                className="
                  leading-8
                  text-slate-400
                "
              >
                I enjoy transforming ideas into{" "}

                <span className="font-medium text-white">
                  clean, maintainable, and practical solutions
                </span>

                . My goal is not only to make applications look
                good, but also to make them structured, efficient,
                reliable, and enjoyable to use.
              </p>
            </div>

            {/* =================================================
                HIGHLIGHT QUOTE
            ================================================= */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="
                brand-border
                relative
                overflow-hidden
                rounded-2xl
                bg-[#111C30]/80
                p-6
                backdrop-blur-sm
              "
            >
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-28
                  w-28
                  rounded-full
                  bg-cyan-400/8
                  blur-3xl
                "
              />

              <div className="relative flex gap-4">
                <div
                  className=" flex  h-11  w-11  shrink-0  items-center  justify-center  rounded-xl  bg-linear-to-br  from-purple-500/15  via-cyan-400/15  to-emerald-400/15">
                  <FaBrain className="text-xl text-cyan-300" />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                    "
                  >
                    Development Mindset
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      font-medium
                      leading-7
                      text-slate-200
                    "
                  >
                    “Turning ideas into clean, scalable and
                    user-focused digital experiences.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FOCUS CARDS
            ================================================= */}

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Card 1 */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                }}
                className=" brand-glow-hover group relative overflow-hidden  rounded-2xl border border-white/[0.07]  bg-[#111C30]/75  p-6  backdrop-blur-sm"
              >
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-linear-to-r
                    from-purple-500
                    via-cyan-400
                    to-emerald-400
                    opacity-50
                  "
                />

                <div
                  className=" mb-4  flex  h-11  w-11  items-center  justify-center  rounded-xl  bg-cyan-400/8  text-cyan-300  transition  duration-300  group-hover:scale-110"
                >
                  <FaCode size={20} />
                </div>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  Modern Development
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  Building responsive interfaces, smooth
                  interactions, reusable components, and scalable
                  application architecture.
                </p>
              </motion.div>

              {/* Card 2 */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                }}
                className="
                  brand-glow-hover
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#111C30]/75
                  p-6
                  backdrop-blur-sm
                "
              >
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-linear-to-r
                    from-emerald-400
                    via-cyan-400
                    to-purple-500
                    opacity-50
                  "
                />

                <div
                  className=" mb-4  flex  h-11  w-11  items-center  justify-center  rounded-xl  bg-purple-500/8 text-purple-300  transition  duration-300  group-hover:scale-110"
                >
                  <FaRocket size={20} />
                </div>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  Quality & Problem Solving
                </h3>

                <p
                  className=" mt-3  text-sm  leading-6  text-slate-400"
                >
                  Focused on clean code, performance, debugging,
                  maintainability, and solving practical
                  development challenges.
                </p>
              </motion.div>
            </div>

            {/* =================================================
                INTERESTS
            ================================================= */}

            <div className="pt-2">
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                "
              >
                <FaHeart
                  className="
                    text-pink-400
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                  "
                >
                  Beyond Coding
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;

                  return (
                    <motion.div
                      key={interest.label}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      className=" flex  items-center  gap-2  rounded-lg  border  border-white/6  bg-white/2.5  px-3  py-2  text-sm  text-slate-400  transition-colors  hover:border-cyan-400/20  hover:text-slate-200"
                    >
                      <Icon className="text-cyan-400/80" />

                      {interest.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — TIMELINE
          ================================================= */}

          <motion.div
            variants={fadeRight}
            className="
              relative
              lg:pl-2
            "
          >
            {/* Timeline heading */}

            <div className="mb-8">
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                "
              >
                My Journey
              </span>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Learning, Building & Growing
              </h3>
            </div>

            {/* Timeline */}

            <div className="relative">
              {/* Static Line */}

              <div
                className=" absolute  bottom-3 left-[19px]  top-3  w-1  rounded-full bg-white/[0.07]"
              />

              {/* Animated Progress Line */}

              <motion.div
                style={{
                  scaleY: timelineProgress,
                  transformOrigin: "top",
                }}
                className=" absolute bottom-3 left-[19px]  top-3  w-0.5  rounded-full  bg-linear-to-b  from-purple-500  via-cyan-400 to-emerald-400  shadow-[0_0_15px_rgba(0,200,255,0.25)]"
              />

              <div className="space-y-6">
                {timelineItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={`${item.year}-${item.title}`}
                      initial={{
                        opacity: 0,
                        x: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        relative
                        pl-14
                      "
                    >
                      {/* Dot */}

                      <motion.div
                        whileInView={{
                          scale: [0.7, 1.15, 1],
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.08,
                        }}
                        className=" absolute left-0  top-5  z-10  flex h-10  w-10  items-center  justify-center  rounded-full border  border-white/8  bg-[#0D1729]  shadow-lg"
                        style={{
                          boxShadow: `0 0 20px ${item.accent}22`,
                        }}
                      >
                        <Icon
                          size={16}
                          style={{
                            color: item.accent,
                          }}
                        />
                      </motion.div>

                      {/* Timeline Card */}

                      <motion.div
                        whileHover={{
                          x: 5,
                          y: -2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 20,
                        }}
                        className=" relative  overflow-hidden  rounded-2xl  border  border-white/6  bg-[#111C30]/65  p-5  backdrop-blur-sm  transition-colors  duration-300  group-hover:border-cyan-400/15"
                      >
                        {/* Top accent */}

                        <div
                          className=" absolute inset-x-0 top-0 h-px opacity-50"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                          }}
                        />

                        {/* Year */}

                        <span
                          className=" inline-flex rounded-md bg-white/6 border border-white/10  px-2.5  py-1  text-xs  font-bold  tracking-wider  text-slate-2 00"
                        >
                          {item.year}
                        </span>

                        {/* Title */}

                        <h4
                          className=" mt-3 text-lg font-bold text-white"
                        >
                          {item.title}
                        </h4>

                        {/* Description */}

                        <p
                          className=" mt-2 text-sm  leading-6 text-slate-400"
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
