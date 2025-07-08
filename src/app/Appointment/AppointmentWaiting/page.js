import React from "react";
import AppointmentCard from "../../../../Components/Card/AppointmentCard";

const AppointmentWaiting = () => {
  return (
    <div className="px-4">
      <div className="my-2">
        {" "}
        <AppointmentCard status="Delayed" />
      </div>
    </div>
  );
};

export default AppointmentWaiting;
