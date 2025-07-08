import React from "react";
import DateSelector from "../../../../Components/DateSelector";
import ContinueButton from "../../../../Components/Buttons/ContinueButton";
import TimeSelector from "../../../../Components/TimeSelector";

const SelectDate = () => {
  return (
    <div className="px-14">
      <div className="flex justify-between text-[#1D1B1B] my-4">
        <h2 className="textt-2xl font-semibold">Choose Date</h2>
        <span className="textt-[17px] font-medium">Ayaz A</span>
      </div>
      <DateSelector />
      <TimeSelector />
      <ContinueButton className="`bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold h-14 my-2 justify-center items-center" />
    </div>
  );
};

export default SelectDate;
