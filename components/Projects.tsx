"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, Calendar, Sparkles, MessageSquare, UtensilsCrossed } from "lucide-react";
import { Github } from "./Icons";

export default function Projects() {
  const projects = [
    {
      title: "RAG-Powered Codebase Q&A Assistant",
      duration: "Aug. 2026",
      desc: "Built a hybrid RAG pipeline (BM25 + vector search + cross-encoder reranking) for codebase Q&A over a real GitHub repo, resolving evaluation harness and tokenization bugs.",
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      tech: ["Python", "RAG", "BM25", "Vector Search", "Cross-Encoder", "AST Parsing"],
      metrics: [
        "Improved retrieval recall@5 to 89.58% with AST- and heading-based chunking.",
        "Achieved 100% faithfulness and 96% citation accuracy on a 50-question hand-labeled evaluation set."
      ],
      github: "https://github.com/alizehadeel/rag-codebase-qa",
      demo: "https://digital-cv-two.vercel.app"
    },
    {
      title: "Debate Arena (LangGraph)",
      duration: "July 2026",
      desc: "Created a multi-agent AI debate platform where autonomous LLM agents engage in evidence-based debates, perform document retrieval, and handle moderator interruptions.",
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      tech: ["LangGraph", "LangChain", "Python", "Multi-Agent Systems", "LLM Reasoning"],
      metrics: [
        "Engineered conversation state management and automated scoring pipelines.",
        "Monitored debate latency, reliability failures, and argument quality analytics."
      ],
      github: "https://github.com/alizehadeel/debate-arena",
      demo: "https://digital-cv-two.vercel.app"
    },
    {
      title: "OwrPlan (Scheduling Application)",
      duration: "April 2026",
      desc: "Developed a user-centric group scheduling and planning platform using the MERN stack focused on intuitive UX and coordination constraints.",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Algorithms"],
      metrics: [
        "Implemented an intelligent best-time suggestion algorithm based on customizable schedules.",
        "Designed interactive schedule visualizations and shared expense tracking systems."
      ],
      github: "https://github.com/alizehadeel/owrplan",
      demo: "https://digital-cv-two.vercel.app"
    },
    {
      title: "Emotional Intelligence Assistant",
      duration: "Feb. 2026 - May 2026",
      desc: "Developed a full-stack mental well-being platform integrating a machine learning model to assess stress levels and deliver personalized coping strategies.",
      icon: <Sparkles className="w-5 h-5 text-fuchsia-400" />,
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Python (ML)", "Chatbot API"],
      metrics: [
        "Integrated lifestyle stress factor assessment model.",
        "Implemented an AI-powered conversational chatbot trained on empathetic dialogue datasets."
      ],
      github: "https://github.com/alizehadeel/emotional-intelligence-assistant",
      demo: "https://digital-cv-two.vercel.app"
    },
    {
      title: "AI Recipe Generator (MLOps Project)",
      duration: "Oct. 2025 - Nov. 2025",
      desc: "Built and deployed an end-to-end MLOps pipeline on AWS featuring a YOLOv8 computer vision model to recognize ingredients and recommend recipes.",
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-400" />,
      tech: ["AWS", "DVC", "MLflow", "YOLOv8", "Python", "React", "FastAPI"],
      metrics: [
        "Integrated DVC for data versioning and MLflow for hyperparameter experiment tracking.",
        "Implemented real-time image uploads for instant ingredient detection and recipe creation."
      ],
      github: "https://github.com/alizehadeel/ai-recipe-generator",
      demo: "https://digital-cv-two.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-1/3 right-10 w-96 h-96 glow-spot-fuchsia rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 glow-spot-indigo rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            Showcase
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Featured Projects
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-gray-800 relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-850 p-2.5 rounded-xl border border-gray-800 text-gray-300 group-hover:border-indigo-500/35 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/10">
                    {project.duration}
                  </span>
                </div>

                {/* Project Details */}
                <h3 className="text-lg font-heading font-bold text-white mb-2 leading-snug group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  {project.desc}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  {project.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1 select-none">•</span>
                      <span className="leading-relaxed">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies and Links Footer */}
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[10px] font-medium text-cyan-300 bg-cyan-950/45 px-2 py-0.5 rounded border border-cyan-800/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between border-t border-gray-800/80 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Codebase
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
