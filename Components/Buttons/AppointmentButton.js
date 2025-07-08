"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AppointmentButton = ({ className }) => {
  const router = useRouter();
  const defaultClasses =
    "text-white flex justify-center items-center rounded-2xl bg-[var(--orange)] h-13 px-6 cursor-pointer";

  return (
    <button
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className={className || defaultClasses}
      onClick={() => router.push("/Service/ChooseProfessional")}
    >
      Book New Appointment
    </button>
  );
};

export default AppointmentButton;
