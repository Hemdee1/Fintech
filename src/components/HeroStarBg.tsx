import { LittleStar } from "./icons";

const HeroStarBg = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/icons/hero-star-design.svg"
        alt="star design"
        className="hidden md:block w-full h-full object-cover object-right"
      />
      <img
        src="/icons/hero-star-design-mobile.svg"
        alt="star design"
        className=" md:hidden w-full h-full object-cover"
      />

      <div className="hidden md:block w-full h-full">
        <span className="animate-shine inline-block absolute scale-150 right-[100px] top-[380px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[195px] top-[318px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[323px] top-[200px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[365px] top-[365px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[549px] top-[238px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[507px] top-[320px]">
          <LittleStar />
        </span>
        <span className="animate-shine inline-block absolute scale-150 right-[705px] top-[332px]">
          <LittleStar />
        </span>
      </div>
    </div>
  );
};

export default HeroStarBg;
