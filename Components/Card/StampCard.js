// components/StampCard.tsx
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import Badge from "./Badge";

const StampCard = ({ data }) => {
  const {
    name,

    rating,
    reviews,
    shop,
    image,

    isFavorite,
  } = data;

  return (
    <div className="border border-[#D2D2D2] rounded-xl text-[#8696BB] w-full md:h-51 mb-4 relative">
      {/* Heart Icon Top Right */}
      <button
        className="absolute top-2 right-2 text-red-500"
        aria-label="Toggle Favorite"
      >
        {isFavorite ? (
          <Heart fill="#D83E3E" stroke="#D83E3E" />
        ) : (
          <Heart stroke="#D83E3E" />
        )}
      </button>

      <div className="flex md:flex-row gap-x-8 flex-col">
        <div className="md:w-2/5 md:h-51 relative h-45 w-full">
          <Image
            src={image}
            fill
            alt="user"
            className="object-cover rounded-md"
          />
        </div>

        <div className="my-2 w-full">
          <h3 className="text-[#18191A] text-xl font-medium text-center sm:text-left">
            {name}
          </h3>

          <div className="flex flex-col py-4 mb-3">
            <div className="flex items-center text-[13px] my-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <Star
                    key={i}
                    fill={i < Math.floor(rating) ? "#FFCB45" : "none"}
                    stroke="#FFCB45"
                  />
                ))}
              </div>
              <span className="ml-2">
                ({rating}) {reviews} Reviews
              </span>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex space-x-2 px-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Badge
                  key={i}
                  className="h-12 w-12 bg-white rounded-full flex justify-center items-center "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampCard;
