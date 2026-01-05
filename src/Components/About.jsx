import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaStar,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative  bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* BADGE */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-widest">
              SKILLS
            </span>
            <FaStar className="text-emerald-400" />
          </motion.div>
        </div>

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
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              , a passionate{" "}
              <span className="text-white font-semibold">
                MERN Stack Developer
              </span>{" "}
              who officially started my programming journey in{" "}
              <span className="text-emerald-400 font-semibold">2025</span>.
            </p>

            <p className="leading-relaxed">
              What began as curiosity quickly turned into a strong dedication to
              building modern, responsive, and scalable web applications. I
              enjoy understanding how things work behind the scenes and
              transforming ideas into clean, user-friendly digital experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {/* Card 1 */}
              <div className="animated-border">
                <div className="animated-border-inner">
                  <p>
                    Building modern, responsive UI smooth animations, and scalable backend APIs.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="animated-border">
                <div className="animated-border-inner">
                  <p>
                    Passionate about <span>clean code</span>, performance
                    optimization, and strong <span>problem-solving</span>{" "}
                    skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center text-sm text-gray-300 pt-2">
              <FaHeart className="text-pink-500" size={18} />
              Hobby — Travelling · Football · Movies · Curious · Fast learner ·
              Team-friendly
            </div>
          </motion.div>

          {/* TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-4 -top-2 h-full w-1 bg-emerald-400/20" />

            <div className="space-y-10 pl-12">
              {/* UNIVERSITY */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  2022 — Starting University Life
                  <FaGraduationCap size={20} />
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
                  MERN Stack & Exploring Next.Js
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Backend APIs, MongoDB, full-stack projects & real-world apps.{" "}
                  <br />
                  Exploring feature of Next.Js and TypeScript
                </p>
              </div>

              {/* BACKEND */}
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-white font-semibold text-lg">
                  2026 — Career Goal 🎯
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Actively looking for Internship or Junior Developer Jobs
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
