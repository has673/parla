"use client";
import { Star, Heart, HeartOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FavoriteCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="border border-[#D2D2D2] rounded-xl text-[#8696BB] w-full md:h-51 mb-4 relative">
      {/* Heart Icon Top Right */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-red-500"
        aria-label="Toggle Favorite"
      >
        {isFavorite ? <Heart fill="#D83E3E" stroke="#D83E3E" /> : <Heart />}
      </button>

      <div className="flex md:flex-row  gap-x-8 flex-col">
        <div className="md:w-2/5 md:h-51 relative h-45 w-full">
          <Image
            src="/images/user.png"
            fill
            alt="user"
            className="object-cover rounded-md"
          />
        </div>

        <div className="my-2 w-full">
          {/* Name */}
          <h3 className="text-[#18191A] text-xl font-medium text-center sm:text-left">
            Parla
          </h3>

          <div className="flex flex-col py-4 mb-3">
            {/* Role */}
            <span className="text-base font-normal py-2 flex flex-row items-center gap-x-2">
              <Image src="/images/male.png" height={13} width={13} alt="alt" />
              Male Hair Dresser
            </span>

            {/* Rating */}
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

            {/* Shop Name */}
            <span className="text-base font-normal py-2">Man Cave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
