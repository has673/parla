import React from "react";
import PeopleCard from "../../../../Components/Card/PeopleCard";
import Image from "next/image";
const Hair = () => {
  return (
    <div>
      <div className="flex flex-row  justify-around border-b border-b-[#CFCBCB] px-3 py-6">
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
      </div>
      <div>
        <div className="px-13 flex flex-row my-4 gap-x-2">
          <div className="relative w-24 h-24">
            <Image
              src="/images/courtney.png"
              alt="Abdurrahman K."
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-[#1D1B1B] font-medium text-[22px] my-4 max-w-25">
            Jane Cooper
          </span>
        </div>

        <div className="flex justify-center mt-6 px-2">
          <div>
            <Image
              src="/images/main.png"
              width={1025}
              height={417}
              alt="Main Image"
            />
            <div className="flex flex-row justify-end">
              {" "}
              <div className="flex flex-row gap-x-3 my-2">
                <div className="flex items-center justify-center w-6 h-6 border border-[#4D4D4D] rounded-full hover:bg-gray-100 transition">
                  <Image
                    src="/images/fb.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />
                </div>

                <div className="flex items-center justify-center w-6 h-6 border border-[#4D4D4D] rounded-full hover:bg-gray-100 transition">
                  <Image
                    src="/images/insta.png"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex items-center justify-center w-6 h-6 border border-[#4D4D4D] rounded-full hover:bg-gray-100 transition">
                  <Image src="/images/x.png" alt="fb" width={16} height={16} />
                </div>
                <div className="flex items-center justify-center w-6 h-6 border border-[#4D4D4D] rounded-full hover:bg-gray-100 transition">
                  <Image
                    src="/images/share.png"
                    alt="fb"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hair;
