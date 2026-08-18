import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import {
  FaBars,
  FaCode,
  FaHome,
  FaProjectDiagram,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import { MdEmail, MdWork } from "react-icons/md";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================================================
     NAVIGATION ITEMS
  ========================================================= */

  const navItems = [
    {
      id: "home",
      icon: FaHome,
      label: "Home",
    },
    {
      id: "about",
      icon: FaUser,
      label: "About",
    },
    {
      id: "skills",
      icon: FaCode,
      label: "Skills",
    },
    {
      id: "projects",
      icon: FaProjectDiagram,
      label: "Projects",
    },
    {
      id: "contact",
      icon: MdEmail,
      label: "Contact",
    },
  ];

  /* ======================================================
     SCROLL + ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      /* Navbar compact mode */
      setIsScrolled(window.scrollY > 60);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      /*
        The section becomes active when its top crosses this
        point underneath the fixed navbar.
      */
      const triggerPoint = 140;

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
          Keep the LAST main section that has crossed
          the trigger point.
        */
        if (rect.top <= triggerPoint) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/5 bg-brand-bg/85 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-white/5 bg-brand-bg/95 py-3"
      }`}
    >
      {/* =====================================================
          BOTTOM GRADIENT LINE
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, #00C8FF, #00E6A8, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* =================================================
              LOGO / BRAND
          ================================================= */}

          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 sm:gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="relative shrink-0"
            >
              {/* Logo Glow */}
              <div
                className="absolute -inset-2 rounded-full opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6, #00C8FF, #00E6A8)",
                }}
              />

              <img
                src="/logo.png"
                alt="Hlamong Sing Marma Logo"
                className={`relative rounded-full object-cover transition-all duration-300 ${
                  isScrolled
                    ? "h-11 w-11 sm:h-12 sm:w-12"
                    : "h-12 w-12 sm:h-14 sm:w-14"
                }`}
              />
            </motion.div>

            {/* Name */}
            <div className="min-w-0">
              <h1
                className={`truncate font-extrabold tracking-tight text-white transition-all duration-300 ${
                  isScrolled
                    ? "text-lg sm:text-xl"
                    : "text-xl sm:text-2xl"
                }`}
              >
                Hlamong Sing Marma
              </h1>

              <p className="mt-0.5 text-xs font-medium tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-cyan-300 sm:text-sm">
                Full-Stack Developer
              </p>

              {/* Logo underline */}
              <div className="mt-1.5 h-[3px] w-12 overflow-hidden rounded-full transition-all duration-500 group-hover:w-24">
                <div className="brand-gradient-bg h-full w-full" />
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-4 lg:flex">
            <div className="glass-panel flex items-center gap-1 rounded-2xl p-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                  >
                    <ScrollLink
                      to={item.id}
                      smooth
                      offset={-85}
                      duration={550}
                      className={`group relative flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 transition-all duration-300 xl:px-5 ${
                        isActive
                          ? "bg-white/[0.035] text-white"
                          : "text-slate-400 hover:bg-white/2.5 hover:text-slate-100"
                      }`}
                    >
                      {/* Icon */}
                      <motion.span
                        animate={{
                          scale: isActive ? 1.08 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        }}
                        className={`text-base transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-slate-500 group-hover:text-cyan-300"
                        }`}
                      >
                        <Icon />
                      </motion.span>

                      {/* Label */}
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </ScrollLink>

                    {/* Active sliding gradient line */}
                    {isActive && (
                      <motion.div
                        layoutId="active-navbar-line"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="brand-gradient-bg absolute -bottom-[7px] left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full shadow-[0_0_8px_rgba(0,200,255,0.35)]"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* =================================================
                HIRE ME BUTTON
            ================================================= */}

            <ScrollLink
              to="contact"
              smooth
              offset={-85}
              duration={550}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{
                  y: -2,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="brand-button flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold"
              >
                <MdWork className="text-base" />

                <span>Hire Me</span>

                <span>→</span>
              </motion.button>
            </ScrollLink>
          </div>

          {/* =================================================
              MOBILE TOGGLE
          ================================================= */}

          <motion.button
            whileTap={{
              scale: 0.92,
            }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/4 text-lg text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/[0.07] lg:hidden"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="text-cyan-300"
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-full px-4 pt-3 lg:hidden"
          >
            <div className="glass-panel mx-auto max-w-xl overflow-hidden rounded-2xl p-3 shadow-2xl">
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.045,
                      }}
                    >
                      <ScrollLink
                        to={item.id}
                        smooth
                        offset={-80}
                        duration={500}
                        onClick={closeMobileMenu}
                        className={`relative flex cursor-pointer items-center justify-between overflow-hidden rounded-xl px-4 py-3.5 transition-all ${
                          isActive
                            ? "bg-white/[0.07] text-white"
                            : "text-slate-400 hover:bg-white/4 hover:text-white"
                        }`}
                      >
                        {/* Mobile active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="brand-gradient-bg absolute bottom-0 left-0 top-0 w-[3px]"
                          />
                        )}

                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <span
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-bg"
                            style={{
                              color: isActive
                                ? "#00E6A8"
                                : "#94A3B8",
                            }}
                          >
                            <Icon />
                          </span>

                          {/* Label */}
                          <span className="font-semibold">
                            {item.label}
                          </span>
                        </div>

                        <span
                          className={`transition-all ${
                            isActive
                              ? "translate-x-0 text-cyan-300"
                              : "-translate-x-1 text-slate-600"
                          }`}
                        >
                          →
                        </span>
                      </ScrollLink>
                    </motion.div>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE HIRE ME
              ================================================= */}

              <ScrollLink
                to="contact"
                smooth
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
                className="mt-3 block cursor-pointer"
              >
                <motion.button
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="brand-button flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-extrabold"
                >
                  <MdWork />

                  <span>Hire Me</span>

                  <span>→</span>
                </motion.button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;