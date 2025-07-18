import Image from "next/image";
import React from "react";

function NotificationCard({ notification }) {
  const img = `${notification?.createdBy?.image}`;
  return (
    <div className="flex justify-between space-x-3 px-2 py-3 bg-white">
      <div className="flex flex-row gap-x-3">
        <div className="relative h-18 w-18 ">
          <Image
            src={img || "/images/courtney.png"}
            fill
            className=" object-cover rounded-full"
            alt="NOTIFY"
          />
        </div>
        <div className="flex flex-col justify-around">
          <span className="font-semibold text-[#213241] text-lg">
            {notification?.createdBy?.firstName}{" "}
            {notification?.createdBy?.lastName}
          </span>
          <span className="font-medium text-[#8593A8]  text-base block">
            {notification?.title}
          </span>
          <span className="font-normal text-[#8593A8] text-base">
            {notification?.message}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        {" "}
        <span className="font-normal text-[#8593A8] text-[20px]"></span>
      </div>
    </div>
  );
}

export default NotificationCard;
