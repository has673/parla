import { Star } from "lucide-react";
import React from "react";

function RatingBreakdown({ ratings, average, totalReviews }) {
  // `ratings` should be an array of {stars: number, percent: number}

  return (
    <div className="bg-[#F8F8F8] p-4 rounded-lg">
      <div className="flex">
        {/* Left side: Rating breakdown */}
        <div className="flex-1 space-y-2">
          {ratings?.map((item) => (
            <div key={item.stars} className="flex items-center space-x-2">
              <span className="flex flex-row gap-x-2 text-[#333333]">
                {item.stars} <Star fill="#E4A70A" stroke="none" />
              </span>
              <div className="flex  md:w-1/3  w-full rounded-sm h-2 ">
                <div
                  className="bg-[#FFB400] h-2 rounded-full"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Average score */}
        <div className="flex flex-col items-center ml-6">
          <span className="md:text-5xl text-4xl font-bold text-[#333333]">
            {average.toFixed(1)}
          </span>
          <div className="flex">
            {/* Display filled or outline stars based on average */}
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.round(average) ? "⭐" : "☆"}</span>
            ))}
          </div>
          <span>{totalReviews} Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default RatingBreakdown;
