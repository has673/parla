import Image from "next/image";
import React from "react";
import DateSelector from "../../../../Components/DateSelector";

const Location = () => {
  return (
    <div className="px-14">
      <DateSelector />
      <div className="w-full flex justify-center">
        <div className="max-w-[1024px] w-full">
          <Image
            src="/images/location.png"
            width={1024}
            height={529}
            alt="location"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
