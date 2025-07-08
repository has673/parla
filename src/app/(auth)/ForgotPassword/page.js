"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";
import LegendInput from "../../../../Components/Input/LegendInput";
import Link from "next/link";

const ForgotPassword = () => {
  const role = "customer";
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px]  mt-6">
          <div className="text-center mb-6">
            <Heading text="Forgot Password?" />
            <Text text="Don’t worry! It happens. Please enter the email associated with your account." />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <div>
                <LegendInput
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <AuthButton data={{ email, role }} btnText="Send Code" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
