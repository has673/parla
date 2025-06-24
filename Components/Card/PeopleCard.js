import Image from "next/image";
import React from "react";

const PeopleCard = ({ Name }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className=" md:w-20 md:h-20 h-14 w-14 relative mb-2">
        <Image
          src="/images/courtney.png"
          alt="Abdurrahman K."
          fill
          className="rounded-full object-cover"
        />
      </div>
      <span className="text-[#1D1B1B] text-[13px] font-medium text-center">
        {Name}
      </span>
    </div>
  );
};

export default PeopleCard;
