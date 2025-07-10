"use client";
import { useBooking } from "@/Context/BookingContext";
import React, { useState } from "react";
const Payment = () => {
  const [noteEnabled, setNoteEnabled] = useState(true);
  const [note, setNote] = useState("");
  const { booking } = useBooking();
  // Return the effective price after discount
  const discountCalculate = () => {
    if (!booking.discount || !booking.discountDetail) {
      return 0;
    }

    return booking.discountDetail.discountPrice;
  };

  // Return the total amount to be paid
  const total = () => {
    if (booking.discount && booking.discountDetail) {
      return Number(booking.discountDetail.discountPrice);
    } else {
      return Number(booking.price);
    }
  };

  return (
    <>
      {" "}
      <div className="flex flex-col md:flex-row justify-between gap-6 p-6">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex justify-between items-start text-[var(--color-dark)]">
            <div>
              <p className="font-semibold text-[16px]">
                1 {booking.serviceName}
              </p>
              <p className="text-[13px] font-normal text-[#1E232CB8]">
                professional {booking.employeeName}
              </p>
            </div>
            <p className="text-[#ff6b00] font-semibold text-[16px]">
              {" "}
              $ {booking.price}
            </p>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <input
              type="checkbox"
              id="addNote"
              checked={noteEnabled}
              onChange={() => setNoteEnabled(!noteEnabled)}
              className="accent-[var(--orange)] w-6 h-6 text-white"
            />
            <label
              htmlFor="addNote"
              className="text-[13px] text-[var(--color-dark)] font-normal"
            >
              Add Note
            </label>
          </div>

          <hr className="border-t border-[#E3E3E3]" />

          {/* Price Summary */}
          <div className="space-y-1 text-base text-[var(--color-dark)]">
            <div className="flex justify-between">
              <span className="text-[var(--color-dark)]">Sub Total</span>
              <span> $ {booking.price}</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span className="text-[var(--color-dark)]">Discount</span>
              <span className="text-[#1C1A1A]">
                {" "}
                $ {`${discountCalculate()}`}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-[var(--orange)]">
              <span>Total</span>
              <span> $ {`${total()}`}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Note Input */}
        <div className="w-full md:w-1/2">
          {noteEnabled && (
            <textarea
              className="w-full h-26 p-3 border border-[#848484] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write Something…"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="  p-6 bg-white w-full">
        <h2 className="text-[22px] font-medium text-black border-b-3 border-b-[var(--orange)] w-14 ">
          Card
        </h2>
        <div className="my-2">
          {" "}
          <input
            className="border border-[#7B7B7B] rounded-xl h-11 text-black w-full p-2"
            placeholder="MM/YY"
          ></input>
          <div className="my-2 flex justify-between w-full">
            {" "}
            <input
              className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
              placeholder="CVC/CVV"
            ></input>{" "}
            <input
              className="border border-[#999999] rounded-xl h-11 text-black w-[45%]   p-2"
              placeholder="Card Holder Name "
            ></input>
          </div>
          <div className="my-2 flex justify-between w-full">
            {" "}
            <input
              className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
              placeholder="Name of Card"
            ></input>{" "}
            <input
              className="border border-[#999999] rounded-xl h-11 text-black w-[45%]   p-2"
              placeholder=" Card Number "
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="addNote"
            checked={noteEnabled}
            onChange={() => setNoteEnabled(!noteEnabled)}
            className="accent-[var(--orange)] w-6 h-6 "
            style={{
              boxShadow:
                "0px 1px 3px 0px #1A1A1A14, 0px 0.5px 0px 0px #1A1A1A14",
            }}
          />
          <label
            htmlFor="addNote"
            className="text-[13px] text-[var(--color-dark)] font-medium"
          >
            Save this Card
          </label>
        </div>
        <button className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer">
          {`Pay (${booking.price})`}
        </button>
      </div>
    </>
  );
};

export default Payment;
