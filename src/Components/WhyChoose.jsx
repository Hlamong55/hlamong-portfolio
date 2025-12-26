import {
  FaRocket,
  FaCode,
  FaUserShield,
  FaLightbulb,
} from "react-icons/fa";

const WhyChoose = () => {
  const items = [
    {
      title: "Real-World Projects",
      desc: "Built complete full-stack application real business logic.",
      icon: <FaRocket />,
      accent: "emerald",
    },
    {
      title: "Clean & Scalable Code",
      desc: "Focused on readable, maintainable, and scalable code architecture.",
      icon: <FaCode />,
      accent: "cyan",
    },
    {
      title: "Secure Authentication",
      desc: "Experience with Firebase Auth, JWT, role-based access.",
      icon: <FaUserShield />,
      accent: "blue",
    },
    {
      title: "Problem Solver Mindset",
      desc: "Break complex requirements into simple, effective technical solutions.",
      icon: <FaLightbulb />,
      accent: "green",
    },
  ];

  return (
    <section className="relative bg-slate-900 py-20 px-4 overflow-hidden">
      {/* glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              My Expertise
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            A combination of practical experience, clean development practices,
            and strong problem-solving skills.
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-800/80 border border-slate-700 rounded-2xl p-8
                         hover:-translate-y-2 hover:border-emerald-400/50
                         transition-all duration-300"
            >
              <div
                className={`w-14 h-14 mb-6 rounded-xl bg-slate-900
                flex items-center justify-center text-2xl
                text-${item.accent}-400 group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
