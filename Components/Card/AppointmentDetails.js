import Image from "next/image";
import React from "react";
const AppointmentDetails = () => {
  return (
    <div className="px-3 bg-white border-b border-b-[#EFEEEE]">
      <h3 className="text-[var(--color-dark)] font-medium text-xl">
        Explaintion
      </h3>
      <h3 className="text-[var(--color-dark)] font-medium text-xl">Busy</h3>
      <div className="flex flex-row justify-between">
        <div>
          {" "}
          <p className="text-[#8696BB]">Appointments No</p>
          <p className="text-[#8696BB]">Beauty Expert</p>
          <p className="text-[#8696BB]">Date:</p>
          <p className="text-[#8696BB]">Service</p>
          <p className="text-[#252525] text-lg font-bold">Man Cave</p>
          <div className="relative w-100 h-25 my-3">
            {/* Ideally replace src with your own or fallback */}
            <Image
              src="/images/maps.png"
              alt="Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-lg">
          {" "}
          <p>Y2344799</p>
          <p>Bulk o</p>
          <p>21 Augues Sail, 21 Thus</p>
          <p> Face care</p>
          <p className="text-[var(--orange)] font-semibold">$17,343</p>
          <div className="my-3">
            <p className="text-[#18191A] text-[20px] font-medium">
              Kadikoy,Istanbul
            </p>
            <p className="text-[#18191A80] text-base font-medium">
              Bagdat Caddies 19/2
            </p>
            <p className="text-[#18191A80] text-base font-medium">
              Bagdat Caddies 19/2
            </p>
            <div className="flex flex-row">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
