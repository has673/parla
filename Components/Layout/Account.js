"use client";
import React, { useEffect, useState } from "react";
import SocialIcon from "../SocialIcon";
import Image from "next/image";
import { Loader } from "../Loader";
import { useUser } from "@/Context/userContext";

const Account = () => {
  const socialMediaIcons = [
    { src: "/fb.png", alt: "Facebook" },
    { src: "/insta.png", alt: "Instagram" },
    { src: "/twitter.png", alt: "Twitter" },
    { src: "/snap.png", alt: "Snapchat" },
  ];

  const [loading, setLoading] = useState(false);
  const { token } = useUser();

  const [formData, setFormData] = useState({
    img: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    password: "",
    card: "",
    phone: "",
    coupons: "",
  });

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/profile/getProfile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      const data = await response.json();
      const user = data.data;

      setFormData({
        img: user.image,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        dateOfBirth: user.dob || "",
        gender: user.gender || "",
        email: user.email || "",
        password: "",
        card: user.card || "",
        phone: user.phone || "",
        coupons: user.coupons || "",
      });
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const img = `${formData?.img}`;
  const handleSave = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/profile/updateProfile`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      getUser();
      setLoading(false);
      console.log("Saved:", result);
    } catch (error) {
      setLoading(false);
      console.error("Save failed:", error);
    }
  };

  useEffect(() => {
    if (token) getUser();
  }, [token]);

  if (loading) return <Loader />;

  return (
    <div className="md:px-12">
      {/* Profile Header */}
      <div className="flex flex-row gap-x-3 my-4">
        <div className="relative md:h-18 md:w-18 h-15 w-15">
          <Image
            src={img || "/images/courtney.png"}
            fill
            className="object-cover rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-[22px] font-medium">{`${formData.firstName} ${formData.lastName}`}</h3>
          <div className="text-[10px] text-[#00000066] font-normal flex items-center gap-x-1">
            <div className="bg-[#F2F2F2] rounded-full h-8 w-8 flex justify-center items-center">
              <Image src="/Icons/Box.png" width={18} height={18} alt="box" />
            </div>
            145 Points
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid gap-x-5 gap-y-6 sm:gap-y-6 grid-cols-1 md:grid-cols-2">
        {/* First Name */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
            placeholder="First Name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
            placeholder="Last Name"
          />
        </div>

        {/* Gender 
        // <div className="flex flex-col w-full">
        //   <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
        //     Gender
        //   </label>
        //   <input
        //     type="text"
        //     value={formData.gender}
        //     onChange={handleChange("gender")}
        //     className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
        //     placeholder="Gender"
        //   />
        // </div>
*/}
        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
            placeholder="Email"
          />
        </div>

        {/* Password 
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange("password")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
            placeholder="Password"
          />
        </div>
        */}

        {/* Card */}
        <div className="flex flex-col w-full">
          <label className="text-black font-medium text-lg md:text-[20px] mb-2 ml-1">
            Card
          </label>
          <input
            type="text"
            value={formData.card}
            onChange={handleChange("card")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
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
            value={formData.phone}
            onChange={handleChange("phone")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
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
            value={formData.coupons}
            onChange={handleChange("coupons")}
            className="border border-[#828282] rounded-[11px] h-10 md:h-17 px-2"
            placeholder="Coupons"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center py-8 gap-x-2">
        {socialMediaIcons.map((icon, idx) => (
          <SocialIcon key={idx} src={icon.src} alt={icon.alt} />
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="bg-[var(--orange)] text-white py-2 px-6 rounded-md mt-4 cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Account;
