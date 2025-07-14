"use client";
import { useBooking } from "@/Context/BookingContext";
import React, { useState, useEffect } from "react";
import { PaymentTracker } from "../../../../Components/Tracker";

import DiscountModal from "../../../../Components/Modals/DiscountModals";
import { useUser } from "@/Context/userContext";
import PaymentTabs from "../../../../Components/PaymentTab";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
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

  return (
    <div className="md:px-10 px-8">
      <div className="flex justify-center my-4">
        {" "}
        <PaymentTracker />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 py-6 ">
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

      <Elements stripe={stripePromise}>
        <PaymentTabs
          total={total}
          discountData={discountData}
          openModal={openModal}
          noteEnabled={noteEnabled}
          setNoteEnabled={setNoteEnabled}
        />
      </Elements>

      <DiscountModal
        onClose={closeModal}
        isOpen={open}
        offers={filteredOffers}
        getId={getDiscountId}
      />
    </div>
  );
};

export default Payment;
