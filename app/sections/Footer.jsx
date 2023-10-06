import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-container mt-16 mb-8 selection">
      <hr className="h-px my-8 bg-[#C8F169] border-0 dark:bg-gray-700" />
      <div className="flex flex-1 justify-start items-center">
        <Image
          src="/Assets/coco_logo.png"
          width={70}
          height={70}
          alt="logo"
          className="p-2 rounded-full bg-[#EEF2E3] border-black border-2"
        />
      </div>
      <div className="flex flex-1 flex-col mt-5">
        <h2 className="font-khand text-white text-3xl tracking-[0.12rem]">
          Coco's Bar/Kitchen
        </h2>
        <p className="font-hind text-gray-300 text-lg max-sm:text-sm mt-3 tracking-[0.12rem] leading-normal font-semibold">
          State and Government Taxes applicable <br /> We levy 7.5% Service
          Charge
        </p>
      </div>

      <div className="flex flex-1 flex-col mt-5">
        <h2 className="font-hind text-gray-300 text-lg font-normal leading-normal tracking-[0.1rem]">
          Powered by{" "}
          <span className="inline-block bg-[#C8F169] text-black font-khand font-extrabold transform -skew-y-12 px-2">
            MENU
          </span>
        </h2>
        <h2 className="font-khand text-2xl tracking-[0.12rem] mt-3 text-white">
          Give your restaurant
        </h2>
        <h1 className="font-khand text-3xl tracking-[0.15rem] leading-none mt-1 text-[#C8F169]">
          An Unfair Advantage
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
