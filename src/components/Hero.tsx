import HeroStarBg from "./HeroStarBg";
import ShootingStars from "./ShootingStars";

const Hero = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full px-4 sm:px-16 xl:px-[136px] pb-[60px] sm:pb-[141px] h-[723px] flex items-end relative">
      <HeroStarBg />

      <div
        className="w-[675px] flex flex-col items-start gap-6 z-10"
        data-aos="fade-up"
      >
        <h1 className="text-[32px] sm:text-[64px] font-bold leading-[43px] sm:leading-[86px] bg-gradient-to-r from-[#D9DCF1] to-[#d9dcf11c] bg-clip-text text-transparent inline-block">
          Revolutionize the way you save and grow your wealth
        </h1>
        <h3 className="text-secondary text-sm sm:text-base">
          Transform your savings and experience a smarter, more rewarding way to
          save, with features like budget tracking, goals and rewards, and
          mobile deposits
        </h3>
        <button className="btn relative">Start Inversting</button>

        <ShootingStars />
      </div>
    </section>
  );
};

export default Hero;
