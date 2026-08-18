import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaArrowDown,
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaStar,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdVerified,
  MdWork,
} from "react-icons/md";

import { Link as ScrollLink } from "react-scroll";

import resume from "../assets/Hlamong_Full-Stack_Resume.pdf";
import img from "../assets/Logo.jpeg";

/* =========================================================
   TYPEWRITER ROLES
========================================================= */

const roles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Frontend Focused Engineer",
  "React & Next.js Developer",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 55,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =======================================================
     TYPEWRITER
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 80);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, isDeleting ? 350 : 1500);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  /* =======================================================
     RESUME DOWNLOAD
  ======================================================= */

  const handleResumeDownload = () => {
    const link = document.createElement("a");

    link.href = resume;
    link.download = "Hlamong_Sing_Marma_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-brand-bg
        pt-28
        lg:pt-24
      "
    >
      {/* ===================================================
          BACKGROUND BASE
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
          ANIMATED AMBIENT GLOW - PURPLE
      =================================================== */}

      <motion.div
        animate={{
          x: [0, 70, 20, 0],
          y: [0, 30, 80, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-[480px]
          w-[480px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      {/* ===================================================
          ANIMATED AMBIENT GLOW - CYAN
      =================================================== */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 20, 0],
          scale: [1, 0.9, 1.08, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[130px]
        "
      />

      {/* ===================================================
          ANIMATED AMBIENT GLOW - GREEN
      =================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[35%]
          h-[430px]
          w-[430px]
          rounded-full
          bg-emerald-400/8
          blur-[120px]
        "
      />

      {/* ===================================================
          SUBTLE GRID BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
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
          TOP RADIAL FADE
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,17,32,0.15)_45%,#081120_100%)]
        "
      />

      {/* ===================================================
          FLOATING DECORATIVE PARTICLES
      =================================================== */}

      <motion.span
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[8%]
          top-[30%]
          h-2
          w-2
          rounded-full
          bg-purple-400
          shadow-[0_0_18px_#8B5CF6]
        "
      />

      <motion.span
        animate={{
          y: [0, 30, 0],
          x: [0, 12, 0],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="
          absolute
          right-[12%]
          top-[25%]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_18px_#00C8FF]
        "
      />

      <motion.span
        animate={{
          y: [0, -20, 0],
          x: [0, -12, 0],
          opacity: [0.2, 0.75, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1,
        }}
        className="
          absolute
          bottom-[18%]
          left-[44%]
          h-2
          w-2
          rounded-full
          bg-emerald-400
          shadow-[0_0_18px_#00E6A8]
        "
      />

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-6rem)]
          max-w-7xl
          items-center
          gap-16
          px-6
          pb-16
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          {/* =================================================
              INTRO BADGE
          ================================================= */}

          <motion.div
            variants={fadeLeft}
            className="
              glass-panel
              inline-flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-2.5
            "
          >
            <span className="relative flex h-3 w-3">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            <span className="font-semibold tracking-wide text-slate-200">
               Hi, I am 👋
            </span>
          </motion.div>

          {/* =================================================
              NAME
          ================================================= */}

          <motion.h1
            variants={fadeUp}
            className="
              text-5xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              sm:text-6xl
              xl:text-7xl
            "
          >
            <span className="text-white">
              Hlamong Sing
            </span>

            <br />

            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                bg-linear-to-r
                from-purple-500
                via-cyan-400
                to-emerald-400
                bg-sizw-[200%_auto]
                bg-clip-text
                text-transparent
              "
            >
              Marma
            </motion.span>
          </motion.h1>

          {/* =================================================
              TYPEWRITER
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <motion.div
              animate={{
                width: ["45px", "72px", "45px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1
                rounded-full
                bg-linear-to-r
                from-purple-500
                via-cyan-400
                to-emerald-400
              "
            />

            <h2
              className="
                min-h-10
                text-xl
                font-semibold
                text-slate-300
                sm:text-2xl
                xl:text-3xl
              "
            >
              {text}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="
                  ml-1
                  inline-block
                  h-7
                  w-0.5
                  translate-y-1
                  bg-cyan-400
                "
              />
            </h2>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={fadeUp}
            className="
              max-w-xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Passionate{" "}

            <span className="font-semibold text-white">
              Full-Stack Developer
            </span>{" "}

            focused on building modern, scalable, responsive, and
            user-friendly web applications.

            I enjoy transforming ideas into real-world products using{" "}

            <span className="font-medium text-cyan-300">
              React, Next.js, modern backend technologies
            </span>{" "}

            and clean development practices.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              flex
              flex-wrap
              gap-4
              pt-2
            "
          >
            <ScrollLink
              to="projects"
              smooth
              offset={-85}
              duration={600}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="
                  brand-button
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-7
                  py-4
                  font-extrabold
                "
              >
                <MdWork />

                <span>
                  View Projects
                </span>

                <motion.span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </ScrollLink>

            <motion.button
              variants={fadeUp}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleResumeDownload}
              className="
                group
                relative
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                border
                border-slate-600
                bg-white/2
                px-7
                py-4
                font-bold
                text-slate-200
                transition
                duration-300
                hover:border-cyan-400/60
                hover:text-white
                hover:shadow-[0_0_30px_rgba(0,200,255,0.12)]
              "
            >
              <motion.span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-linear-to-r
                  from-transparent
                  via-white/6
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <FaFileDownload />

              <span className="relative">
                Download Resume
              </span>
            </motion.button>
          </motion.div>

          {/* =================================================
              SOCIALS + LOCATION
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              flex
              flex-wrap
              items-center
              gap-6
              pt-2
            "
          >
            <div className="flex gap-3">
              {/* GitHub */}

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                href="https://github.com/Hlamong55"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  social-icon-button
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-slate-800/70
                "
              >
                <FaGithub className="text-xl text-white" />
              </motion.a>

              {/* LinkedIn */}

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                href="https://www.linkedin.com/in/hlamong-sing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  social-icon-button
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-slate-800/70
                "
              >
                <FaLinkedin className="text-xl text-blue-400" />
              </motion.a>

              {/* Email */}

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                href="mailto:bijoymarma55@gmail.com"
                aria-label="Email"
                className="
                  social-icon-button
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-slate-800/70
                "
              >
                <MdEmail className="text-xl text-white" />
              </motion.a>
            </div>

            {/* Location */}

            <motion.div
              whileHover={{
                x: 3,
              }}
              className="
                flex
                items-center
                gap-2
                text-slate-300
              "
            >
              <MdLocationOn className="text-xl text-emerald-400" />

              <span>
                Chattogram, Bangladesh
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
          "
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              h-[390px]
              w-[490px]
              rounded-full
              bg-linear-to-br
              from-purple-500/20
              via-cyan-400/20
              to-emerald-400/20
              blur-[90px]
            "
          />

          {/* =================================================
              ORBIT ELEMENTS
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              h-[530px]
              w-[530px]
              rounded-full
              border
              border-cyan-400/10
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[-5px]
                h-3
                w-3
                rounded-full
                bg-cyan-400
                shadow-[0_0_16px_#00C8FF]
              "
            />

            <span
              className="
                absolute
                bottom-[15%]
                right-[3%]
                h-2.5
                w-2.5
                rounded-full
                bg-purple-400
                shadow-[0_0_16px_#8B5CF6]
              "
            />
          </motion.div>

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            className="
              group
              relative
              z-10
              w-full
              max-w-sm
              rounded-3xl
            "
          >
            {/* Animated border */}

            <div
              className="
                absolute
                -inset-px
                rounded-3xl
                bg-linear-to-br
                from-purple-500
                via-cyan-400
                to-emerald-400
                opacity-80
                blur-[0.4px]
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                -inset-3
                rounded-3xl
                bg-linear-to-br
                from-purple-500/20
                via-cyan-400/15
                to-emerald-400/20
                opacity-50
                blur-2xl
                transition
                duration-500
                group-hover:opacity-90
              "
            />

            {/* Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/5
                bg-brand-section/95
                p-4
                shadow-2xl
                backdrop-blur-xl
              "
            >
              {/* Moving shine */}

              <motion.div
                animate={{
                  x: ["-150%", "180%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  top-0
                  h-full
                  w-24
                  rotate-12
                  bg-linear-to-r
                  from-transparent
                  via-white/5
                  to-transparent
                  blur-md
                "
              />

              {/* Top controls */}

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.3,
                    }}
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.6,
                    }}
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-purple-400
                    "
                  />
                </div>

                {/* Verified */}

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  <MdVerified
                    size={19}
                    className="text-emerald-400"
                  />

                  Verified
                </motion.div>
              </div>

              {/* =================================================
                  PROFILE IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  rounded-2xl
                  p-[3px]
                "
              >
                {/* Animated gradient border */}

                <motion.div
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-linear-to-r
                    from-purple-500
                    via-cyan-400
                    to-emerald-400
                    bg-size-[200%_auto]
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[14px]
                    bg-brand-bg
                  "
                >
                  <img
                    src={img}
                    alt="Hlamong Sing Marma"
                    className="
                      aspect-4/5
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-brand-bg/15
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  PROFILE BADGES
              ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  justify-center
                  gap-3
                "
              >
                <motion.span
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white
                    bg-slate-800/80
                    px-4
                    py-1.5
                    text-sm
                    font-semibold
                    text-emerald-400
                  "
                >
                  <FaStar />

                  Full Stack
                </motion.span>

                <motion.span
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white
                    bg-slate-800/80
                    px-4
                    py-1.5
                    text-sm
                    font-semibold
                    text-cyan-400
                  "
                >
                  <FaRocket />

                  1+ Year
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ===================================================
          SCROLL DOWN INDICATOR
      =================================================== */}

      <ScrollLink
        to="about"
        smooth
        offset={-80}
        duration={600}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          cursor-pointer
          lg:block
        "
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-2
            text-slate-500
            transition
            hover:text-cyan-300
          "
        >
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll
          </span>

          <FaArrowDown />
        </motion.div>
      </ScrollLink>
    </section>
  );
};

export default Hero;