import { CircleBubble } from "./icons";

const Investing = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full px-4 sm:px-16 xl:px-[136px] pt-12 h-[653px] relative overflow-hidden">
      <span className="absolute inset-0 scale-[2] sm:scale-110">
        <CircleBubble />
      </span>
      <div className="w-[562px] max-w-full">
        <h2
          className="text-2xl font-bold bg-gradient-to-r from-[#D9DCF1] to-[#A5AFF2] bg-clip-text text-transparent inline-block"
          data-aos="fade-up"
        >
          Investing with Calone
        </h2>
        <h5
          className="text-secondary mt-4 text-base leading-7 w-full"
          data-aos="fade-up"
        >
          At Calone, we believe that everyone should have access to smart,
          effortless savings. That's why we've created a savings platform that
          makes it easy for you to grow your wealth, without sacrificing your
          lifestyle.
        </h5>
      </div>
    </section>
  );
};

export default Investing;
