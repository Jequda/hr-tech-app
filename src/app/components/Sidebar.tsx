import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex-col gap-[48px] ml-[72px] max-sm:hidden  ">
      <div className="w-[225px] p-6 bg-white mt-[-30px] mb-[16px] rounded-[16px]">
        <div className="space-y-4 ">
          <div className="flex text-black gap-[8px]">
            <Image
              src="/telephone.svg"
              alt="telephone"
              width={16}
              height={16}
              className="h-auto"
            />
            07911 654321
          </div>
          <div className="flex text-black gap-[8px] w-[177px]">
            <Image
              src="/email.svg"
              alt="email"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            avd.yana@videorollnet
          </div>{" "}
          <div className="flex text-black gap-[8px]">
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            <Image
              src="/twitter.svg"
              alt="twitter"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-[225px] p-6 bg-white mb-[16px] rounded-[16px]">
        <div className="">
          <div className="  text-black ">Hire Date</div>
          <div className="mt-4 mb-2 text-black ">Sep. 3,2020</div>{" "}
          <div className=" text-black ">3y - 9m - 20d</div>
        </div>
      </div>
      <div className="w-[225px] p-6 bg-white mb-[16px] rounded-[16px]">
        <div className="">
          <div className="flex text-black gap-[8px]">
            <Image
              src="/sharp.svg"
              alt="number"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            5
          </div>
          <div className="flex text-black gap-[8px]">
            <Image
              src="/clock.svg"
              alt="time"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            Full-Time
          </div>
          <div className="flex text-black gap-[8px]">
            <Image
              src="/group.svg"
              alt="group"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            Operations
          </div>
          <div className="flex text-black gap-[8px]">
            <Image
              src="/world.svg"
              alt="geography"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            Europe
          </div>
          <div className="flex text-black gap-[8px]">
            <Image
              src="/geo.svg"
              alt="city"
              width={16}
              height={16}
              className="w-auto h-auto"
            />
            London, UK
          </div>
        </div>
      </div>
      <div className="w-[225px] p-6 bg-white rounded-[16px]">
        <div className="space-y-4 ">
          <div className="flex text-black gap-[8px]">Direct Reports</div>
          <div className="flex-col">
            <div className="flex text-black gap-[8px]">
              <Image
                src="/user.svg"
                alt="colleagues"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
              Shane
            </div>
            <div className="flex text-black gap-[8px]">
              <Image
                src="/user.svg"
                alt="colleagues"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
              Nathan
            </div>
            <div className="flex text-black gap-[8px]">
              <Image
                src="/user.svg"
                alt="colleagues"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
              Mitchell
            </div>
            <div className="flex text-black gap-[8px]">
              <Image
                src="/user.svg"
                alt="colleagues"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
              Philip
            </div>
            <div className="flex text-black gap-[8px]">
              <Image
                src="/user.svg"
                alt="colleagues"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
              4 More...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
