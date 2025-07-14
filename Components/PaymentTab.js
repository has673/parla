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

const PaymentTabs = ({
  total,
  discountData,
  openModal,
  noteEnabled,
  setNoteEnabled,
}) => {
  const [activeTab, setActiveTab] = useState("new");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardLabel, setCardLabel] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("card");
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
      console.error("[Stripe error]", error.message);
      return;
    }

    // Call your backend to create a PaymentIntent
    const res = await fetch("/api/payment/router", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total() * 100 }), // in cents
    });

    const { clientSecret } = await res.json();

    // Confirm card payment
    const confirmResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmResult.error) {
      console.error("Payment failed:", confirmResult.error.message);
    } else {
      console.log("✅ Payment successful!", confirmResult.paymentIntent);
    }
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
            <div className="my-2 flex justify-between w-full">
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-full p-2"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="my-2 flex justify-between w-full">
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="Card Holder Name"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
              />
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="Expiry Date"
                value={cardDate}
                onChange={(e) => setCardDate(e.target.value)}
              />
            </div>

            {/* Card Label + Number */}
            <div className="my-2 flex justify-between w-full">
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="Name of Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />

              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder="CVV / CVC "
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
              />
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
    </div>
  );
};

export default PaymentTabs;
