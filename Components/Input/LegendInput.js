import { LockKeyhole } from "lucide-react";
import React from "react";
import { FaAt } from "react-icons/fa";

const LegendInput = ({ label, type, placeholder, value, onChange }) => {
  const renderIcon = () => {
    if (type === "password")
      return (
        <LockKeyhole
          className="absolute left-1 top-1/2 -translate-y-1/2 text-[#484A47]"
          size={20}
        />
      );
    if (type === "email")
      return (
        <FaAt
          className="absolute left-1 top-1/2 -translate-y-1/2 text-[#484A47]"
          size={20}
        />
      );
    return null;
  };

  return (
    <div>
      <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
        <legend className="block text-sm text-[#8D918C] px-2">{label}</legend>
        <div className="relative w-full">
          {renderIcon()}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full pl-8 pr-2 outline-none"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default LegendInput;
