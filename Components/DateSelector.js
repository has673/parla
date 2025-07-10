"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

const DateSelector = ({ workingHours }) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );

  const getNext7Days = () => {
    const today = dayjs();
    return Array.from({ length: 25 }, (_, i) => today.add(i, "day"));
  };

  return (
    <div>
      {" "}
      <div className=" grid grid-cols-8 gap-y-4 py-4 ">
        {getNext7Days().map((date) => {
          const isSelected = date.format("YYYY-MM-DD") === selectedDate;

          return (
            <div
              key={date.format("YYYY-MM-DD")}
              onClick={() => setSelectedDate(date.format("YYYY-MM-DD"))}
              className={`flex flex-col items-center  justify-center w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer gap-x

                
    ${
      isSelected
        ? "bg-[var(--orange)] text-white"
        : "bg-[#EEEEEE] text-[#1E293B]"
    }
  `}
            >
              <span className="text-lg ms:text-2xl font-semibold">
                {date.format("DD")}
              </span>
              <span className="text-md md:text-2xl">{date.format("dd")}</span>
            </div>
          );
        })}
      </div>
      <span className="text-[#1D1B1B] font-semibold text-[22px]">
        {selectedDate}
      </span>
    </div>
  );
};

export default DateSelector;
