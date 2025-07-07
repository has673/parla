import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const FavoriteSalonCard = () => {
  return (
    <div className="border border-[#D2D2D2] rounded-xl w-full md:h-51 mb-4 text-[#8696BB]">
      <div className="flex md:flex-row gap-x-8 flex-col ">
        {" "}
        <div className="md:w-2/5 md:h-51 relative h-30 w-full ">
          <Image
            src="/images/user.png"
            fill
            alt="user"
            className="object-cover rounded-md"
          />
        </div>
        <div className="my-5 w-full">
          {/* Name of Saloon*/}
          <h3 className="text-[#18191A] text-xl font-medium text-center sm:text-left">
            Parla
          </h3>
          <span className="text-xs font-normal py-3 flex flex-row gap-x-2 ">
            <Image src="/location.png" height={13} width={13} alt="alt" />
            1.9 Km
          </span>
          <div className="flex items-center text-[13px] my-3 ">
            <div className="flex">
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star stroke="#FFCB45" />
            </div>
            <span className="ml-2">(4.5) 120 Reviews</span>
          </div>
          <div className="flex flex-row justify-end my-6  items-center w-full">
            <div className="flex flex-row">
              <Image src="/images/male.png" width={40} height={40} alt="icon" />
              <Image
                src="/images/female.png"
                width={40}
                height={41}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSalonCard;
