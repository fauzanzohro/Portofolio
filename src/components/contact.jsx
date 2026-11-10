import React, { useState } from "react";
import { GitBranch, ExternalLink, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "< $500",
  });
  const [formSent, setFormSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dev.genz@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="border-b-2 border-zinc-800 pb-4">
        <div className="font-mono text-xs text-[#CCFF00] uppercase tracking-wider mb-1">
          // GET IN TOUCH
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          LET'S BUILD SOMETHING SICK
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-950 border-2 border-zinc-800 p-6 space-y-6 shadow-[6px_6px_0px_0px_#18181b]">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Punya Project atau Tawaran Kerja?
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Saya selalu terbuka untuk proyek freelance, full-time remote
              roles, atau kolaborasi open-source terkait ekosistem{" "}
              <strong className="text-white font-mono">
                React & Express.js
              </strong>
              .
            </p>

            {/* Email Copy Card */}
            <div className="p-4 bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">
                  DIRECT EMAIL
                </div>
                <div className="font-mono text-sm font-bold text-[#CCFF00]">
                  dev.genz@example.com
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 bg-black border border-zinc-700 text-white hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-400 uppercase">
                // SOCIAL MATRIX
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    name: "GitHub",
                    icon: GitBranch,
                    link: "https://github.com",
                  },
                  {
                    name: "LinkedIn",
                    icon: ExternalLink,
                    link: "https://linkedin.com",
                  },
                  {
                    name: "Twitter",
                    icon: ExternalLink,
                    link: "https://twitter.com",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-black hover:bg-[#CCFF00] hover:border-black transition-all flex flex-col items-center gap-1 font-mono text-xs font-bold"
                  >
                    <s.icon className="w-4 h-4" />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-950 border-4 border-zinc-800 p-6 md:p-8 shadow-[8px_8px_0px_0px_#CCFF00]">
            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#CCFF00] text-black border-2 border-black mx-auto flex items-center justify-center font-black text-2xl shadow-[4px_4px_0px_0px_#ffffff]">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  PESAN TERKIRIM!
                </h3>
                <p className="text-zinc-400 font-mono text-xs max-w-md mx-auto">
                  POST /api/contact response: 200 OK. Saya akan membalas email
                  Anda secepatnya!
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-white uppercase hover:bg-zinc-800 cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSent(true);
                }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-2">
                  <span className="font-mono text-xs font-bold text-[#CCFF00]">
                    POST /api/contact
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    Live Validation
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-xs text-zinc-400 uppercase">
                      Nama / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Bro"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-black border-2 border-zinc-800 p-3 text-sm text-white font-mono focus:border-[#CCFF00] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs text-zinc-400 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-black border-2 border-zinc-800 p-3 text-sm text-white font-mono focus:border-[#CCFF00] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs text-zinc-400 uppercase">
                    Estimasi Budget Project
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["< $500", "$500 - $1.5K", "> $1.5K"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 font-mono text-xs border uppercase cursor-pointer ${
                          formData.budget === b
                            ? "bg-[#CCFF00] text-black font-bold border-black"
                            : "bg-black text-zinc-400 border-zinc-800 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs text-zinc-400 uppercase">
                    Detail Project / Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan detail project Express.js API atau React frontend yang ingin dibuat..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-black border-2 border-zinc-800 p-3 text-sm text-white font-mono focus:border-[#CCFF00] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#CCFF00] text-black font-mono font-black text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Message Payload</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
