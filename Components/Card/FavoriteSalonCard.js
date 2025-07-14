import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const FavoriteSalonCard = () => {
  return (
    <div className="border border-[#D2D2D2] rounded-xl w-full mb-4 text-[var(--Cornflower-Blue)]">
      <div className="flex md:flex-row flex-col gap-x-8">
        {/* Image */}
        <div className="md:w-2/5 md:h-auto relative h-40 w-full">
          <Image
            src="/images/user.png"
            fill
            alt="user"
            className="object-cover rounded-md"
          />
        </div>

        {/* Text content vertically centered */}
        <div className="w-full flex flex-col pt-8 md:justify-center px-6 md:px-0">
          {/* Name of Saloon */}
          <h3 className="text-[var(--Woodsmoke)] text-xl font-medium text-left">
            Parla
          </h3>

          <span className="text-xs font-normal py-3 flex flex-row gap-x-2">
            <Image src="/location.png" height={13} width={13} alt="alt" />
            1.9 Km
          </span>

          <div className="flex items-center text-[13px] my-3">
            <div className="flex">
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star fill="#FFCB45" stroke="none" />
              <Star stroke="#FFCB45" />
            </div>
            <span className="ml-2">(4.5) 120 Reviews</span>
          </div>

          <div className="flex flex-row gap-x-2">
            <div className="flex gap-x-2">
              <Image src="/x.png" width={9} height={9} alt="offer" />
              <span className="text-sm font-normal text-[#8696BB]">Offer</span>
            </div>
            <div className="flex gap-x-1">
              <Image src="/tag.png" width={13} height={13} alt="offer" />
              <span className="text-sm font-normal text-[#8696BB]">10%</span>
            </div>
          </div>

          <div className="flex flex-row justify-end my-6 items-center w-full">
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
