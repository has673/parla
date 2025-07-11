"use client";
import { useBooking } from "@/Context/BookingContext";
import React, { useState, useEffect } from "react";
import { PaymentTracker } from "../../../../Components/Tracker";

import Image from "next/image";
import DiscountModal from "../../../../Components/Modals/DiscountModals";
import { useUser } from "@/Context/userContext";
import { ArrowDown } from "lucide-react";

const Payment = () => {
  const [noteEnabled, setNoteEnabled] = useState(true);
  const [note, setNote] = useState("");
  const { booking } = useBooking();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [discountData, setDiscountData] = useState(null);
  const { token } = useUser();
  const [offers, setOffers] = useState([]);
  const branchId = booking?.branchId;
  const date = booking?.date;
  // Return the effective price after
  // discount
  const discountCalculate = () => {
    const basePrice = Number(booking?.price);

    // Percentage-based discount (preferred)
    if (discountData?.discount) {
      const percentage = discountData.discount / 100;
      return basePrice * percentage;
    }

    // Fixed discount (e.g. discounted price provided)
    if (booking?.discount && booking.discountDetail?.discountPrice) {
      return basePrice - Number(booking.discountDetail.discountPrice);
    }

    // No discount available
    return 0;
  };

  // Return the total amount to be paid
  const total = () => {
    const basePrice = Number(booking?.price);
    if (booking.discount && booking.discountDetail) {
      return Number(booking.discountDetail.discountPrice);
    } else if (discountData) {
      const percentage = discountData.discount / 100;
      const value = booking?.price * percentage;
      return basePrice - value;
    } else {
      return Number(booking.price);
    }
  };
  const [activeTab, setActiveTab] = useState("new");

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const getOffers = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        branchId,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getOffers?${query}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = await response.json();
      setOffers(data?.data || []);
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getOffers();
    }
  }, [token]);
  const filteredOffers = offers.filter((offer) => {
    const bookingDate = new Date();
    const startDate = new Date(offer.startDate);
    const endDate = new Date(offer.endDate);
    return bookingDate >= startDate && bookingDate <= endDate;
  });

  const getDiscountId = (data) => {
    setDiscountData(data);
  };

  console.log(discountData);
  return (
    <>
      <div className="flex justify-center my-4">
        {" "}
        <PaymentTracker />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 py-6 px-10">
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
      {/* Card Tabs */}
      <div className="w-full px-10">
        <div className="flex justify-between px-2 space-x-6 mb-4">
          <button
            className={`px-4 py-2  text-[22px] font-medium ${
              activeTab === "saved"
                ? "border-b-3 border-b-[var(--orange)]"
                : "text-black"
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved Card
          </button>
          <button
            className={`px-4 py-1  text-[22px] font-medium ${
              activeTab === "new"
                ? "border-b-3 border-b-[var(--orange)]"
                : "text-black"
            }`}
            onClick={() => setActiveTab("new")}
          >
            New Card
          </button>
        </div>

        {/* New Card Form */}
        {activeTab === "new" && (
          <div className="p-6 bg-white w-full ">
            <div className="my-2">
              <input
                className="border border-[#7B7B7B] rounded-xl h-11 text-black w-full p-2"
                placeholder="MM/YY"
              />
              <div className="my-2 flex justify-between w-full">
                <input
                  className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                  placeholder="CVC/CVV"
                />
                <input
                  className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                  placeholder="Card Holder Name"
                />
              </div>
              <div className="my-2 flex justify-between w-full">
                <input
                  className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                  placeholder="Name of Card"
                />
                <input
                  className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                  placeholder="Card Number"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="saveCard"
                checked={noteEnabled}
                onChange={() => setNoteEnabled(!noteEnabled)}
                className="accent-[var(--orange)] w-6 h-6"
                style={{
                  boxShadow:
                    "0px 1px 3px 0px #1A1A1A14, 0px 0.5px 0px 0px #1A1A1A14",
                }}
              />
              <label
                htmlFor="saveCard"
                className="text-[13px] text-[var(--color-dark)] font-medium"
              >
                Save this Card
              </label>
            </div>
            <button className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer">
              {`Pay ($${total()})`}
            </button>
          </div>
        )}

        {activeTab === "saved" && (
          <>
            {/* Saved Card */}
            <div className="flex items-center justify-between border border-[#8F8F8F] rounded-[13px] p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/visa.svg" // replace with actual path
                  alt="Visa"
                  width={40}
                  height={30}
                />
                <div>
                  <p className="text-sm font-semibold text-black">
                    H.Daniz ( Garanti Virtual )
                  </p>
                  <p className="text-sm text-gray-500 tracking-wide">
                    4565 7782 **098
                  </p>
                </div>
              </div>
              <ArrowDown className="text-orange-500" />
            </div>

            {/* Discount Code Field */}
            <div className="flex items-center justify-between border border-[#8F8F8F]  rounded-[13px] p-4 mt-4">
              <input
                type="text"
                value={discountData ? discountData.name : "Summer offer 100"}
                placeholder="Enter Discount Code"
                defaultValue="Summer offer 100"
                className="w-full text-sm text-black focus:outline-none placeholder:text-gray-400"
              />
              <ArrowDown
                className="text-orange-500 ml-2 cursor-pointer"
                onClick={openModal}
              />
            </div>

            {/* Checkbox with highlighted label */}
            <div className="flex items-start space-x-3 mt-4">
              <p className="text-sm text-gray-700 leading-snug">
                Lorem ipsum{" "}
                <span className="text-orange-500 font-medium">
                  dolor sit amet, consectetur
                </span>{" "}
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
              </p>
            </div>
            <button className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer">
              {`Pay ($${total()})`}
            </button>
          </>
        )}
      </div>
      <DiscountModal
        onClose={closeModal}
        isOpen={open}
        offers={filteredOffers}
        getId={getDiscountId}
      />
    </>
  );
};

export default Payment;
