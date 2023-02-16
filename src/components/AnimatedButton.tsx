const AnimatedButton = ({ toggle }: { toggle: boolean }) => {
  return (
    <>
      <span
        className={`block w-6 h-[2px] bg-[#C0C3D8] transition-all duration-500  ${
          toggle ? "rotate-[45deg] translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-[2px] mt-[6px] bg-[#C0C3D8] transition-all duration-500 ${
          toggle ? "opacity-[0]" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-[2px] mt-[6px] bg-[#C0C3D8] transition-all duration-500  ${
          toggle ? "rotate-[-45deg] -translate-y-2" : ""
        }`}
      ></span>
    </>
  );
};

export default AnimatedButton;
