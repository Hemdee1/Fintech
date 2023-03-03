import { StarDesign1 } from "./icons";

const Empower = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full sm:px-16 xl:px-[136px] pb-[144px] relative">
      <div
        className="w-full h-[500px] sm:h-[336px] rounded-3xl px-8 flex flex-col items-start justify-center gap-8 sm:border border-[#292D4A] relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/icons/empower-star-design.svg"
            alt="star design"
            className="hidden md:block w-full h-full object-cover"
          />
          <img
            src="/icons/empower-star-design-mobile.svg"
            alt="star design"
            className="md:hidden w-full h-full object-cover"
          />
        </div>

        <h1
          className="text-[24px] sm:text-[35px] lg:text-[48px] font-bold leading-[32px] sm:leading-[67px] bg-gradient-to-r from-[#D9DCF1] to-[#d9dcf11c] bg-clip-text text-transparent inline-block w-[622px] max-w-full mt-24 sm:mt-0 z-10"
          data-aos="fade-up"
        >
          Empower Your Finances and Transform Your Savings
        </h1>
        <button className="btn z-10" data-aos="fade-up">
          Start Inversting
        </button>
      </div>
    </section>
  );
};

export default Empower;
