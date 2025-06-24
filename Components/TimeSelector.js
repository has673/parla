"use client";
import React, { useState } from "react";
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 justify-center py-4">
      {timeSlots.map((time) => (
        <div
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`py-2 rounded-xl cursor-pointer md:text-2xl font-semibold md:h-18 flex justify-center items-center md:w-44 w-22 h-15 text-base
        ${
          selectedTime === time
            ? "bg-orange-500 text-white"
            : "bg-[#D9D9D94D] text-black"
        }
      `}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeSelector;
