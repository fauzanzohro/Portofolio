import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b-2 border-zinc-800 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Badge */}
          <div className="flex items-center gap-2">
            {/* <div className="w-9 h-9 bg-[#CCFF00] border-2 border-black flex items-center justify-center font-black text-black shadow-[2px_2px_0px_0px_#ffffff]">
              ⚡
            </div> */}
            <div className="leading-tight">
              <span className="font-black tracking-tighter text-lg block text-white">
                OJANN<span className="text-[#CCFF00]">.DEV</span>
              </span>
              {/* <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                React + Express
              </span> */}
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-none shadow-inner">
            {[
              { id: "home", label: "HOME" },
              { id: "skills", label: "TECH STACK" },
              { id: "projects", label: "PROJECTS" },
              { id: "api-simulator", label: "EXPRESS API SIM" },
              { id: "experience", label: "TIMELINE" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                  activeSection === item.id
                    ? "bg-[#CCFF00] text-black border border-black shadow-[2px_2px_0px_0px_#ffffff]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="px-4 py-2 bg-white text-black font-mono font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#CCFF00] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>
    </>
  );
}
