"use client";

import React from "react";

const ServiceCard = ({ service, selected, onSelect }) => {
  const isSelected = selected;

  return (
    <div
      className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-colors my-3
        ${isSelected ? "border-[var(--orange)]" : "border-gray-300"}`}
      onClick={onSelect}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Beep Indicator */}
        <span
          className={`w-5 h-5 rounded-full border-2 p-0.5 
            ${isSelected ? "border-[var(--orange)]" : "border-gray-400"}`}
        >
          <span
            className={`block w-full h-full rounded-full 
              ${isSelected ? "bg-[#ff6b00]" : "bg-gray-400"}`}
          ></span>
        </span>

        {/* Text Section */}
        <div className="flex flex-col">
          <span className="font-medium text-[#000000]">
            {service.serviceName}
          </span>
          <span className="text-[#00000080] text-sm font-normal">
            {service.serviceMints} minutes
          </span>
        </div>
      </div>

      {/* Right side */}
      <span className="font-medium text-lg">{service.price}</span>
    </div>
  );
};

export default ServiceCard;
