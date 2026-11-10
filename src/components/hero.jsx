import React, { useState, useEffect } from "react";
import { Folder, Terminal } from "lucide-react";
import Sticker from "./stiker";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Fullstack Developer (React & Express.js)";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-8 md:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span className="text-zinc-300">STATUS: AVAILABLE FOR WORK</span>
            </div>
            <Sticker color="bg-zinc-200" rotate="-rotate-2">
              REACT & EXPRESS
            </Sticker>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
              CRAFTING <br />
              <span className="text-[#CCFF00] underline decoration-4 underline-offset-8">
                HIGH SPEED
              </span>{" "}
              <br />
              WEB APPS.
            </h1>

            <div className="h-8 font-mono text-lg md:text-xl text-zinc-400 flex items-center gap-2 pt-2">
              <span className="text-[#CCFF00] font-bold">&gt;</span>
              <span>{typedText}</span>
              <span className="w-2.5 h-5 bg-[#CCFF00] inline-block animate-ping"></span>
            </div>
          </div>

          <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed border-l-4 border-[#CCFF00] pl-4 font-sans">
            Saya membuat aplikasi web modern dengan arsitektur backend{" "}
            <strong className="text-white font-mono">Express.js</strong> yang
            solid dan antarmuka{" "}
            <strong className="text-white font-mono">React.js</strong> yang
            responsif. Menggabungkan performa maksimal dengan tampilan Gen-Z
            aesthetics.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#CCFF00] text-black font-mono font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all flex items-center gap-2 text-sm"
            >
              <Folder className="w-4 h-4" />
              <span>Lihat CV</span>
            </a>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-800">
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-[#CCFF00]">
                15+
              </div>
              <div className="text-xs text-zinc-400 uppercase font-mono">
                Fullstack Apps
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-white">
                99.9%
              </div>
              <div className="text-xs text-zinc-400 uppercase font-mono">
                API Uptime
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-[#CCFF00]">
                ⚡ &lt;100ms
              </div>
              <div className="text-xs text-zinc-400 uppercase font-mono">
                Backend Response
              </div>
            </div>
          </div>
        </div>

        {/* Right Card / Mock Visual Column */}
        <div className="lg:col-span-5">{/* foto saja */}</div>
      </div>
    </section>
  );
}
