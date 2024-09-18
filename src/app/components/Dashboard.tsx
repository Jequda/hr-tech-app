import Image from "next/image";
import React from "react";

const Dashboard = ({ avatar, name }) => {
  return (
    <>
      <div className="bg-blue-100 flex pl-[109px] pr-[72px] pt-[67px] items-center ">
        <div className="flex items-center mt-[-53px]">
          <Image
            src={avatar}
            alt="avatar"
            className="rounded-full mr-[24px] h-[150px]"
            width={150}
            height={150}
          />
        </div>

        <div className="ml-[63px] ">
          <div className="flex justify-between ">
            <h2 className="text-black text-[28px] font-semibold">{name}</h2>
            <div className="flex gap-[24px] items-center">
              <button className="border-stroke text-black px-4 py-2 border rounded-[8px] flex gap-[16px] h-[33px]">
                Request a Change
                <div className="relative mt-[6px]">
                  <span className="after:content-[''] after:block after:w-[8px] after:h-[8px] after:border-solid after:border-r-2 after:border-b-2 after:border-black after:rotate-45"></span>
                </div>
              </button>
              <button className="border-stroke p-2 border rounded-[8px] flex gap-[16px] items-center  h-[33px]">
                <Image src="/gear.svg" alt="settings" width={16} height={16} />
                <div className="relative">
                  <span className="after:content-[''] after:block after:w-[8px] after:h-[8px] after:border-solid after:border-r-2 after:border-b-2 after:border-black after:rotate-45"></span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <nav className="flex gap-[16px]   pt-[16px] ">
              <a href="#" className="text-black p-[16px]">
                Personal
              </a>
              <a href="#" className="text-black  p-[16px] ">
                Job
              </a>
              <a
                href="#"
                className="text-black p-[16px] bg-white whitespace-nowrap rounded-tl-[10px] rounded-tr-[10px]"
              >
                Time Off
              </a>
              <a href="#" className="text-black p-[16px]">
                Emergency
              </a>
              <a href="#" className="text-black p-[16px]">
                Documents
              </a>
              <a href="#" className="text-black p-[16px]">
                Notes
              </a>
              <a href="#" className="text-black p-[16px]">
                Benefits
              </a>
              <a href="#" className="text-black p-[16px]">
                Training
              </a>
              <a href="#" className="text-black p-[16px]">
                Assets
              </a>
              <a href="#" className="text-black p-[16px] flex gap-[16px]">
                More
                <div className="relative">
                  <span className="after:content-[''] after:block after:w-[8px] after:h-[8px] after:border-solid after:border-r-2 after:border-b-2 after:border-black after:rotate-45"></span>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
