// components/SocialIcon.js or .tsx
import Image from "next/image";

const SocialIcon = ({ src, alt = "social icon" }) => (
  <div className="h-13 w-13 border border-[#4D4D4D] rounded-full flex justify-center items-center">
    <Image src={src} width={22} height={22} alt={alt} />
  </div>
);

export default SocialIcon;
