"use client";

import { useLanguage } from "@/Context/LanguageContext";

// Modal component
export const AppointmentModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useLanguage();
  const labels = t("appointmentModal");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[13px] w-full max-w-md p-6 relative h-auto">
        {/* Title */}
        <h3 className="text-[var(--color-dark)] font-medium text-2xl my-3">
          {labels.title}
        </h3>

        <div className="flex flex-row my-3 gap-x-2 justify-center">
          <button
            className="border rounded-[10px] text-[var(--orange)] bg-white text-base flex justify-center items-center font-medium px-12 py-2 cursor-pointer"
            onClick={() => {
              onConfirm(true);
              onClose();
            }}
          >
            {labels.yes}
          </button>
          <button
            className="border rounded-[10px] text-white bg-[var(--orange)] text-base flex justify-center items-center font-medium px-12 py-2 cursor-pointer"
            onClick={() => {
              onConfirm(true);
              onClose();
            }}
          >
            {labels.no}
          </button>
        </div>
      </div>
    </div>
  );
};
