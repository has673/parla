"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AppointmentModal } from "../../../../Components/Modals/AppointmentModal";

const SingleAppointment = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className="px-4">
      <div className="bg-[#FFC805] text-white rounded-md w-full text-lg font-medium h-10 mt-8 mb-2 flex py-2 justify-center items-center ">
        Delay +30 Mint
      </div>
      <div className="md:px-3 bg-white border-b border-b-[#EFEEEE] px-0">
        <h3 className="text-[var(--color-dark)] font-medium md:text-xl text-base">
          Explaintion
        </h3>
        <h3 className="text-[var(--color-dark)] font-medium  md:text-xl text-base">
          Busy
        </h3>
        <div className="flex flex-row justify-between">
          <div>
            {" "}
            <p className="text-[#8696BB]">Appointments No</p>
            <p className="text-[#8696BB]">Beauty Expert</p>
            <p className="text-[#8696BB]">Date:</p>
            <p className="text-[#8696BB]">Service</p>
            <p className="text-[#252525] text-lg font-bold">Man Cave</p>
            <div className="relative w-100 h-25 my-3 ">
              {/* Ideally replace src with your own or fallback */}
              <Image
                src="/images/maps.png"
                alt="Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:text-lg text-sm ">
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

      <div className="flex md:justify-end justify-center">
        <div className="flex flex-row my-3 gap-x-2">
          <button className="border rounded-[10px] text-[var(--orange)] bg-white text-lg flex justify-center items-center font-medium   px-12 py-2 cursor-pointer">
            Cancel
          </button>
          <button
            className="border rounded-[10px] text-white bg-[var(--orange)] text-lg flex justify-center items-center font-medium  px-12 py-2 cursor-pointer "
            onClick={openModal}
          >
            Confirm
          </button>
        </div>
      </div>
      <AppointmentModal isOpen={open} onClose={closeModal} />
    </div>
  );
};

export default SingleAppointment;
