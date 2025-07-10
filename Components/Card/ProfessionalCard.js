import { Star, Heart } from "lucide-react";
import Image from "next/image";

export default function ProfessionalCard({ employee, selected, onSelect }) {
  const isAvailable = employee?.isAvailableToday;
  const isSelected = selected;
  return (
    <div
      className={`relative w-71 p-4 border border-[#898989] rounded-3xl text-center bg-white  ${
        isSelected ? "border-[var(--orange)]" : "border-gray-300"
      }`}
      onClick={onSelect}
    >
      {/* Heart Icon */}
      <button className="absolute top-3 right-3 text-[#5F5F5F] hover:text-red-500">
        <Heart size={18} />
      </button>

      {/* Profile Image */}
      <div className="mx-auto w-24 h-24 relative mb-2">
        <Image
          src={employee?.image || "/images/courtney.png"}
          alt={`${employee?.firstName || "Professional"}'s profile`}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-normal text-lg text-[var(--color-dark)]">
        {employee?.firstName || "N/A"} {employee?.lastName || ""}
      </h3>

      {/* Availability */}
      <p
        className={`text-[13px] font-medium ${
          isAvailable ? "text-green-600" : "text-red-500"
        }`}
      >
        {isAvailable ? "Available Today" : "Not Available"}
      </p>

      {/* Stars and rating */}
      <div className="mt-2 flex items-center justify-center gap-1 text-[#FFC700] text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} fill="currentColor" stroke="none" size={16} />
        ))}
        <span className="text-black font-medium ml-1">5.0</span>
        <span className="text-[#000000]">(110)</span>
      </div>
    </div>
  );
}
