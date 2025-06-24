import Image from "next/image";
import React from "react";

function NotificationCard({ username, message, timestamp, number }) {
  return (
    <div className="flex justify-between space-x-3 px-2 py-3 bg-white">
      <div className="flex flex-row gap-x-3">
        <div className="relative h-18 w-18 ">
          <Image
            src="/images/courtney.png"
            fill
            className=" object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col justify-around">
          <span className="font-medium text-[#213241] text-[20px] block">
            {username}
          </span>
          <span className="font-normal text-[#8593A8] text-[20px]">
            {message}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        {" "}
        <span className="font-normal text-[#8593A8] text-[20px]">
          {timestamp}
        </span>
        <div className="flex justify-end">
          {" "}
          <div className="bg-[var(--orange)]  text-[#F6FBFF] flex justify-center items-center h-5 w-5 font-normal text-base rounded-full p-2 ">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
