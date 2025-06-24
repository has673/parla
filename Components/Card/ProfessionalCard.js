import { Star, Heart } from "lucide-react";
import Image from "next/image";

export default function ProfessionalCard() {
  return (
    <div className="relative w-71 p-4 border border-[#898989] rounded-3xl text-center bg-white ">
      {/* Heart Icon */}
      <button className="absolute top-3 right-3 text-[#5F5F5F] hover:text-red-500">
        <Heart size={18} />
      </button>

      {/* Profile Image */}
      <div className="mx-auto w-24 h-24 relative mb-2">
        <Image
          src="/images/courtney.png" // Replace with actual path
          alt="Abdurrahman K."
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg text-[var(--color-dark)]">
        Abdurrahman K.
      </h3>
      <p className="text-[13px] text-[#5F5F5F]">Available today</p>

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
