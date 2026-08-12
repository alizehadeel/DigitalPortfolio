"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Premium Easter Egg Confetti Trigger
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Unable to send message. Please verify network connectivity.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-1/2 right-10 w-96 h-96 glow-spot-indigo rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 glow-spot-cyan rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            Inquiries
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Get In Touch
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-gray-800/80">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 text-sm text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 uppercase font-semibold">Email</h4>
                    <a href="mailto:alizehadeel12@gmail.com" className="hover:text-indigo-300 transition-colors">
                      alizehadeel12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 uppercase font-semibold">Phone</h4>
                    <a href="tel:+923174401196" className="hover:text-cyan-300 transition-colors">
                      +92 317 4401196
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 uppercase font-semibold">Location</h4>
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Linkage */}
              <div className="border-t border-gray-800/80 pt-6 mt-8">
                <h4 className="text-xs text-gray-400 uppercase font-semibold mb-4">Connect Elsewhere</h4>
                <div className="flex gap-4">
                  <a
                    href="http://github.com/alizehadeel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/40 p-3 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="http://www.linkedin.com/in/alizeh-adeel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/40 p-3 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Content Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-gray-800/80">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration Opportunity"
                    className="w-full bg-slate-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hey Alizeh, I would love to connect about..."
                    className="w-full bg-slate-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Status Banners */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl p-4 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Message Sent!</p>
                      <p className="text-xs opacity-80">Thank you for reaching out. I will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl p-4 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Submission Failure</p>
                      <p className="text-xs opacity-80">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/10 hover:shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
