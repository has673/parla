"use client";
import React from "react";
import SocialIcon from "../SocialIcon";
import Image from "next/image";

const Account = ({ type }) => {
  const socialMediaIcons = [
    { src: "/fb.png", alt: "Facebook" },
    { src: "/insta.png", alt: "Instagram" },
    { src: "/twitter.png", alt: "Twitter" },
    { src: "/snap.png", alt: "Snapchat" },
  ];
  return (
    <div className="md:px-12  ">
      <div className="flex flex-row gap-x-3 my-4">
        <div className="relative md:h-18 md:w-18 h-15 w-15">
          <Image
            src="/images/courtney.png"
            fill
            className="object-cover rounded-full "
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-[22px] font-medium">John Wick</h3>
          <div className="text-[10px] text-[#00000066] font-normal flex items-center gap-x-1">
            <div className="bg-[#F2F2F2] rounded-full h-8 w-8 flex justify-center items-center">
              <Image src="/Icons/Box.png" width={18} height={18} alt="box" />
            </div>
            145 Points
          </div>
        </div>
      </div>
      <div className="grid gap-x-5 gap-y-6 sm:gap-y-6 grid-cols-1 md:grid-cols-2 ">
        {/* Name */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Name
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Name"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Username
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Username"
          />
        </div>

        <div className="flex w-full justify-between ">
          {" "}
          <div className="flex flex-col w-[45%]">
            <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
              Date of Birth
            </label>
            <input
              type="text"
              className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Date of Birth"
            />
          </div>
          {/* Gender */}
          <div className="flex flex-col w-[45%]">
            <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
              Gender
            </label>
            <input
              type="text"
              className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Gender"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Email
          </label>
          <input
            type="email"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Password
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Password"
          />
        </div>

        {/* Card */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Card
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Card"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Phone
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Phone"
          />
        </div>

        {/* Coupons */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Coupons
          </label>
          <input
            type="text"
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Coupon"
          />
        </div>
      </div>
      <div className="flex justify-center py-8 gap-x-2">
        {socialMediaIcons.map((icon, idx) => (
          <SocialIcon key={idx} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
};

export default Account;
