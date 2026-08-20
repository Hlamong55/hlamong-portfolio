// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";

import {
  FaRocket,
  FaCode,
  FaUserShield,
  FaLightbulb,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

/* =========================================================
   CARD DATA
========================================================= */

const expertiseItems = [
  {
    title: "Real-World Projects",
    description:
      "Built complete full-stack applications with practical features, real business logic, authentication, and database integration.",
    icon: FaRocket,
    accent: "#00E6A8",
    number: "01",
  },
  {
    title: "Clean & Scalable Code",
    description:
      "Focused on readable, maintainable, reusable, and scalable code architecture for modern web applications.",
    icon: FaCode,
    accent: "#00C8FF",
    number: "02",
  },
  {
    title: "Secure Authentication",
    description:
      "Experience with Firebase Auth, JWT, protected routes, role-based access, and secure application workflows.",
    icon: FaUserShield,
    accent: "#8B5CF6",
    number: "03",
  },
  {
    title: "Problem Solver Mindset",
    description:
      "I break complex requirements into simple, practical, and effective technical solutions.",
    icon: FaLightbulb,
    accent: "#00E6A8",
    number: "04",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const WhyChoose = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose"
      className="
        relative
        overflow-hidden
        bg-brand-bg
        px-4
        py-20
        sm:px-6
        sm:py-28
      "
    >
      {/* ===================================================
          SAME SPACE BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-br
          from-brand-bg
          via-[#0b1527]
          to-brand-bg
        "
      />

      {/* ===================================================
          STATIC AMBIENT GLOW
          Kept static for performance
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-500/[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-60
          left-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-emerald-400/5.5
          blur-[125px]
        "
      />

      {/* ===================================================
          SUBTLE GRID
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
          SPACE PARTICLES
          Lightweight opacity / transform animations
      =================================================== */}

      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -18, 0],
                opacity: [0.2, 0.9, 0.2],
                scale: [0.8, 1.2, 0.8],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[16%]
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
                y: [0, 22, 0],
                opacity: [0.2, 0.85, 0.2],
                scale: [0.75, 1.2, 0.75],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="
          pointer-events-none
          absolute
          right-[9%]
          top-[13%]
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
                y: [0, -16, 0],
                opacity: [0.15, 0.8, 0.15],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          left-[20%]
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
                opacity: [0.08, 0.65, 0.08],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[48%]
          top-[12%]
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
                opacity: [0.08, 0.55, 0.08],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[30%]
          bottom-[9%]
          h-[3px]
          w-[3px]
          rounded-full
          bg-white
          shadow-[0_0_7px_white]
        "
      />

      {/* ===================================================
          DECORATIVE ORBIT
      =================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[25%]
          hidden
          h-52
          w-52
          rounded-full
          border
          border-cyan-400/6
          lg:block
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-[-3px]
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-400
            shadow-[0_0_10px_#00C8FF]
          "
        />
      </motion.div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
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
                tracking-[0.22em]
                text-slate-300
                sm:text-sm
              "
            >
              Why Choose Me
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
            Why Choose{" "}

            <span className="brand-gradient-text">
              My Expertise
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
            A combination of practical development experience, clean coding
            practices, secure application design, and a strong problem-solving
            mindset.
          </motion.p>
        </motion.div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 0,
                        y: 34,
                        scale: 0.97,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                      }
                }
                className="
                  group
                  relative
                  transform-gpu
                  rounded-2xl
                "
              >
                {/* =================================================
                    GRADIENT BORDER
                ================================================= */}

                <div
                  className="
                    absolute
                    -inset-px
                    rounded-2xl
                    bg-linear-to-br
                    from-purple-500
                    via-cyan-400
                    to-emerald-400
                    opacity-45
                    transition-opacity
                    duration-300
                    group-hover:opacity-90
                  "
                />

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    rounded-3xl
                    bg-linear-to-br
                    from-purple-500/10
                    via-cyan-400/8
                    to-emerald-400/8
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD BODY
                ================================================= */}

                <div
                  className="
                    relative
                    h-full
                    min-h-[280px]
                    overflow-hidden
                    rounded-2xl
                    bg-[#111C30]
                    p-6
                    sm:p-7
                  "
                >
                  {/* Top shine */}

                  <div
                    className="
                      absolute
                      inset-x-8
                      top-0
                      h-px
                      bg-linear-to-r
                      from-transparent
                      via-white/50
                      to-transparent
                      opacity-30
                    "
                  />

                  {/* Hover radial glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      h-36
                      w-36
                      rounded-full
                      bg-cyan-400/[0.07]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Card number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-4
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-slate-500
                    "
                  >
                    {item.number}
                  </span>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, -3, 0],
                          }
                    }
                    transition={{
                      duration: 3 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      mb-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/5
                      bg-brand-bg/80
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        opacity-15
                      "
                      style={{
                        background: item.accent,
                      }}
                    />

                    <Icon
                      size={22}
                      className="relative"
                      style={{
                        color: item.accent,
                      }}
                    />
                  </motion.div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-100
                    "
                  >
                    {item.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    {item.description}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      rounded-full
                      bg-linear-to-r
                      from-purple-500
                      via-cyan-400
                      to-emerald-400
                      transition-all
                      duration-500
                      ease-out
                      group-hover:w-full
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

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
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-14
            flex
            justify-center
          "
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
              flex
              items-center
              gap-3
              rounded-2xl
              px-5
              py-3.5
              text-sm
              text-slate-400
              sm:px-7
            "
          >
            <FaRocket className="text-emerald-400" />

            <span>
              Building with purpose, learning continuously, and improving with
              every project.
            </span>

            <FaArrowRight className="hidden text-cyan-400 sm:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;