import React from "react";

export default function Experience() {
  const experiences = [
    {
      period: "2023 - PRESENT",
      role: "Fullstack Web Developer",
      company: "Tech Studio / Freelance",
      desc: "Mengembangkan aplikasi web kustom untuk klien internasional menggunakan React.js frontend dan Express.js REST API backend.",
      tech: ["React.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      period: "2022 - 2023",
      role: "Backend Express.js Developer",
      company: "Digital Solutions Lab",
      desc: "Fokus merancang arsitektur API microservice, otentikasi JWT, integrasi Payment Gateway Stripe, dan optimasi query PostgreSQL.",
      tech: ["Express.js", "Node.js", "Redis", "Docker", "Swagger"],
    },
    {
      period: "2021 - 2022",
      role: "Frontend React Engineer",
      company: "Creative Web Agency",
      desc: "Membangun antarmuka web interaktif yang kaya akan animasi dengan React, Redux Toolkit, dan Tailwind CSS.",
      tech: ["React.js", "JavaScript ES6+", "CSS Modules", "Framer Motion"],
    },
  ];

  return (
    <section id="experience" className="space-y-6">
      <div className="border-b-2 border-zinc-800 pb-4">
        <div className="font-mono text-xs text-[#CCFF00] uppercase tracking-wider mb-1">
          // CAREER PATH
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          EXPERIENCE & ROADMAP
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-zinc-950 border-2 border-zinc-800 p-6 hover:border-[#CCFF00] transition-all relative flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#18181b]"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {exp.role}{" "}
                  <span className="text-zinc-500">@ {exp.company}</span>
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">{exp.desc}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {exp.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-zinc-900 text-zinc-300 font-mono text-xs border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
