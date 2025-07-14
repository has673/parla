"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { PaymentModal } from "./Modals/PaymentModal";
import toast from "react-hot-toast";
import { useBooking } from "@/Context/BookingContext";
import { Loader } from "./Loader";

const PaymentTabs = ({
  total,
  discountData,
  openModal,
  noteEnabled,
  setNoteEnabled,
}) => {
  const [activeTab, setActiveTab] = useState("new");
  const [cardName, setCardName] = useState("");
  const [cardLabel, setCardLabel] = useState("");
  const { booking, clearBooking } = useBooking();
  const stripe = useStripe();
  const elements = useElements();

  const [showModal, setShowModal] = useState(false);
  const [submitEvent, setSubmitEvent] = useState(null); // Store form event
  const [loading, setLoading] = useState(false);
  const completeBooking = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getOffers?${query}`,
        {
          method: "POST",
          booking,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      if (response.status === 200) {
        clearBooking();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitEvent(e); // Store event for later
    setShowModal(true); // Show confirmation modal
  };

  const handlePaymentDecision = async (didAccept) => {
    if (!didAccept || !submitEvent) return;

    const e = submitEvent;
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: cardName,
      },
    });

    if (error) {
      console.error("Stripe error:", error.message);
      return;
    }

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${API_BASE_URL}/api/stripeCheckoutSession`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total() * 100 }),
    });

    const data = await res.json();

    const confirmResult = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: paymentMethod.id,
    });

    console.log(confirmResult);

    if (confirmResult.error) {
      toast.error("Payment Failed. Please Try Again");
      console.error("Payment failed:", confirmResult.error.message);
    } else {
      toast.success("Payment Made");
      completeBooking();
      console.log("Payment successful!", confirmResult.paymentIntent);
    }

    setSubmitEvent(null); // Reset
  };

  return (
    <div className="w-full ">
      {/* Tab Buttons */}
      <div className="flex justify-between  space-x-6 mb-4">
        <button
          className={`px-4 py-2 text-[22px] font-medium ${
            activeTab === "saved"
              ? "border-b-3 border-b-[var(--orange)]"
              : "text-black"
          }`}
          onClick={() => setActiveTab("saved")}
        >
          Saved Card
        </button>
        <button
          className={`px-4 py-1 text-[22px] font-medium ${
            activeTab === "new"
              ? "border-b-3 border-b-[var(--orange)]"
              : "text-black"
          }`}
          onClick={() => setActiveTab("new")}
        >
          New Card
        </button>
      </div>

      {activeTab === "new" && (
        <form className="py-4  bg-white w-full" onSubmit={handleSubmit}>
          <div className="my-2">
            {/* Expiry */}
            <div className="border border-[#7B7B7B] rounded-xl h-11 text-black w-full p-2">
              <CardExpiryElement
                options={{
                  placeholder: "MM/YY",
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#000",
                      "::placeholder": { color: "#999" },
                    },
                  },
                }}
              />
            </div>

            {/* CVC + Card Holder Name */}
            <div className="my-2 flex justify-between w-full">
              <div className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2">
                <CardCvcElement
                  options={{
                    placeholder: "CVC",
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#000",
                        "::placeholder": { color: "#999" },
                      },
                    },
                  }}
                />
              </div>
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="Card Holder Name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            {/* Card Label + Number */}
            <div className="my-2 flex justify-between w-full">
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="Name of Card"
                value={cardLabel}
                onChange={(e) => setCardLabel(e.target.value)}
              />
              <div className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2">
                <CardNumberElement
                  options={{
                    placeholder: "Card Number",
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#000",
                        "::placeholder": { color: "#999" },
                      },
                      invalid: {
                        color: "#ff0000",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Save Card Checkbox */}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!stripe || !elements}
            className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer"
          >
            {`Pay ($${total()})`}
          </button>
        </form>
      )}

      {/* Saved Card UI */}
      {activeTab === "saved" && (
        <>
          <div className="flex items-center justify-between border border-[#8F8F8F] rounded-[13px] p-4">
            <div className="flex items-center space-x-4">
              <Image src="/visa.svg" alt="Visa" width={40} height={30} />
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

          <div className="flex items-center justify-between border border-[#8F8F8F] rounded-[13px] p-4 mt-4">
            <input
              type="text"
              value={discountData ? discountData.name : "Summer offer 100"}
              placeholder="Enter Discount Code"
              readOnly
              className="w-full text-sm text-black focus:outline-none placeholder:text-gray-400"
            />
            <ArrowDown
              className="text-orange-500 ml-2 cursor-pointer"
              onClick={openModal}
            />
          </div>

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
      <PaymentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handlePaymentDecision}
      />
      {loading && <Loader />}
    </div>
  );
};

export default PaymentTabs;
