import { ShootingStar } from "./icons";

const ShootingStars = () => {
  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <span className="absolute -left-52 top-64 animate-shoot animation-delay-500">
          <ShootingStar />
        </span>
        <span className="absolute -left-52 top-40 animate-shoot">
          <ShootingStar />
        </span>
        <span className="absolute -left-52 top-0 animate-shoot animation-delay-300">
          <ShootingStar />
        </span>
        <span className="absolute left-0 top-40 animate-shoot animation-delay-1000">
          <ShootingStar />
        </span>
        <span className="absolute left-0 -top-72 animate-shoot animation-delay-300">
          <ShootingStar />
        </span>
        <span className="absolute left-0 -top-96 animate-shoot">
          <ShootingStar />
        </span>
        <span className="absolute left-0 -top-[500px] animate-shoot animation-delay-700">
          <ShootingStar />
        </span>
      </div>
    </div>
  );
};

export default ShootingStars;
