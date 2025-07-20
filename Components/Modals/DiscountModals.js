"use client";
import { X, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/Context/LanguageContext";

export default function DiscountModal({ offers, isOpen, onClose, getId }) {
  const [selectedId, setSelectedId] = useState(null);
  const { t } = useLanguage();
  const labels = t("discountModal");

  if (!isOpen) return null;

  const dateFormatter = (date) => {
    return new Date(date);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-6">
          {labels.title}
        </h2>

        {/* Discount List */}
        <div className="space-y-4">
          {offers.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 ">
              {/* Checkbox OUTSIDE card */}
              <input
                type="checkbox"
                checked={selectedId === item._id}
                onClick={() => {
                  setSelectedId(item._id);
                  getId(item);
                }}
                className="accent-[var(--orange)]  w-7 h-7 mt-3 cursor-pointer"
              />

              {/* Discount Card */}
              <div
                onClick={() => setSelectedId(item._id)}
                className={`flex items-center justify-between flex-1 border rounded-md  py-5 cursor-pointer hover:shadow-md h-13  ${
                  selectedId === item._id
                    ? "border-[var(--orange)] bg-[var(--orange)/5]"
                    : "border-[#9D9D9D]"
                }`}
              >
                {/* Left: Image + Info */}
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-1/3 relative">
                    <Image
                      src="/jane.png"
                      alt="offer"
                      fill
                      className="object-cover rounded-none"
                    />
                  </div>

                  <div className="mys-1">
                    <p className="text-sm font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {labels.expiry}: {`${dateFormatter(item.endDate)}`}
                    </p>
                  </div>
                </div>

                {/* Right: More icon */}
                <MoreVertical className="text-[#2E2E2E]" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
