import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="w-fullscreen h-[86px] px-4 sm:px-16 xl:px-[136px] max-w-full mx-auto bg-white bg-opacity-[0.02] backdrop-blur-md flex items-center justify-between border-b border-secondary">
        <h1 className="text-[#C0C3D8] font-Zendot text-[18px]">Calone</h1>
        <div
          className={`absolute top-[86px] lg:top-0 inset-0 w-full h-screen lg:h-auto lg:w-auto lg:relative flex justify-end ${
            !toggle ? "invisible" : "visible"
          }`}
        >
          {/* bg-white bg-opacity-[0.2] backdrop-blur-3xl lg:backdrop-blur-none */}
          <nav
            className={`bg-primary border-l border-secondary lg:border-none lg:bg-transparent w-52 p-8 lg:p-0 lg:w-auto flex-col lg:flex-row h-screen lg:h-auto flex gap-20 text-[#C0C3D8] animate ${
              toggle ? "translate-x-0" : "translate-x-52"
            }`}
          >
            <div className="flex gap-8 flex-col lg:flex-row items-start lg:items-center">
              <button className="transition-colors duration-500 hover:text-white">
                Invest
              </button>
              <button className="transition-colors duration-500 hover:text-white">
                Save
              </button>
              <button className="transition-colors duration-500 hover:text-white">
                Blog
              </button>
              <button className="transition-colors duration-500 hover:text-white">
                Features
              </button>
              <button className="transition-colors duration-500 hover:text-white">
                Contact us
              </button>
            </div>
            <div className="flex gap-8 flex-col lg:flex-row items-start lg:items-center">
              <button className="transition-colors duration-500 hover:text-white">
                Log in
              </button>
              <button className="transition-colors duration-500 text-[#BFC1D6] hover:text-white px-4 py-2 rounded-[54px] border border-secondary hover:border-white bg-white bg-opacity-5 backdrop:blur-sm">
                Start Inversting
              </button>
            </div>
          </nav>
        </div>

        {/* TOGGLE */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="lg:hidden"
        >
          <AnimatedButton toggle={toggle} />
        </button>
      </div>
    </header>
  );
};

export default Header;
