import { motion } from "framer-motion";
import { FaCode, FaRocket, FaHeart, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0b1220] text-gray-300 py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide bg-[#111a2e] text-emerald-400 border border-emerald-400/30">
            ABOUT
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
        >
          About <span className="text-emerald-400">Me</span>
        </motion.h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Hello! I’m{" "}
              <span className="text-white font-semibold">
                Hla Mong Sing Marma
              </span>
              , a passionate MERN Stack Developer who officially started my
              programming journey in{" "}
              <span className="text-emerald-400 font-semibold">2025</span>.
            </p>

            <p className="leading-relaxed">
              What began as curiosity quickly turned into a strong dedication to
              building modern, responsive, and scalable web applications. I
              enjoy understanding how things work behind the scenes and
              transforming ideas into clean, user-friendly digital experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start bg-[#111a2e] p-4 rounded-xl">
                <FaCode className="text-emerald-400 text-xl mt-1" />
                <p>
                  Frontend UI, smooth animations, backend APIs, and logical
                  problem solving.
                </p>
              </div>

              <div className="flex gap-3 items-start bg-[#111a2e] p-4 rounded-xl">
                <FaRocket className="text-emerald-400 text-xl mt-1" />
                <p>
                  Actively seeking <span className="text-white">Internship</span>{" "}
                  or <span className="text-white">Junior Developer</span> roles.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center text-sm text-gray-400 pt-2">
              <FaHeart className="text-pink-400" />
              Travelling · Football · Movies · Curious · Fast learner · Team-friendly
            </div>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-emerald-400/30" />

            <div className="space-y-10 pl-12">

              {/* UNIVERSITY */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <FaGraduationCap />
                  2022 — University Life
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Port City International University <br />
                  BSc in Computer Science & Engineering
                </p>
              </div>

              {/* PROGRAMMING START */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg">
                  2025 — Programming Journey Begins
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Started with HTML, CSS, JavaScript and problem-solving basics.
                </p>
              </div>

              {/* FRONTEND */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg">
                  Frontend & UI Animation
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  React, Tailwind CSS, Framer Motion — building interactive UIs.
                </p>
              </div>

              {/* BACKEND */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg">
                  MERN Stack & Career Goal
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Backend APIs, MongoDB, full-stack projects & real-world apps.
                </p>
              </div>
              
              {/* BACKEND */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg">
                    2026 — Career Goal 🎯
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Backend APIs, MongoDB, full-stack projects & real-world apps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
