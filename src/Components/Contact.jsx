import React, { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMessageSquare, FiArrowUpRight } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setIsSubmitted(true);
          e.target.reset();
          setIsSending(false);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        () => {
          toast.error("Failed to send message. Try again!");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      <Toaster position="top-center" />

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">
              Work Together
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind? Feel free to reach out — I’m always open to
            discussing new ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* form */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl shadow-xl overflow-hidden">
            {/* form header */}
            <div className="bg-linear-to-r from-emerald-500/10 to-blue-500/10 p-6 border-b border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                  <FaPaperPlane className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-slate-400 text-sm">
                    I’ll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={sendEmail} className="p-6 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-slate-300 mb-2">
                  <FaUser className="text-emerald-400" /> Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-slate-300 mb-2">
                  <FaEnvelope className="text-emerald-400" /> Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-slate-300 mb-2">
                  <FiMessageSquare className="text-emerald-400" /> Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all ${
                  isSubmitted
                    ? "bg-emerald-600"
                    : "bg-linear-to-r from-emerald-500 to-blue-500 hover:scale-[1.02]"
                }`}
              >
                {isSending ? (
                  "Sending..."
                ) : isSubmitted ? (
                  <>
                    <FaCheckCircle /> Sent Successfully
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message <FiArrowUpRight />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-3 hover:border-emerald-400">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <p className="text-slate-300 font-medium">
                  <span className="text-emerald-400 ">
                    Available for:
                  </span>{" "}
                  Internship / Job
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-3 hover:border-emerald-400">
                <FaCalendarAlt className="text-emerald-400" />
                <p className="text-slate-300 ">
                  Responds within{" "}
                  <span className="text-white font-medium">24 hours</span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <h4 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h4>
            <div className="grid sm:grid-cols-2 gap-4 ">
              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "bijoymarma55@gmail.com",
                },
                {
                  icon: <FaPhone />,
                  label: "Phone",
                  value: "+880 1818-470577",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Chattogram, Bangladesh",
                },
                { icon: <FaGlobe />, label: "Timezone", value: "GMT +6" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex gap-4 hover:border-emerald-400"
                >
                  <div className="text-emerald-400 text-xl">{item.icon}</div>
                  <div>
                    <p className="text-slate-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connect With Me */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    name: "GitHub",
                    link: "https://github.com/Hlamong55",
                  },
                  {
                    icon: <FaLinkedin />,
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/hlamong-sing/",
                  },
                  {
                    icon: <FaFacebook />,
                    name: "Facebook",
                    link: "https://www.facebook.com/hla.mong.323851/",
                  },
                  {
                    icon: <FaWhatsapp />,
                    name: "WhatsApp",
                    link: "https://wa.me/8801955506106",
                  },
                  {
                    icon: <SiGmail />,
                    name: "Gmail",
                    link: "mailto:bijoymarma55@gmail.com",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-medium">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
