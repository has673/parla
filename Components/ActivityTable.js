"use client";
import React from "react";

const ActivityTable = ({ data }) => {
  return (
    <div className="w-full  ">
      {/* Header Row */}
      <div className="grid grid-cols-3 font-medium text-xl text-[var(--color-dark)] mb-2 px-4">
        <span>Points</span>
        <span>Your Activity</span>
        <span>Date</span>
      </div>

      {/* Data Rows */}
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 px-4 py-2 text-lg font-medium"
        >
          <span className="text-orange-500 font-semibold">{item.points}</span>
          <span>{item.activity}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

// Sample data
const activityData = [
  { points: 14, activity: "Appointment", date: "22 Aug Tuesday, 01:00" },
  { points: 14, activity: "Appointment", date: "22 Aug Tuesday, 01:00" },
  { points: 14, activity: "Appointment", date: "22 Aug Tuesday, 01:00" },
  { points: 14, activity: "Appointment", date: "22 Aug Tuesday, 01:00" },
  { points: 14, activity: "Appointment", date: "22 Aug Tuesday, 01:00" },
];

// Main component
const ActivityScreen = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-white">
      <div className="w-full ">
        <ActivityTable data={activityData} />
      </div>
    </div>
  );
};

export default ActivityScreen;
