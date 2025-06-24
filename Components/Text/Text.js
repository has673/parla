import React from "react";

const Text = ({ text }) => {
  return (
    <div>
      {" "}
      <span className="text-[#484A47] md:text-base text-sm font-normal  text-center">
        {text}
      </span>
    </div>
  );
};

export default Text;
