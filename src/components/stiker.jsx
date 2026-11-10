const Sticker = ({
  children,
  className = "",
  rotate = "rotate-0",
  color = "bg-[#CCFF00]",
}) => {
  return (
    <div
      className={`inline-block px-3 py-1 font-mono font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000000] transition-transform hover:scale-110 cursor-pointer ${color} text-black ${rotate} ${className}`}
    >
      {children}
    </div>
  );
};
export default Sticker;
