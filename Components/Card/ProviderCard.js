import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProviderCard = ({ provider }) => {
  return (
    <div className="border border-[#D2D2D2] rounded-xl w-full md:h-51 mb-4">
      <div className="flex md:flex-row gap-x-8 flex-col ">
        {" "}
        <div className="md:w-2/5 md:h-51 relative h-30 w-full ">
          <Image
            src={provider.image}
            fill
            alt="user"
            className="object-cover rounded-md"
          />
        </div>
        <div className="my-5 w-full">
          <h3 className="text-[var(--Woodsmoke)] text-xl font-semibold text-center sm:text-left">
            {provider.firstName} {provider.lastName}
          </h3>

          <div className="flex flex-col py-4">
            {" "}
            <span className="text-[#5A5A5A] text-xs font-semibold py-2 flex flex-row gap-x-2">
              {provider.city} , {provider.district}
            </span>
          </div>
          <div className="flex flex-row justify-between my-6  items-center w-full">
            <div className="mt-2 flex items-center justify-center gap-1 text-[] text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" size={16} />
              ))}
              <span className="text-black font-medium ml-1">5.0</span>
              <span className="text-[#000000]">(110)</span>
            </div>
            <div className="flex flex-row">
              <Image src="/images/male.png" width={40} height={40} alt="icon" />
              <Image
                src="/images/female.png"
                width={40}
                height={41}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
