import React from "react";
RatingStars;
import RatingBreakdown from "../../../../Components/Card/RatingBreeakdown";
import { RatingStars } from "../../../../Components/Card/RatingCard";

const AppointmentHistory = () => {
  return (
    <div className="px-12">
      <div className="mb-4 mt-8">
        {" "}
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
      </div>

      <div className="my-4">
        {" "}
        <div className="flex justify-between">
          <h3 className="text-[var(--color-dark)] text-[20px] font-bold ">
            Service
          </h3>
          <RatingStars color="#DDDDDD" />
        </div>
        <div className="flex justify-between">
          <h3 className="text-[var(--color-dark)] text-[20px] font-bold ">
            Waiting
          </h3>
          <RatingStars />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-14">
        <div className="flex flex-col">
          <label className="text-lg text-black font-normal">
            Do you want write a comment ?
          </label>
          <textarea
            placeholder="Write Something..."
            className="bg-white border-2 rounded-[10px] pl-3 border-[#D8DADC] h-32 md:h-64"
            rows={8}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-black font-normal">
            Do you want write a comment ?
          </label>
          <textarea
            placeholder="Write Something..."
            className="bg-white border-2 rounded-[10px] pl-3 border-[#D8DADC] h-32 md:h-64"
            rows={8}
          ></textarea>
        </div>
      </div>
      <button className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold h-12 my-6 flex justify-center items-center ">
        Send
      </button>
    </div>
  );
};

export default AppointmentHistory;
