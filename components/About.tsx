"use client";

import { motion, Variants } from "framer-motion";
import { Award, BrainCircuit, GraduationCap, Server } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const differentiators = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      title: "Agentic Workflows",
      desc: "Designing multi-agent LLM systems with autonomous reasoning, tool invocation, and state management using LangGraph.",
    },
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: "Hybrid RAG Systems",
      desc: "Building highly accurate retrieval pipelines integrating BM25, semantic vector searches, and rerankers.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "MLOps Pipelines",
      desc: "Developing end-to-end model workflows on AWS, incorporating DVC, MLflow, and YOLO models.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-1/2 right-0 w-80 h-80 glow-spot-fuchsia rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Driven by AI Innovation
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              I am a passionate computer science student and aspiring Machine Learning Engineer. I specialize in developing end-to-end ML/DL pipelines, including advanced object detection (YOLOv8) models and modern Generative AI systems powered by **Retrieval-Augmented Generation (RAG)** and **LangGraph agentic architectures**.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              With practical experience as an AI/ML Intern at **Devsinc**, I have worked across the entire machine learning life cycle, from exploratory data analysis and custom deep learning network design to building production-ready autonomous agentic flows.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              My academic foundation at **FAST NUCES Lahore** combined with certifications in AWS Cloud Foundations and Agentic AI Workshops enables me to design, build, and deploy robust, scalable systems that blend state-of-the-art AI research with practical application.
            </motion.p>

            {/* Credentials Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-medium uppercase">Education</h4>
                  <p className="text-sm font-semibold text-white">BS Computer Science</p>
                  <p className="text-xs text-gray-400">FAST NUCES, June 2027</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20 text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-medium uppercase">Academic Standing</h4>
                  <p className="text-sm font-semibold text-white">CGPA: 3.63 / 4.00</p>
                  <p className="text-xs text-gray-400">FAST NUCES Lahore</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Core Competencies Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-heading font-semibold text-white mb-4 lg:mt-2">
              Core Specializations
            </h3>
            
            <div className="space-y-4">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-5 rounded-xl flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">{diff.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{diff.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{diff.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
