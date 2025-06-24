"use client";
import React, { useState } from "react";

const FloatingInput = ({ label, type, value, onChange, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const showLabel = isFocused || value;

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3 pt-6 pb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder=" " // Prevents native placeholder overlap
      />
      <label
        htmlFor={name}
        className={`absolute left-3 top-2 text-sm transition-all duration-200 ${
          showLabel
            ? "text-xs text-orange-500 -top-1 bg-white px-1"
            : "text-gray-400 top-5"
        } pointer-events-none`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
