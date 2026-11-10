import React, { useState, useEffect } from "react";
import { Radio, Play } from "lucide-react";

export default function ApiSimulator() {
  const [terminalMethod] = useState("GET");
  const [terminalEndpoint, setTerminalEndpoint] = useState("/api/projects");
  const [terminalResponse, setTerminalResponse] = useState(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    {
      type: "sys",
      text: "⚡ Express.js v4.18.2 Server running on port 5000...",
    },
    { type: "sys", text: "📡 CORS enabled. Database PostgreSQL connected." },
  ]);

  const handleRunApi = () => {
    setIsLoadingApi(true);

    setTimeout(() => {
      let res = {};
      if (terminalEndpoint === "/api/projects") {
        res = {
          status: 200,
          message: "Success",
          data: [
            { id: "hyper-inv", title: "HyperStock POS", category: "FULLSTACK" },
            { id: "flow-api", title: "DevPulse Gateway", category: "BACKEND" },
          ],
        };
      } else if (terminalEndpoint === "/api/skills") {
        res = {
          status: 200,
          stack: {
            frontend: ["React.js", "Tailwind CSS", "Zustand"],
            backend: ["Express.js", "Node.js", "JWT Auth"],
            database: ["PostgreSQL", "MongoDB", "Prisma"],
            devops: ["Docker", "Vercel", "Git"],
          },
        };
      } else if (terminalEndpoint === "/api/status") {
        res = {
          status: 200,
          uptime: "99.98%",
          environment: "production",
          coffeeLevel: "95%",
          hirable: true,
        };
      } else {
        res = { status: 404, error: "Route not found on Express router" };
      }

      setTerminalResponse(JSON.stringify(res, null, 2));
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "req",
          text: `${terminalMethod} ${terminalEndpoint} 200 OK (${Math.floor(
            Math.random() * 20 + 10
          )}ms)`,
        },
      ]);
      setIsLoadingApi(false);
    }, 400);
  };

  useEffect(() => {
    handleRunApi();
  }, [terminalEndpoint]);

  return (
    <section id="api-simulator" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-zinc-800 pb-4">
        <div>
          <div className="font-mono text-xs text-[#CCFF00] uppercase tracking-wider mb-1">
            // INTERACTIVE SERVER DEMO
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white flex items-center gap-3">
            <span>EXPRESS.JS REST API TESTER</span>
            <span className="text-xs font-mono font-normal px-2 py-1 bg-zinc-800 text-[#CCFF00] border border-zinc-700">
              LIVE MOCK
            </span>
          </h2>
        </div>
        <p className="text-zinc-400 font-mono text-xs max-w-md">
          Coba simulasi request HTTP ke Express Backend untuk mengambil data JSON portofolio secara realtime.
        </p>
      </div>

      <div className="bg-zinc-950 border-4 border-zinc-800 shadow-[8px_8px_0px_0px_#CCFF00] overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-3 border-b-2 border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-black"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 border border-black"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 border border-black"></div>
            <span className="ml-2 font-mono text-xs font-bold text-zinc-300">
              bash - Express Router Tester v1.0
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <Radio className="w-3 h-3 text-[#CCFF00] animate-pulse" />
            <span>localhost:5000</span>
          </div>
        </div>

        {/* API Control Bar */}
        <div className="p-4 bg-zinc-900/50 border-b border-zinc-800 flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-auto">
            <span className="px-3 py-2 bg-black text-[#CCFF00] font-mono font-black text-xs border border-zinc-700 block text-center">
              {terminalMethod}
            </span>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { endpoint: "/api/projects", label: "GET /api/projects" },
              { endpoint: "/api/skills", label: "GET /api/skills" },
              { endpoint: "/api/status", label: "GET /api/status" },
            ].map((item) => (
              <button
                key={item.endpoint}
                onClick={() => setTerminalEndpoint(item.endpoint)}
                className={`px-3 py-2 font-mono text-xs border transition-all text-left truncate ${
                  terminalEndpoint === item.endpoint
                    ? "bg-[#CCFF00] text-black border-black font-bold"
                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunApi}
            disabled={isLoadingApi}
            className="w-full md:w-auto px-5 py-2 bg-white text-black font-mono font-bold text-xs uppercase border-2 border-black hover:bg-[#CCFF00] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoadingApi ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>Send Req</span>
          </button>
        </div>

        {/* Terminal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-75">
          <div className="lg:col-span-5 bg-black p-4 font-mono text-xs border-b lg:border-b-0 lg:border-r border-zinc-800 space-y-2 overflow-y-auto max-h-87.5">
            <div className="text-zinc-500 pb-2 border-b border-zinc-900">
              // SERVER LOGS STREAM
            </div>
            {terminalLogs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-zinc-600">&gt;</span>
                <span
                  className={
                    log.type === "req" ? "text-[#CCFF00]" : "text-zinc-400"
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 bg-[#050505] p-4 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-2 mb-3 border-b border-zinc-900">
                <span className="text-zinc-400">// RESPONSE PAYLOAD (JSON)</span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
              <pre className="text-zinc-200 overflow-x-auto text-[11px] leading-relaxed max-h-70">
                {isLoadingApi
                  ? "// Executing Express Controller Route..."
                  : terminalResponse}
              </pre>
            </div>

            <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500">
              <span>Content-Type: application/json</span>
              <span>Server: Express/4.18.2 (Node)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}