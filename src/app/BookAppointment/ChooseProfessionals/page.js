"use client";
import React from "react";
import ProfessionalCard from "../../../../Components/Card/ProfessionalCard";
import ContinueButton from "../../../../Components/Buttons/ContinueButton";
import { useRouter } from "next/navigation";

const Professionals = () => {
  const router = useRouter();
  return (
    <div className="px-10  max-w-full">
      <h2 className="text-[#1D1B1B] text-[22px] font-semibold">
        Choose Professional
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 gap-y-8 justify-items-center">
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
      </div>
      <button
        className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold  my-2 justify-center items-center h-15"
        onClick={() => {
          router.push("/BookAppointment/SelectDate");
        }}
      >
        {" "}
        Continue
      </button>
    </div>
  );
};

export default Professionals;
