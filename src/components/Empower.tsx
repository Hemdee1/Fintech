import { StarDesign1 } from "./icons";

const Empower = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full sm:px-16 xl:px-[136px] pb-[144px]">
      <div className="w-full h-[500px] sm:h-[336px] rounded-3xl px-8 flex flex-col items-start justify-center gap-8 bg-[#050820] sm:border border-[#292D4A] relative overflow-hidden">
        <h1 className="text-[24px] sm:text-[35px] lg:text-[48px] font-bold leading-[32px] sm:leading-[67px] bg-gradient-to-r from-[#D9DCF1] to-[#d9dcf11c] bg-clip-text text-transparent inline-block w-[622px] max-w-full mt-24 sm:mt-0">
          Empower Your Finances and Transform Your Savings
        </h1>
        <button className="btn">Start Inversting</button>
        <span className="absolute top-0 right-0 left-0 sm:left-auto flex justify-end sm:scale-90">
          <StarDesign1 />
        </span>
      </div>
    </section>
  );
};

export default Empower;
