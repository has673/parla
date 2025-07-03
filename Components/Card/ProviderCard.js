import Image from "next/image";
import React from "react";

const ProviderCard = ({
  title = "Man Cave",
  image = "/images/user.png",
  distance = "1.8km",
  rating = 4.5,
  reviewCount = 654,
  tags = ["Offer", "Discount"],
  gender = "both", // "male", "female", or "both"
  isFavorite = false,
}) => {
  return (
    <div className="border border-[#D2D2D2] rounded-xl w-full mb-4 px-4 py-3 md:h-51 flex items-center gap-4">
      {/* Image */}
      <div className="relative  md:h-51 rounded-lg overflow-hidden">
        <Image src={image} fill alt="user" className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1">
        {/* Title + distance + reviews */}
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-[#18191A] text-sm font-semibold">{title}</h3>
            <span className="text-xs text-gray-500">
              {distance} • {reviewCount} reviews
            </span>
          </div>

          {/* Favorite icon */}
          <Image
            src={isFavorite ? "/images/heart-filled.png" : "/images/heart.png"}
            width={16}
            height={16}
            alt="heart"
            className="cursor-pointer"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={
                i < Math.floor(rating)
                  ? "/images/star-filled.png"
                  : "/images/star-outline.png"
              }
              alt="star"
              width={13}
              height={13}
            />
          ))}
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-1 text-xs text-gray-600">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-1">
              <Image src="/images/tag.png" width={13} height={13} alt="tag" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gender icons */}
      <div className="flex flex-col items-center gap-1">
        {(gender === "male" || gender === "both") && (
          <Image src="/images/male.png" width={24} height={24} alt="male" />
        )}
        {(gender === "female" || gender === "both") && (
          <Image src="/images/female.png" width={24} height={24} alt="female" />
        )}
      </div>
    </div>
  );
};

export default ProviderCard;
