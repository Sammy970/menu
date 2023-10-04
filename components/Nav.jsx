import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex flex-1 justify-between items-center bg-[#EEF2E3] p-4 py-3 max-w-[87%] m-auto rounded-b-[23px]">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/Assets/coco_logo.png"
          width={70}
          height={70}
          alt="logo"
          className="p-2 rounded-full border-[#043F2E] border-2"
        />
        <div className="">
          <h2 className="font-khand text-3xl tracking-[2px] text-[#043F2E] selection">
            Home
          </h2>
          <p className="font-hind text-lg tracking-[0.2rem] text-[#043f2eba] selection">
            Coco Bar's Kitchen
          </p>
        </div>
      </div>

      <div>
        <input type="text" />
      </div>
    </nav>
  );
};

export default Nav;
