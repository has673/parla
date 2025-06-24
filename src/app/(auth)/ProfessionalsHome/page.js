import React from "react";
import ProfessionalCard from "../../../../Components/Card/ProfessionalCard";

const ProfessionalHome = () => {
  return (
    <div>
      <div className=" flex flex-row  justify-around">
        <button className="text-white border rounded-[13px] ">All</button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 gap-y-8 justify-items-center">
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
      </div>
    </div>
  );
};

export default ProfessionalHome;
