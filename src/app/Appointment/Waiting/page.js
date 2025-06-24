import React from "react";
import AppointmentCard from "../../../../Components/Card/AppointmentCard";
import AppointmentButton from "../../../../Components/Buttons/AppointmentButton";
const Waiting = () => {
  return (
    <div className="px-4">
      <div className="w-full flex justify-end my-8">
        {" "}
        <AppointmentButton />
      </div>
      <AppointmentCard />
    </div>
  );
};

export default Waiting;
