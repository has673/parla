import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Progresstracker from "../../../../Components/Progresstracker";

const ChooseProfessional = () => {
  return (
    <div className="px-4">
      <div>
        <div className="flex flex-row gap-x-3 my-4">
          <div className="relative md:h-30 md:w-30  h-15 w-15">
            <Image
              src="/images/courtney.png"
              fill
              className=" object-cover rounded-full border border-[var(--orange)]"
            />
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="text-[22px] font-medium ">John Wick</h3>
            <div className="flex items-center gap-1 text-[#FFC700] text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" size={16} />
              ))}
              <span className="text-black font-medium ml-1">5.0</span>
              <span className="text-[#000000]">(110)</span>
            </div>
            <div className="md:w-2/5">
              {" "}
              <p className="text-base font-normal text-[#1E232C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim{" "}
                <span className="text-[var(--orange)]">Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border border-orange-500 rounded-md">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Beep Indicator */}
          <span className="w-4 h-4 rounded-full border-2 border-orange-500 p-0.5">
            <span className="block w-full h-full bg-orange-500 rounded-full"></span>
          </span>

          {/* Text Section */}
          <div className="flex flex-col">
            <span className="font-medium text-[#000000]">
              Classic Beard Cut
            </span>
            <span className="text-[#00000080] text-sm font-normal">
              30 mins
            </span>
          </div>
        </div>

        {/* Right side */}
        <span className="font-medium text-lg">40,000TI</span>
      </div>
      <div className="flex md:flex-row flex-col gap-x-3 items-center w-full justify-between my-4">
        <div className="relative w-3xl h-[78px]">
          <Image src="/images/progress.png" fill className=" object-cover" />
        </div>

        <span className="text-xl font-semibold text-[var(--orange)]">
          Continue
        </span>
      </div>
    </div>
  );
};

export default ChooseProfessional;
