export default function Footer(params) {
  return (
    <>
      <footer className="border-t-2 border-zinc-800 bg-black py-8 px-4 md:px-8 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-mono font-black text-lg text-white">
              OJANN<span className="text-[#CCFF00]">.DEV</span>
            </div>
            <div className="font-mono text-xs text-zinc-500">
              Built with React.js, Tailwind CSS & Express.js mindset. No purple
              permitted ⚡
            </div>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            © {new Date().getFullYear()} — All rights reserved. Neo-Brutalist
            Portfolio.
          </div>
        </div>
      </footer>
    </>
  );
}
