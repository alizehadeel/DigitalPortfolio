"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-spot-indigo rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-spot-cyan rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Available for Internships & Part-time Work
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-4"
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Alizeh Adeel</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-heading font-semibold text-gray-300 mb-6"
            >
              Machine Learning & Generative AI Engineer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Designing and implementing end-to-end ML/DL pipelines and GenAI systems, with proven expertise in RAG patterns, LangGraph state management, and multi-agent orchestration.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                View Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-200 font-semibold hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a
                href="http://github.com/alizehadeel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/alizeh-adeel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alizehadeel12@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/Alizeh_Adeel_Resume.pdf"
                download
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors border-l border-gray-800 pl-5 gap-1.5"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating/pulsing ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse-slow pointer-events-none" />

              {/* Floating inner border frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[3px] animate-float">
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/me.jpeg"
                    alt="Alizeh Adeel"
                    fill
                    priority
                    sizes="(max-w-768px) 256px, 384px"
                    className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
