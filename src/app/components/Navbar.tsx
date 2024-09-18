import { Divide } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({
  avatar,
  onLogout,
}: {
  avatar: string;
  onLogout: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white flex gap-[60px] items-center pt-[32px] pl-[24px] pr-[24px] pb-[8px] justify-between h-[86px] max-sm:justify-normal max-sm:gap-8 max-sm:pt-2 ">
      <Image
        src="/HarmonyHR.svg"
        alt="logo"
        className="mb-[14px] w-auto h-auto"
        width={116}
        height={24}
      />

      <div className="flex gap-[16px] w-[523px] max-sm:hidden">
        <a href="#" className="text-black p-[16px]">
          Home
        </a>
        <a
          href="#"
          className="text-black pl-[16px] pr-[16px] pt-[16px] pb-[21px] bg-blue-100 whitespace-nowrap rounded-tl-[10px] rounded-tr-[10px]"
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

      <div className="relative flex-grow mb-[14px] mx-4 max-sm:flex-grow-0 max-sm:mx-0  ">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-[12px] pl-10 pr-4 py-2 border-black max-sm:w-12"
        />
        <Image
          src="/loupe.svg"
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 max-sm:left-5"
          width={16}
          height={16}
        />
      </div>

      <div className="flex items-center gap-[24px]">
        <div className="flex gap-[24px] max-sm:hidden">
          <div className="relative inline-block">
            <Image
              onClick={() => setIsOpen((prev) => !prev)}
              src="/gear.svg"
              alt="settings"
              width={24}
              height={24}
            />

            {isOpen && (
              <div className="absolute right-[-40px] mt-2 bg-[#DAE6F2] p-4 rounded shadow-lg z-10">
                <button
                  className="bg-white text-black px-4 py-2 rounded"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <Image src="/question.svg" alt="question" width={24} height={24} />
          <Image
            src="/ringbell.svg"
            alt="notifications"
            width={21}
            height={24}
          />
        </div>
        <button className="lg:hidden flex items-center justify-center flex-col">
          <span className="block w-4 h-0.5 bg-gray-600 rounded-full mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-600 rounded-full mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-600 rounded-full"></span>
        </button>
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
