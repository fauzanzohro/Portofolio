import React from "react";
const MarqueeText = ({ items, speed = 25 }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-[#CCFF00] text-black font-black uppercase tracking-tighter text-sm py-2 border-y-2 border-black flex items-center">
      <div className="inline-flex animate-marquee space-x-8 items-center">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-4">
            <span className="text-xl font-mono">✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
      <div
        className="inline-flex animate-marquee space-x-8 items-center pl-8"
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <span key={`dup-${idx}`} className="flex items-center gap-4">
            <span className="text-xl font-mono">✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
