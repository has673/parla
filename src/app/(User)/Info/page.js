import Image from "next/image";
import React from "react";
import { Send, Link2 } from "lucide-react";

const page = () => {
  const schedule = [
    { day: "Monday", start: "11:00", end: "10:30" },
    { day: "Tuesday", start: "11:00", end: "11:30" },
    { day: "Wednesday", start: "12:00", end: "12:30" },
    { day: "Thursday", start: "01:00", end: "01:30", isHighlighted: true },
    { day: "Friday", start: "02:00", end: "02:30" },
    { day: "Saturday", start: "03:00", end: "03:30" },
    { day: "Sunday", closed: true },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center px-8 py-2">
        {" "}
        <Image
          src="/images/Address.png"
          width={1038}
          height={242}
          className="w-full h-full"
          alt="map"
        />
      </div>
      <div className=" px-8">
        {" "}
        <h3 className="text-[var(--color-dark)] text-lg font-semibold">
          Address
        </h3>
        <span className="text-[#000000CF] text-[13px] font-mdeium">
          ul. Generała Ziętka Jerzego 54, Mysłowice 41-412
        </span>
      </div>
    </div>
  );
};

export default page;
