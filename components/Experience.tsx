"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "AI / ML Intern",
      company: "Devsinc",
      duration: "June 2026 - July 2026",
      type: "work",
      desc: "Gained comprehensive experience in Deep Learning and Generative AI, building core computer vision models and autonomous agent workflows.",
      points: [
        "Built and fine-tuned ANNs, CNNs, RNNs, LSTMs, GRUs, and YOLO models for object detection tasks.",
        "Created production-grade Generative AI products: RAG pipelines, LangGraph-based agentic orchestration systems, and Fooocus AI image generators."
      ]
    },
    {
      role: "Applied AI Engineering Workshop (Agentic AI)",
      company: "InvoZone",
      duration: "Bootcamp",
      type: "bootcamp",
      desc: "Deep-dive workshops focusing on the construction of autonomous LLM agent networks and prompt orchestration pipelines.",
      points: [
        "Studied advanced cognitive routing architectures, tool calling loops, and self-correcting agent chains."
      ]
    },
    {
      role: "Cloud Foundations Graduate",
      company: "AWS Academy",
      duration: "Certification",
      type: "certification",
      desc: "Formal cloud infrastructure training, addressing basic cloud concepts, security, architecture, pricing, and support.",
      points: [
        "Hands-on configuration of EC2 instances, S3 buckets, IAM roles, and serverless compute triggers."
      ]
    }
  ];

  const education = [
    {
      degree: "BS Computer Science",
      institution: "FAST NUCES Lahore",
      duration: "Sept. 2023 - June 2027",
      details: "CGPA: 3.63/4.00. Focus areas include Data Structures, Object-Oriented Programming (OOP), Databases, MLOps, Web Programming, and Artificial Intelligence."
    },
    {
      degree: "A Levels (Cambridge International)",
      institution: "Lahore Grammar School",
      duration: "Sept. 2021 - May 2023",
      details: "Achieved A* in Mathematics, A* in Accounting, and A in Information Technology."
    },
    {
      degree: "O Levels (Cambridge International)",
      institution: "Beaconhouse School System",
      duration: "Sept. 2018 - May 2021",
      details: "Achieved 9 A* grades including Physics, Chemistry, Biology, Mathematics, English, and Global Perspective."
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-spot-indigo rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-spot-cyan rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work & Certifications Timeline */}
          <div>
            <div className="mb-12">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
                Timeline
              </h2>
              <h3 className="text-3xl font-heading font-extrabold text-white">
                Experience & Bootcamps
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-4 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-gray-800/80">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 group"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline circle icon */}
                  <div className="absolute left-2.5 top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-gray-800 group-hover:border-indigo-400 flex items-center justify-center transition-colors duration-300 z-10">
                    {exp.type === "work" ? (
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                    ) : (
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-gray-800/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="font-heading font-bold text-white text-base">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/10">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                    </div>
                    
                    <span className="block text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      {exp.company}
                    </span>
                    
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {exp.desc}
                    </p>

                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {exp.points.map((pt, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="mb-12">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
                Education
              </h2>
              <h3 className="text-3xl font-heading font-extrabold text-white">
                Academic Background
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 mt-4 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-gray-800/80">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 group"
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline circle icon */}
                  <div className="absolute left-2.5 top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-gray-800 group-hover:border-cyan-400 flex items-center justify-center transition-colors duration-300 z-10">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-gray-800/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="font-heading font-bold text-white text-base">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/10">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                    </div>

                    <span className="block text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      {edu.institution}
                    </span>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {edu.details}
                    </p>
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
