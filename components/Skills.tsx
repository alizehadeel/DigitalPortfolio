"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "Python", level: "Expert" },
        { name: "C++", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C", level: "Intermediate" }
      ],
      glowColor: "group-hover:border-indigo-500/35",
      badgeStyle: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    },
    {
      title: "AI / ML & GenAI",
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "LangChain", level: "Advanced" },
        { name: "LangGraph", level: "Advanced" },
        { name: "RAG Pipelines", level: "Advanved" },
        { name: "Pandas", level: "Expert" },
        { name: "NumPy", level: "Expert" },
        { name: "Scikit-learn", level: "Advanced" }
      ],
      glowColor: "group-hover:border-cyan-500/35",
      badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    },
    {
      title: "Tools & MLOps",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "DVC", level: "Advanced" },
        { name: "MLflow", level: "Advanced" },
        { name: "Dagshub", level: "Advanced" },
        { name: "n8n", level: "Intermediate" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "SSMS & MS Access", level: "Advanced" },
        { name: "MS Excel", level: "Advanced" }
      ],
      glowColor: "group-hover:border-purple-500/35",
      badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow spots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 glow-spot-indigo rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-spot-cyan rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Technical Skillset
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className={`glass-card p-6 rounded-2xl group border border-gray-800 transition-all duration-300 ${category.glowColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-gray-800/80 pb-4">
                <div className="bg-gray-800/40 p-2.5 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills badges grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300 hover:scale-105 ${category.badgeStyle}`}
                  >
                    <span>{skill.name}</span>
                    <span className="opacity-40 font-light ml-1.5 text-[10px]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
