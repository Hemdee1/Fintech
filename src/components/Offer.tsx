import { offers } from "../data";
import { LayersIcon } from "./icons";

const Offer = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full px-4 sm:px-16 xl:px-[136px] pb-20 sm:pb-[144px]">
      <div className="w-[562px] max-w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#D9DCF1] to-[#A5AFF2] bg-clip-text text-transparent inline-block">
          What we offer
        </h2>
        <h5 className="text-secondary mt-4 text-base leading-7">
          Making Your Money Work Harder for You and Reach Your Financial Dreams
          Sooner.
        </h5>
      </div>
      <div className="mt-[76px] flex flex-wrap gap-6">
        {offers.map((data, index) => {
          const { title, desc } = data;

          return (
            <article key={index} className="w-full sm:w-[292px] mb-8">
              <LayersIcon />
              <h2 className="text-xl font-medium bg-gradient-to-r from-[#D9DCF1] to-[#A5AFF2] bg-clip-text text-transparent inline-block my-2">
                {title}
              </h2>
              <h5 className="text-secondary text-base leading-7">{desc}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Offer;
