import React from "react";
import Image from "next/image";

const AppointmentCard = ({ status }) => {
  return (
    <>
      {/* Card section with rounded top only */}
      <div className="bg-white rounded-t-[11px] border border-[#BBBBBB] border-b-0">
        <div className="flex md:flex-row flex-col">
          {/* Left side: map or picture */}
          <div className="relative md:w-111 md:h-58 h-40">
            <Image
              src="/images/maps.png"
              alt="Map"
              fill
              className="object-cover rounded-t-[11px]"
            />
          </div>

          {/* Right side: content */}
          <div className="flex-1">
            <div className="px-4 md:pt-7">
              {status === "delay" && (
                <div className="text-[#758BFD] px-2 py-1 mb-2 flex md:justify-end justify-center w-full">
                  Delay
                </div>
              )}
              <div className="flex md:flex-row md:justify-between text-lg md:text-[22px] font-normal gap-4  md:text-left">
                <div className="flex flex-col space-y-1">
                  <p className="text-[#8696BB]">Appointments No</p>
                  <p className="text-[#8696BB]">Beauty Expert</p>
                  <p className="text-[#8696BB]">Date:</p>
                  <p className="text-[#8696BB]">Service</p>
                  <p className="text-[#252525] text-lg font-bold">Asume Dere</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p>Y2344799</p>
                  <p>Bulk o</p>
                  <p>21 August Sail, 21 Thus</p>
                  <p>Face care</p>
                  <p className="text-[var(--orange)] font-semibold">$17,343</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange footer with rounded bottom only */}
      <div
        className="rounded-b-[11px]   h-8  md:h-16 text-white flex justify-center items-center 
        bg-[var(--orange)]"
      >
        Assistant
      </div>
    </>
  );
};

export default AppointmentCard;
