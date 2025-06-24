import React from "react";

const ContinueButton = ({ className = "" }) => {
  return (
    <button
      className={`bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold  my-2 justify-center items-center ${className}`}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
