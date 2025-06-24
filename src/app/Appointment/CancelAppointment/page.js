"use client";
import Image from "next/image";
import { useState } from "react";
import { CancelModal } from "../../../../Components/Modals/CancelModal";

const CancelAppointment = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className="md:px-10  px-6 w-full">
      <div className=" pt-4 bg-white ">
        <div className="flex flex-row justify-between ">
          <div className="md:text-lg text-sm">
            {" "}
            <p className="text-[#8696BB]">Appointments No</p>
            <p className="text-[#8696BB]">Beauty Expert</p>
            <p className="text-[#8696BB]">Date:</p>
            <p className="text-[#8696BB]">Service</p>
            <p className="text-[#252525] md:text-lg text-base font-bold">
              Man Cave
            </p>
            <div className="relative md:w-100 md:h-25 my-3">
              {/* Ideally replace src with your own or fallback */}
              <Image
                src="/images/maps.png"
                alt="Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:text-lg text-sm">
            {" "}
            <p>Y2344799</p>
            <p>Bulk o</p>
            <p>21 Augues Sail, 21 Thus</p>
            <p> Face care</p>
            <p className="text-[var(--orange)] font-semibold">$17,343</p>
            <div className="my-3">
              <p className="text-[#18191A] md:text-[20px] text-base  font-medium">
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
      <div className="flex md:flex-row md:justify-between  flex-col my-3  ">
        <div className="md:w-2/5">
          <span className="text-lg font-semibold text-[#1E232C]">
            Why do you want to cancel your appointment?
          </span>
          <div className="flex gap-x-3">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              htmlFor="vehicle1"
              className="text-[var(--darkGrey)] text-base font-medium"
            >
              Refund to user Card
            </label>
          </div>
          <div className="flex gap-x-3">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              htmlFor="vehicle1"
              className="text-[var(--darkGrey)] text-base font-medium"
            >
              To User Wallet Account
            </label>
          </div>
          <div className="my-3">
            {" "}
            <div className="flex flex-col gap-1 border-b border-[#E3E3E3] pb-2 ">
              <div className="flex flex-row justify-between w-full ">
                <span className="text-sm font-semibold text-[#1E232C]">
                  1 Classic male haircut
                </span>
                <span className="text-sm font-bold text-[var(--orange)]">
                  $68,898
                </span>
              </div>
              <span className="text-[10px] text-[#1E232CC2] font-normal px-3">
                Lorem Ipsum is simply dummy text
              </span>{" "}
            </div>
            <div className="flex flex-col  border-b border-[#E3E3E3] pb-2 mt-4">
              <div className="flex flex-row justify-between w-full ">
                <span className="text-sm font-semibold text-[#1E232C]">
                  1 Classic male haircut
                </span>
                <span className="text-sm font-bold text-[var(--orange)]">
                  $68,898
                </span>
              </div>
              <span className="text-[10px] text-[#1E232CC2] font-normal px-3">
                Lorem Ipsum is simply dummy text
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5  md:flex-col">
          {" "}
          <textarea
            placeholder="Write Something..."
            className="bg-white border-2 rounded-[10px] pl-3 border-[#D8DADC] md:h-22 md:w-88 w-84 h-18"
          ></textarea>
          <div className="my-3">
            {" "}
            <div className="flex flex-col gap-1 pb-2 ">
              <div className="flex flex-row justify-between w-full ">
                <span className="text-sm font-semibold text-[#1E232C]">
                  1 Classic male haircut
                </span>
                <span className="text-sm font-bold text-[var(--orange)]">
                  $68,898
                </span>
              </div>
            </div>
            <div className="flex flex-col   mt-4">
              <div className="flex flex-row justify-between w-full ">
                <span className="text-sm font-semibold text-[#1E232C]">
                  1 Classic male haircut
                </span>
                <span className="text-sm font-bold text-[var(--orange)]">
                  $68,898
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <span className="text-lg font-semibold text-[#1E232C]">
          Please Choose your refund option
        </span>
        <div className="flex flex-col ">
          <div className="flex gap-x-3">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              htmlFor="vehicle1"
              className="text-[#1E232C] md:text-[17px] text-xs font-normal"
            >
              I have a bike
            </label>
          </div>
          <span className="text-xs text-[#1E232CC2] font-normal px-6">
            Lorem Ipsum is simply dummy text
          </span>
        </div>

        <div className="flex gap-x-3">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label
            htmlFor="vehicle1"
            text-xs
            className="text-[#1E232C] md:text-[17px] text-sm font-normal"
          >
            I have a bike
          </label>
        </div>
        <span className="text-xs text-[#1E232CC2] font-normal px-6">
          Lorem Ipsum is simply dummy text 
        </span>
      </div>

      <button
        className="bg-[#405DE5] text-white rounded-[10px] w-full text-lg font-semibold h-14 my-2 justify-center items-center cursor-pointer "
        onClick={openModal}
      >
        Cancel the appointment
      </button>
      <CancelModal onClose={closeModal} isOpen={open} />
    </div>
  );
};

export default CancelAppointment;
