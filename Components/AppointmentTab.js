import React from "react";
import AppointmentButton from "./Buttons/AppointmentButton";
import AppointmentCard from "./Card/AppointmentCard";

const AppointmentTab = ({ type }) => {
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

export default AppointmentTab;
