import { Star } from "lucide-react";
import Image from "next/image";

export const RatingStars = ({ color }) => (
  <div className="flex space-x-1 " style={{ color }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} fill="currentColor" stroke="none" size={16} />
    ))}
  </div>
);

export default function RatingCard() {
  return (
    <div className="p-4 bg-white text-[#333333] max-w-sm">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 relative">
          <Image
            src="/images/courtney.png"
            alt="user"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-base">Courtney Henry</h3>
          <p className="text-sm font-medium">Ao9</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Service</span>
          <RatingStars color="#E4A70A" />
        </div>
        <div className="flex justify-between">
          <span>Waiting</span>
          <RatingStars color="#E4A70A" />
        </div>
        <div className="flex justify-between">
          <span>Ayaz</span>
          <RatingStars color="#E4A70A" />
        </div>
      </div>

      <p className="mt-4 text-[13px]">
        Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
        ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit
        esse aliqua.
      </p>
    </div>
  );
}
