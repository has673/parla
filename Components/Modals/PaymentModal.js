"use client";
import { useLanguage } from "@/Context/LanguageContext";
import { X, Check } from "lucide-react";

export const PaymentModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useLanguage();
  const labels = t("paymentModal");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <Check size={28} />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {labels.confirmTitle}
          </h2>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                onConfirm(true);
                onClose();
              }}
              className="bg-[var(--orange)] text-white px-4 py-2 rounded-md"
            >
              {labels.yes}
            </button>
            <button
              onClick={() => {
                onConfirm(false);
                onClose();
              }}
              className="bg-gray-200 text-black px-4 py-2 rounded-md"
            >
              {labels.no}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
