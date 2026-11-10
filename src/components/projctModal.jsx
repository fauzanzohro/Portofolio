import React from "react";
import { X, GitBranch, ExternalLink } from "lucide-react";
import Sticker from "./stiker";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-950 border-4 border-zinc-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[12px_12px_0px_0px_#CCFF00] relative p-6 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-zinc-900 border border-zinc-700 text-white hover:bg-red-500 hover:border-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <Sticker color="bg-[#CCFF00]">{project.category}</Sticker>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-400 font-mono text-xs">{project.metrics}</p>
        </div>

        <div className="h-64 overflow-hidden border-2 border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-[#CCFF00] uppercase">
            // OVERVIEW
          </h4>
          <p className="text-zinc-300 text-sm leading-relaxed">{project.desc}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-[#CCFF00] uppercase">
            // KEY TECHNICAL HIGHLIGHTS
          </h4>
          <ul className="space-y-2 font-mono text-xs text-zinc-300">
            {project.highlights?.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#CCFF00]">✦</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase">
            // TECH STACK USED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-zinc-900 border border-zinc-700 font-mono text-xs font-bold text-white uppercase hover:bg-zinc-800 flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            <span>GitHub Repo</span>
          </a>
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-[#CCFF00] border-2 border-black text-black font-mono font-bold text-xs uppercase hover:bg-white flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}