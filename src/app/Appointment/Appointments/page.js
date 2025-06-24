import React from "react";
import AppointmentButton from "../../../../Components/Buttons/AppointmentButton";
import AppointmentCard from "../../../../Components/Card/AppointmentCard";

const Appointment = () => {
  return (
    <div className="px-4">
      <div className="w-full flex md:justify-end my-8 justify-center ">
        {" "}
        <AppointmentButton />
      </div>
      <AppointmentCard status="completed" />
    </div>
  );
};

export default Appointment;
