import { priority } from "../data";

const Priority = () => {
  return (
    <section className="w-fullscreen mx-auto max-w-full px-4 sm:px-16 xl:px-[136px] -mt-40 md:mt-0 pb-[120px] relative min-h-screen">
      <div className="w-[562px] max-w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#D9DCF1] to-[#A5AFF2] bg-clip-text text-transparent inline-block">
          You are our only priority
        </h2>
        <h5 className="text-secondary mt-4 text-base leading-7">
          Making Your Money Work Harder for You and Reach Your Financial Dreams
          Sooner.
        </h5>
      </div>
      <div className="mt-[72px] flex flex-wrap xl:flex-nowrap justify-center gap-6">
        {priority.map((data, index) => {
          const { title, desc, Icon } = data;

          return (
            <article
              key={index}
              className="bg-white bg-opacity-[0.02] w-[397px] overflow-hidden border border-[#292D4A] rounded-3xl animate hover:border-[#6971a0] group"
            >
              <div className="w-full h-[248px] flex justify-center items-center relative">
                <img
                  src="/icons/small-stars-default.svg"
                  alt="stars"
                  className="absolute inset-0 animate group-hover:opacity-0"
                />
                <img
                  src="/icons/small-stars-hover.svg"
                  alt="stars"
                  className="absolute inset-0 animate opacity-0 group-hover:opacity-100"
                />

                <div className="overflow-hidden w-[88px] h-[88px] rounded-2xl border border-[#292D4A] grid place-items-center backdrop-blur-sm bg-[rgba(27,42,149,0.1)] animate group-hover:bg-gradient-to-b from-[rgba(27,42,149,0.2)] to-transparent">
                  <Icon />
                </div>
              </div>
              <div className="px-4 sm:px-6 pb-10 sm:pb-[65px] -mt-10">
                <h3 className="text-xl font-medium bg-gradient-to-r from-[#D9DCF1] to-[#A5AFF2] bg-clip-text text-transparent inline-block">
                  {title}
                </h3>
                <h5 className="text-secondary text-base leading-7 mt-2 min-h-[150px]">
                  {desc}
                </h5>
                <button className="btn">Read more</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Priority;
