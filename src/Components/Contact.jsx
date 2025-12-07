import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaLaptopCode,
  FaCalendarAlt
} from "react-icons/fa";
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending delay
    setTimeout(() => {
      // Create mailto link
      const subject = `Message from ${formData.name} - Portfolio Contact`;
      const body = `
Message: ${formData.message}

From: ${formData.name}
Email: ${formData.email}
      `.trim();

      const mailtoLink = `mailto:bijoymarma55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open user's email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      toast.success("Opening your email client... Please send the pre-filled email.");
      
      // Reset form
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactChannels = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "bijoymarma55@gmail.com",
      link: "mailto:bijoymarma55@gmail.com",
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-600",
      btnColor: "hover:bg-blue-50 hover:border-blue-300"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 1818-470577",
      link: "tel:+8801818470577",
      color: "bg-green-50 border-green-100",
      iconColor: "text-green-600",
      btnColor: "hover:bg-green-50 hover:border-green-300"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bangladesh",
      link: "https://maps.google.com",
      color: "bg-purple-50 border-purple-100",
      iconColor: "text-purple-600",
      btnColor: "hover:bg-purple-50 hover:border-purple-300"
    },
    {
      icon: <FaGlobe />,
      title: "Timezone",
      value: "GMT+6 (Bangladesh)",
      link: null,
      color: "bg-cyan-50 border-cyan-100",
      iconColor: "text-cyan-600",
      btnColor: "hover:bg-cyan-50 hover:border-cyan-300"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/Hlamong55",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300",
      iconColor: "text-gray-700"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://linkedin.com",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
      iconColor: "text-blue-600"
    },
    {
      icon: <SiGmail />,
      label: "Gmail",
      link: "mailto:bijoymarma55@gmail.com",
      color: "bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300",
      iconColor: "text-red-600"
    },
    {
      icon: <FiMessageSquare />,
      label: "Message",
      link: "https://wa.me/8801818470577",
      color: "bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden" id="contact">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#374151',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '16px 24px',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-cyan-50 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(180deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">CONTACT ME</span>
            <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-gray-900">Let's </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Work Together
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life with clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div>
            {/* Form Card */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                    <FaPaperPlane className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
                    <p className="text-gray-600 mt-1">I'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <form onSubmit={sendEmail} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-700 font-medium">
                      <FaUser className="text-blue-500" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-700 font-medium">
                      <FaEnvelope className="text-blue-500" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-gray-700 font-medium">
                      <FiMessageSquare className="text-blue-500" />
                      <span>Your Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending || isSubmitted}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group ${
                      isSubmitted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
                    } ${(isSending || isSubmitted) ? 'cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-0.5'}`}
                  >
                    {isSending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Preparing Email...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FaCheckCircle className="text-xl" />
                        <span>Email Ready!</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Open Email Client</span>
                        <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
                
                {/* Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-sm text-blue-700 text-center">
                    <span className="font-semibold">Note:</span> This will open your default email client with a pre-filled message
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="mt-6 flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">Available for:</span>
              </div>
              <span className="text-gray-700 font-medium">Freelance Projects</span>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Channels */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FaLaptopCode className="text-blue-600" />
                <span>Contact Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link || '#'}
                    target={channel.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`group ${!channel.link && 'cursor-default'}`}
                  >
                    <div className={`${channel.color} border rounded-xl p-5 transition-all duration-300 ${channel.btnColor} group-hover:-translate-y-1`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${channel.iconColor} bg-white border border-gray-200 shadow-sm`}>
                          {channel.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-600 mb-1">
                            {channel.title}
                          </div>
                          <div className="text-gray-900 font-medium">
                            {channel.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 ${social.color} border rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <div className={`text-xl ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <span className="text-gray-800 font-medium group-hover:text-gray-900">
                      {social.label}
                    </span>
                    <FiArrowUpRight className="text-gray-500 group-hover:text-gray-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow-sm">
                  <FaRocket className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Start?</h4>
                  <p className="text-gray-600 mb-6">
                    Let's collaborate on your next project. I specialize in creating efficient, scalable web applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:bijoymarma55@gmail.com"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <FaEnvelope />
                      Start Conversation
                    </a>
                    <a
                      href="tel:+8801818470577"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <FaPhone />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-green-200 flex items-center justify-center">
                  <FaCalendarAlt className="text-green-600" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Quick Response Time</h5>
                  <p className="text-gray-600 text-sm mt-1">
                    I typically respond within a few hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg italic mb-4">
              "The best way to predict the future is to create it."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-gray-500 text-sm">— Peter Drucker</span>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;