import React from "react";

const AppointmentButton = () => {
  return (
    <button
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
      className="text-white flex justify-center  items-center rounded-2xl bg-[var(--orange)] h-13 px-6 cursor-pointer"
    >
      Book New Appointment
    </button>
  );
};

export default AppointmentButton;
