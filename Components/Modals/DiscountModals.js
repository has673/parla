"use client";
import { X, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const discounts = [
  {
    id: 1,
    label: "Summer offer -100TI",
    expiry: "31-12-2004",
    img: "/girl.jpg", // Replace with your actual image path
  },
  {
    id: 2,
    label: "Summer offer -100TI",
    expiry: "31-12-2004",
    img: "/girl.jpg",
  },
  {
    id: 3,
    label: "Summer offer -100TI",
    expiry: "31-12-2004",
    img: "/girl.jpg",
  },
  {
    id: 4,
    label: "Summer offer -100TI",
    expiry: "31-12-2004",
    img: "/girl.jpg",
  },
];

export default function DiscountModal({ offers, isOpen, onClose, getId }) {
  const [selectedId, setSelectedId] = useState(null);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-6">
          Discount Offer
        </h2>

        {/* Discount List */}
        <div className="space-y-4">
          {offers.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              {/* Checkbox OUTSIDE card */}
              <input
                type="checkbox"
                checked={selectedId === item._id}
                onClick={() => {
                  setSelectedId(item._id);
                  getId(item);
                }}
                className="accent-[var(--orange)]  w-5 h-5 mt-3 cursor-pointer"
              />

              {/* Discount Card */}
              <div
                onClick={() => setSelectedId(item._id)}
                className={`flex items-center justify-between flex-1 border rounded-lg px-4 py-3 cursor-pointer hover:shadow-md ${
                  selectedId === item._id
                    ? "border-[var(--orange)] bg-[var(--orange)/5]"
                    : "border-gray-300"
                }`}
              >
                {/* Left: Image + Info */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 relative">
                    {" "}
                    <Image
                      src="/images/courtney.png"
                      alt="offer"
                      fill
                      className=" object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Expiration date: {item.endDate}
                    </p>
                  </div>
                </div>

                {/* Right: More icon */}
                <MoreVertical className="text-black" size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
