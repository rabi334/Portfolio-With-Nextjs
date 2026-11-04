"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheck,
  FaCopy,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "rabiraasefa541@gmail.com";
  const phone = "+251983296887";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Open mailto fallback with the filled message
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 border-b-2 border-[#1e2634] bg-[#090c10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 border-b-2 border-[#1e2634] space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66]">
            <span>[ SECTION: 06 ]</span>
            <span>{"//"} CONTACT.EXE &amp; TRANSMISSION_LAYER</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight text-white uppercase">
              INITIALIZE CONNECTION
            </h2>
            <div className="text-xs font-mono text-gray-400">
              RESPONSE TIME: &lt; 24 HOURS
            </div>
          </div>
        </div>

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left Column: Direct Communication Dossier */}
          <div className="lg:col-span-5 space-y-4">
            <div className="brutalist-card p-5 bg-[#0e121a] space-y-5 font-mono">
              <div className="flex items-center justify-between border-b border-[#1e2634] pb-3">
                <span className="text-xs text-[#00ff66] font-bold">
                  {"//"} DIRECT_CHANNELS
                </span>
                <span className="text-[10px] text-gray-400">PORT: 443</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Available for engineering opportunities, technical consulting, and high-impact web development projects. Transmit your message below or connect directly:
              </p>

              {/* Email Block */}
              <div className="p-3 bg-[#090c10] border border-[#1e2634] space-y-2">
                <div className="text-[11px] text-gray-400 flex items-center space-x-1.5">
                  <FaEnvelope className="text-[#00ff66]" />
                  <span>ELECTRONIC_MAIL:</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-xs text-white font-bold hover:text-[#00ff66] truncate transition-colors"
                  >
                    {email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(email, "email")}
                    suppressHydrationWarning
                    className="px-2 py-1 bg-[#161b22] border border-[#1e2634] hover:border-[#00ff66] text-[10px] text-gray-300 hover:text-[#00ff66] flex items-center space-x-1 shrink-0 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <FaCheck className="text-[#00ff66]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-3 bg-[#090c10] border border-[#1e2634] space-y-2">
                <div className="text-[11px] text-gray-400 flex items-center space-x-1.5">
                  <FaPhoneAlt className="text-[#ff6a00]" />
                  <span>DIRECT_LINE / TELEGRAM:</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${phone}`}
                    className="text-xs text-white font-bold hover:text-[#ff6a00] truncate transition-colors"
                  >
                    {phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(phone, "phone")}
                    suppressHydrationWarning
                    className="px-2 py-1 bg-[#161b22] border border-[#1e2634] hover:border-[#ff6a00] text-[10px] text-gray-300 hover:text-[#ff6a00] flex items-center space-x-1 shrink-0 transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <FaCheck className="text-[#ff6a00]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Block */}
              <div className="p-3 bg-[#090c10] border border-[#1e2634] space-y-1">
                <div className="text-[11px] text-gray-400 flex items-center space-x-1.5">
                  <FaMapMarkerAlt className="text-[#00e5ff]" />
                  <span>BASE_LOCATION:</span>
                </div>
                <div className="text-xs text-white font-bold">
                  Addis Ababa, Ethiopia (UTC+3)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div className="lg:col-span-7">
            <div className="brutalist-card bg-[#0e121a] overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="px-3.5 py-2.5 bg-[#161b22] border-b-2 border-[#1e2634] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  <span className="font-bold text-gray-300 ml-2">
                    transmit_payload.sh
                  </span>
                </div>
                <span className="text-[10px] text-[#00ff66]">BUFFER_ACTIVE</span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 font-mono">
                {isSubmitted ? (
                  <div className="p-6 bg-[#090c10] border-2 border-[#00ff66] text-center space-y-3">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#00ff66]/20 border border-[#00ff66] flex items-center justify-center text-[#00ff66]">
                      <FaCheck size={18} />
                    </div>
                    <div className="text-sm font-bold text-white uppercase">
                      TRANSMISSION EXECUTED SUCCESSFULLY
                    </div>
                    <p className="text-xs text-gray-400">
                      Opening your email client to dispatch the message directly to rabiraasefa541@gmail.com.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="neo-btn-green px-4 py-2 text-xs"
                    >
                      SEND_ANOTHER_TRANSMISSION
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 flex items-center space-x-1">
                          <span className="text-[#00ff66]">$</span>
                          <span>IDENTIFIER / YOUR_NAME:</span>
                        </label>
                        <input
                          type="text"
                          required
                          suppressHydrationWarning
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Johnson"
                          className="w-full bg-[#090c10] border border-[#1e2634] focus:border-[#00ff66] focus:outline-none px-3 py-2 text-xs text-white"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 flex items-center space-x-1">
                          <span className="text-[#00ff66]">$</span>
                          <span>RETURN_ADDRESS / EMAIL:</span>
                        </label>
                        <input
                          type="email"
                          required
                          suppressHydrationWarning
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="alex@company.com"
                          className="w-full bg-[#090c10] border border-[#1e2634] focus:border-[#00ff66] focus:outline-none px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 flex items-center space-x-1">
                        <span className="text-[#00ff66]">$</span>
                        <span>TRANSMISSION_SUBJECT:</span>
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Full-Stack Project Collaboration / Job Offer"
                        className="w-full bg-[#090c10] border border-[#1e2634] focus:border-[#00ff66] focus:outline-none px-3 py-2 text-xs text-white"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 flex items-center space-x-1">
                        <span className="text-[#00ff66]">$</span>
                        <span>PAYLOAD / MESSAGE_BODY:</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        suppressHydrationWarning
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Detail your requirements, project timelines, or role scope..."
                        className="w-full bg-[#090c10] border border-[#1e2634] focus:border-[#00ff66] focus:outline-none p-3 text-xs text-white resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      suppressHydrationWarning
                      className="w-full neo-btn-green py-3 text-xs tracking-wider flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING_PAYLOAD...</span>
                      ) : (
                        <>
                          <FaPaperPlane size={11} />
                          <span>EXECUTE_TRANSMISSION [ENTER ↵]</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

