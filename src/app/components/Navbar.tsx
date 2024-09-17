import Image from "next/image";
import React from "react";

const Navbar = ({ avatar }) => {
  return (
    <nav className="bg-white flex gap-[60px] items-center pt-[32px] pl-[24px] pr-[24px] pb-[8px] justify-between h-[86px]">
      <Image
        src="/HarmonyHR.svg"
        alt="logo"
        className="mb-[14px]"
        width={116}
        height={24}
      />

      <div className="flex gap-[16px] w-[523px]">
        <a href="#" className="text-black p-[16px]">
          Home
        </a>
        <a
          href="#"
          className="text-black pl-[16px] pr-[16px] pt-[16px] pb-full bg-blue-100 whitespace-nowrap rounded-tl-[10px] rounded-tr-[10px]"
        >
          My Info
        </a>
        <a href="#" className="text-black p-[16px]">
          People
        </a>
        <a href="#" className="text-black p-[16px]">
          Hiring
        </a>
        <a href="#" className="text-black p-[16px]">
          Reports
        </a>
        <a href="#" className="text-black p-[16px]">
          Files
        </a>
      </div>

      <div className="relative flex-grow mb-[14px] mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-[12px] pl-10 pr-4 py-2 border-black"
        />
        <Image
          src="/loupe.svg"
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          width={16}
          height={16}
        />
      </div>

      <div className="flex items-center gap-[24px]">
        <Image src="/gear.svg" alt="settings" width={24} height={24} />
        <Image src="/question.svg" alt="question" width={24} height={24} />
        <Image src="/ringbell.svg" alt="notifications" width={21} height={24} />
        <Image
          src={avatar}
          alt="avatar"
          className="rounded-full"
          width={38}
          height={38}
        />
      </div>
    </nav>
  );
};

export default Navbar;
