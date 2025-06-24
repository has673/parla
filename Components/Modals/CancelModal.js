"use client";

import { X, Check } from "lucide-react";

// Modal component
export const CancelModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative h-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4"
          aria-label="Close modal"
        >
          <X size={24} className="cursor-pointer" />
        </button>

        {/* Green border circle with check icon */}
        <div className="flex justify-center items-center mb-4">
          <div className=" bg-[#61C478] h-20 w-20 rounded-full p-3 flex justify-center items-center">
            <Check size={30} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[var(--darkGrey)] font-semibold text-center text-2xl my-3">
          Your appointment has been cancelled
        </h3>
      </div>
    </div>
  );
};
