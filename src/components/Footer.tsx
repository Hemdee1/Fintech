const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="max-w-full px-4 sm:px-16 xl:px-[136px] mx-auto w-fullScreen font-Satoshi"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-0 lg:items-start">
        <div className="flex flex-col items-center">
          <h1 className="text-[#C0C3D8] font-Zendot text-2xl">Calone</h1>
          <p className="mt-5 tracking-wide text-secondary">
            You are our only priority.
          </p>
        </div>
        <div className="flex flex-wrap gap-20 md:gap-32">
          <div>
            <h3 className="text-xl font-bold text-[#C0C3D8] mb-8">Company</h3>
            <div className="flex flex-col gap-3 items-start text-secondary font-medium text-[18px]">
              <button>About</button>
              <button>Offers</button>
              <button>Security</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#C0C3D8] mb-8">Contact</h3>
            <div className="flex flex-col gap-3 items-start text-secondary font-medium text-[18px]">
              <button>Help/FAQ</button>
              <button>Press</button>
              <button>Affilates</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#C0C3D8] mb-8">Policy</h3>
            <div className="flex flex-col gap-3 items-start text-secondary font-medium text-[18px]">
              <button>Savings</button>
              <button>Deposits</button>
              <button>Interests</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-10 text-center">
        <p className="font-medium tracking-wider text-secondary">
          &#169; <span>{date}</span> All rights reserved @calone.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
