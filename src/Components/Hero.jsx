import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdVerified, MdWork } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import resume from "../assets/resumePDF.pdf";
import img from "../assets/Logo.jpeg";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Focused Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* -------- Typewriter (FIXED) -------- */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        100
      );
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        50
      );
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "HlaMong_Marma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT ================= */}
        <div className="space-y-8">
          {/* badge */}
          <div className="inline-flex mt-2 items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className=" font-semibold text-slate-200 tracking-wide">
              👋 Hi, I am
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl xl:text-6xl font-extrabold leading-tight">
            <span className="text-white">
              Hlamong Sing <br />
            </span>
            <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Marma
            </span>
          </h1>

          {/*  Typewriter */}
          <div className="flex items-center gap-4">
            <div className="h-1 w-16 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 min-h-10">
              {text}
              <span className="ml-1 w-o.5 h-7 bg-emerald-400 inline-block animate-pulse"></span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Passionate{" "}
            <span className="text-white font-medium">MERN Stack Developer</span>{" "}
            focused on building clean, responsive, and user-friendly web
            applications. Actively seeking an{" "}
            <span className="text-white font-medium">
              internship opportunity
            </span>{" "}
            to grow and contribute.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <ScrollLink to="projects" smooth offset={-80} duration={600}>
              <button className="flex items-center gap-3 px-7 py-4 rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold hover:scale-105 transition">
                <MdWork />
                View Projects
                <FaArrowRight />
              </button>
            </ScrollLink>

            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-3 px-7 py-4 rounded-xl border border-slate-600 text-slate-200 hover:border-emerald-400 hover:text-white transition"
            >
              <FaFileDownload />
              Download Resume
            </button>
          </div>

          {/* Social + Location */}
          <div className="flex flex-wrap items-center gap-6 mb-5">
            <div className="flex gap-4">
              <a
                href="https://github.com/Hlamong55"
                target="_blank"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                <FaGithub className="text-xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/hlamong-sing/"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                <FaLinkedin className="text-xl text-blue-400" />
              </a>
              <a
                href="mailto:bijoymarma55@gmail.com"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                <MdEmail className="text-xl text-white" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-300 ">
              <MdLocationOn className="text-emerald-400 text-lg" />
              Chattogram, Bangladesh
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex flex-col justify-center items-center">
          <div
            className="
      mb-4 px-5 py-2 rounded-full
      bg-linear-to-r from-emerald-500 to-cyan-500
      text-slate-900 text-sm font-bold
      shadow-lg animate-pulse
    "
          >
            Available for Internship
          </div>

          {/* Profile Card */}
          <div className="relative bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl p-5">
            <div className="absolute top-2.5 right-4 flex items-center gap-1 text-emerald-400 text-sm font-medium">
              <MdVerified size={18}/>
              Verified
            </div>

            {/* Image */}
            <div className="relative w-82 mx-auto rounded-2xl overflow-hidden border-4 border-slate-800 mt-4">
              <img
                src={img}
                alt="Hla Mong Marma"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* Badges */}
            <div className="mt-4 flex justify-center gap-4">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 font-semibold text-sm text-emerald-400">
                <FaStar />
                MERN
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 font-semibold text-sm text-cyan-400">
                <FaRocket />
                1+ Year
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
