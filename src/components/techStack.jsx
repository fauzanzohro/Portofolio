import React from "react";
import {
  Server,
  Code2,
  Database,
  Sparkles,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import Sticker from "./stiker";

export default function TechStack() {
  return (
    <section id="skills" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-zinc-800 pb-4">
        <div>
          <div className="font-mono text-xs text-[#CCFF00] uppercase tracking-wider mb-1">
            // SKILLSET OVERVIEW
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            TECH STACK & BENTO MATRIX
          </h2>
        </div>
        <p className="text-zinc-400 font-mono text-xs max-w-sm">
          Teknologi utama yang digunakan dalam membangun arsitektur aplikasi web
          fullstack end-to-end.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Express JS Highlight */}
        <div className="md:col-span-2 bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all relative group overflow-hidden shadow-[4px_4px_0px_0px_#18181b]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/10 rounded-full blur-2xl group-hover:bg-[#CCFF00]/20 transition-all"></div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-black border border-zinc-700 flex items-center justify-center text-[#CCFF00]">
                <Server className="w-6 h-6" />
              </div>
              <Sticker color="bg-[#CCFF00]">BACKEND CORE</Sticker>
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
              Express.js & Node.js
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Perancangan RESTful API performa tinggi, custom middleware,
              otentikasi JWT, rate limiting, error handling terpusat, dan
              integrasi microservices.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
            <span className="px-2 py-1 bg-zinc-900 text-xs font-mono text-zinc-300">
              REST API
            </span>
            <span className="px-2 py-1 bg-zinc-900 text-xs font-mono text-zinc-300">
              Middleware
            </span>
            <span className="px-2 py-1 bg-zinc-900 text-xs font-mono text-zinc-300">
              JWT / Auth
            </span>
            <span className="px-2 py-1 bg-zinc-900 text-xs font-mono text-zinc-300">
              Zod Validation
            </span>
          </div>
        </div>

        {/* React JS */}
        <div className="bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_#18181b]">
          <div>
            <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center text-[#CCFF00] mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              React.js
            </h3>
            <p className="text-zinc-400 text-xs">
              SPA modern dengan Hooks, State Management (Zustand/Redux),
              Optimistic UI, dan reusable component architecture.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 mt-4">
            <span className="text-[10px] font-mono text-[#CCFF00]">
              FRONTEND ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Databases */}
        <div className="bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_#18181b]">
          <div>
            <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center text-white mb-4">
              <Database className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Databases
            </h3>
            <p className="text-zinc-400 text-xs">
              Relational SQL (PostgreSQL, MySQL) dengan Prisma ORM & NoSQL
              (MongoDB, Redis caching layer).
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 mt-4">
            <span className="text-[10px] font-mono text-zinc-400">
              DATA & STORAGE
            </span>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_#18181b]">
          <div>
            <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center text-white mb-4">
              <Sparkles className="w-5 h-5 text-[#CCFF00]" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Tailwind CSS
            </h3>
            <p className="text-zinc-400 text-xs">
              Styling ultra-responsif, custom design systems, CSS animations,
              dan Neo-Brutalist layouts.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 mt-4">
            <span className="text-[10px] font-mono text-zinc-400">
              UI / STYLING
            </span>
          </div>
        </div>

        {/* DevOps */}
        <div className="md:col-span-2 bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_#18181b]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center text-[#CCFF00]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  DevOps & Tooling
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  Deployment & Workflow Pipelines
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs mb-4">
              Docker containerization untuk Express API, Version Control
              Git/GitHub workflows, Postman API testing, Vercel & Render
              automated deployments.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-white">
              Docker
            </span>
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-white">
              Git / GitHub
            </span>
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-white">
              Postman
            </span>
            <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#CCFF00]">
              Vercel / Render
            </span>
          </div>
        </div>

        {/* Quality */}
        <div className="bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_#18181b]">
          <div>
            <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center text-[#CCFF00] mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Clean Code
            </h3>
            <p className="text-zinc-400 text-xs">
              Modularity, DRY principles, strict API validation, dan error
              handling terstruktur.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 mt-4">
            <span className="text-[10px] font-mono text-zinc-400">
              BEST PRACTICES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
