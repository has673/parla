// components/StampCardList.tsx
import React from "react";
import StampCard from "./Card/StampCard";

const stampCardData = [
  {
    id: 1,
    name: "Man Cave",

    rating: 4.5,
    reviews: 120,
    shop: "Man Cave",
    image: "/images/user.png",
    genderIcon: "/images/male.png",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Man Cave",

    rating: 4.0,
    reviews: 89,
    shop: "Glow Up",
    image: "/images/user.png",
    genderIcon: "/images/female.png",
    isFavorite: false,
  },
];

const StampCardList = () => {
  return (
    <div className="grid gap-4">
      {stampCardData.map((item) => (
        <StampCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default StampCardList;
