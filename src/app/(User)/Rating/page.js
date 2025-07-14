import React from "react";
import RatingCard from "../../../../Components/Card/RatingCard";
import RatingBreakdown from "../../../../Components/Card/RatingBreeakdown";

const Rating = () => {
  return (
    <div className="w-full p-4">
      <RatingBreakdown
        ratings={[
          { stars: 5, percent: 80 },
          { stars: 4, percent: 10 },
          { stars: 3, percent: 5 },
          { stars: 2, percent: 3 },
          { stars: 1, percent: 2 },
        ]}
        average={4.0}
        totalReviews={52}
      />
      <div className=" flex md:flex-row justify-between flex-col w-full">
        <RatingCard />
        <RatingCard />
      </div>
      <span className="text-[20px] text-[var(--orange)] flex flex-row justify-center cursor-pointer w-full my-3">
        {" "}
        View All
      </span>
    </div>
  );
};

export default Rating;
