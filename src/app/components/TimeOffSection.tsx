import React from "react";
import Image from "next/image";

const TimeOffSection = () => {
  return (
    <div className="pl-[16px] pr-[17px] pt-[41px] bg-white ml-[25px] w-full mr-[71px] max-sm:ml-0">
      <div className="flex justify-between ">
        <h2 className="text-lg font-semibold text-[#204973] flex gap-3 items-center max-sm:hidden">
          <Image
            src="/timeoff.svg"
            alt="timeoff"
            width={16}
            height={16}
            className="h-4"
          />
          Time Off
        </h2>
        <div className="flex items-center gap-[30px]">
          <div>
            <span className="text-black">Accrual Level Start Date</span>{" "}
            <span className="text-[#204973]">03/09-2020</span>
          </div>
          <button className="text-black border border-black rounded-[8px] p-2">
            Add Time Off Policy
          </button>
        </div>
      </div>
      <hr className="border-t border-[#7C96B1] mt-3 border-[2px] " />
      <div className="grid grid-cols-3 gap-12 mr-20 ml-20 mt-[25px] pb-6 max-sm:flex max-sm:ml-0 max-sm:gap-3">
        <div>
          <div className="bg-[#F0F3F8] pr-4 pl-4 pt-3 pb-3  rounded-[8px]  flex-col text-center space-y-1 max-sm:w-[264px]">
            <h3 className="font-semibold text-gray-700 text-xl">Sick</h3>
            <p className="text-3xl font-bold text-black flex gap-[10px] justify-center">
              <Image
                src="/health.svg"
                alt="sick"
                width={30}
                height={30}
                className="h-[30px]"
              />
              3
            </p>
            <p className="text-black text-sm">Days Available</p>
            <p className="text-[#7C96B1] text-sm">1 dey scheduled</p>
          </div>
          <p className="text-[#7C96B1] text-center mt-2 text-sm">
            Sick Full-Time
          </p>
        </div>
        <div>
          <div className="bg-[#F0F3F8] pr-4 pl-4 pt-[26px] pb-[26px]  rounded-[8px]  flex-col text-center h-[138px] space-y-1 max-sm:w-[264px]">
            <h3 className="font-semibold text-gray-700 text-xl">
              Annual Leave{" "}
            </h3>
            <p className="text-3xl font-bold text-black flex gap-[10px] justify-center">
              <Image
                src="/mountain.svg"
                alt="holiday"
                width={30}
                height={30}
                className="h-[30px]"
              />
              10.3
            </p>
            <p className="text-black text-sm">Days Available</p>
          </div>
          <p className="text-[#7C96B1] text-center mt-2 text-sm">
            Holiday Full-Time
          </p>
        </div>
        <div>
          <div className="bg-[#F0F3F8] pr-4 pl-4 pt-[26px] pb-[26px]  rounded-[8px]  flex-col text-center h-[138px] justify-center space-y-1">
            <h3 className="font-semibold text-gray-700 text-xl">
              Comp/in Lieu Time{" "}
            </h3>
            <p className="text-3xl font-bold text-black flex gap-[10px] justify-center">
              <Image
                src="/jobtime.svg"
                alt="comp"
                width={30}
                height={30}
                className="h-[30px]"
              />
              0
            </p>
            <p className="text-black text-sm">Human Used(YTD)</p>
          </div>
          <p className="text-[#7C96B1] text-center mt-2 text-sm">
            Comp/in Lieu Time Flexible Policy
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-sm font-semibold text-[#204973] flex gap-2 items-center">
            <Image
              src="/clock.svg"
              alt="clock"
              width={16}
              height={16}
              className="h-4"
            />
            Upcoming Time Off
          </h2>
        </div>
        <hr className="border-t border-[#7C96B1] mt-3 border-[2px] " />
      </div>
      <div className="mt-[25px] items-center">
        <div className="flex gap-[14px]">
          <Image
            src="/health.svg"
            alt="sick"
            width={30}
            height={30}
            className="h-[30px]"
          />
          <div>
            <p className="text-black text-sm">Jan 27</p>
            <ul className=" list-none pl-0">
              <li className="relative pl-3 text-black before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:bg-[#204973] before:rounded-full before:-translate-y-1/2 text-sm">
                1 dey of Sick
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t  mt-[23px] border-[#7C96B1] border-[2px] " />
      </div>
      <div className="mt-[25px] ">
        <div className="flex gap-[14px]">
          <Image
            src="/bank.svg"
            alt="independence"
            width={30}
            height={30}
            className="h-[30px]"
          />
          <div>
            <p className="text-black text-sm">Jul 4</p>
            <p className="text-sm text-black">Independence Day</p>
          </div>
        </div>
        <hr className="border-t border-[#7C96B1] mt-[23px] border-[2px] " />
      </div>
      <div>
        <div>
          <p className="text-sm font-semibold text-[#204973] flex gap-2 items-center mt-[25px]">
            <Image
              src="/history.svg"
              alt="history"
              width={16}
              height={16}
              className="h-4"
            />
            History
          </p>
        </div>
        <div className="text-black flex justify-between mt-4 pl-2 pr-[83px] bg-[#DAE6F2] py-4 text-center mb-[14px] text-sm">
          <div className="flex gap-20">
            <p className="flex gap-1">
              Date
              <Image
                src="/arrowdown.svg"
                alt="arrow"
                width={16}
                height={16}
                className="h-4"
              />
            </p>
            <p>Description</p>
          </div>
          <div className="flex gap-20 ">
            <p>Used Days (-)</p>
            <p>Earned Days (+)</p>
            <p>Balance</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[157px]">
              <p>3.00</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[330px]">
              <p>-6</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[157px]">
              <p>3.00</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2 bg-[#DAE6F299]">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[157px]">
              <p>3.00</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[330px]">
              <p>-6</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
        <div>
          <div className="flex justify-between text-black text-sm pr-[106px] py-2">
            <div className="flex gap-16">
              <p>23/05/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="flex justify-between gap-[157px]">
              <p>3.00</p>
              <p>3.00</p>
            </div>
          </div>
          <hr className="border-t border-[#7C96B1] border-[2px] " />
        </div>
      </div>
    </div>
  );
};

export default TimeOffSection;
