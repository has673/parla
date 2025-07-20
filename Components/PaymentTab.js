"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";
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
import { useUser } from "@/Context/userContext";
import { useLanguage } from "@/Context/LanguageContext";

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
  const { t } = useLanguage();
  const labels = t("paymentTab");
  const [showModal, setShowModal] = useState(false);
  const [submitEvent, setSubmitEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useUser();
  const router = useRouter();

  const completeBooking = async (confirmResult) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/addAppointment`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({
            confirmResult,
            booking,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      return;

      if (response.status === 200) {
        clearBooking();
        setTimeout(() => {
          router.push("/Appointments");
        }, 2000);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitEvent(e);
    setShowModal(true);
  };

  const handlePaymentDecision = async (didAccept) => {
    if (!didAccept || !submitEvent) return;

    const e = submitEvent;
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

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
      setLoading(false);
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

    if (confirmResult.error) {
      setLoading(false);
      toast.error("Payment Failed. Please Try Again");
      console.error("Payment failed:", confirmResult.error.message);
    } else {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/addAppointment`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "true",
            },
            body: JSON.stringify({
              confirmResult: confirmResult.paymentIntent,
              booking,
            }),
          }
        );
        const data = await response.json();

        if (response.status === 200) {
          clearBooking();
          setTimeout(() => {
            router.push("/Appointment");
          }, 2000);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    setSubmitEvent(null);
  };

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-between space-x-6 mb-4">
        <button
          className={`px-4 py-2 text-[22px] font-medium ${
            activeTab === "saved"
              ? "border-b-3 border-b-[var(--orange)]"
              : "text-black"
          }`}
          onClick={() => setActiveTab("saved")}
        >
          {labels.savedCard}
        </button>
        <button
          className={`px-4 py-1 text-[22px] font-medium ${
            activeTab === "new"
              ? "border-b-3 border-b-[var(--orange)]"
              : "text-black"
          }`}
          onClick={() => setActiveTab("new")}
        >
          {labels.newCard}
        </button>
      </div>

      {activeTab === "new" && (
        <form className="py-4 bg-white w-full" onSubmit={handleSubmit}>
          <div className="my-2">
            <div className="border border-[#7B7B7B] rounded-xl h-11 text-black w-full p-2">
              <CardExpiryElement
                options={{
                  placeholder: labels.expiry,
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

            <div className="my-2 flex justify-between w-full">
              <div className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2">
                <CardCvcElement
                  options={{
                    placeholder: labels.cvc,
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
                placeholder={labels.cardHolder}
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div className="my-2 flex justify-between w-full">
              <input
                className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2"
                placeholder={labels.cardLabel}
                value={cardLabel}
                onChange={(e) => setCardLabel(e.target.value)}
              />
              <div className="border border-[#999999] rounded-xl h-11 text-black w-[45%] p-2">
                <CardNumberElement
                  options={{
                    placeholder: labels.cardNumber,
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
              {labels.saveCard}
            </label>
          </div>

          <button
            type="submit"
            disabled={!stripe || !elements}
            className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer"
          >
            {`${labels.pay} ($${total()})`}
          </button>
        </form>
      )}

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
              value={
                discountData ? discountData.name : labels.discountPlaceholder
              }
              placeholder={labels.discountPlaceholder}
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
                {labels.discountNote}
              </span>
            </p>
          </div>

          <button className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer">
            {`${labels.pay} ($${total()})`}
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
