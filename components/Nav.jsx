import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex flex-1 justify-between items-center bg-[#EEF2E3] p-4 py-3 max-container m-auto rounded-b-[23px]">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/Assets/coco_logo.png"
          width={70}
          height={70}
          alt="logo"
          className="p-2 rounded-full border-[#043F2E] border-2"
        />
        <div className="selection">
          <h2 className="font-khand text-3xl max-sm:text-2xl tracking-[2px] text-[#043F2E] ">
            Home
          </h2>
          <p className="font-hind text-lg max-sm:text-[17px] tracking-[0.2rem] text-[#043f2eba] ">
            Coco Bar's Kitchen
          </p>
        </div>
      </div>

      <div className="rounded-full border-[#043F2e] border-2 p-3 hover:bg-[#043F2e] text-[#043f2e] hover:text-white">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </div>
    </nav>
  );
};

export default Nav;
