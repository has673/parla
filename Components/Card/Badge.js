// Badge.tsx
import Image from "next/image";
import React from "react";

const Badge = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Image src="/stamp.png" height={30} width={30} alt="Stamp" />
    </div>
  );
};

export default Badge;
