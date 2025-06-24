import React from "react";

export default function TextInput({ label, placeholder, name, id, ...props }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id || name}
          className="text-black font-medium text-lg sm:text-xl md:text-[20px] mb-2 ml-3"
        >
          {label}
        </label>
      )}

      <input
        id={id || name}
        name={name}
        type="text"
        placeholder={placeholder}
        className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
        {...props}
      />
    </div>
  );
}
