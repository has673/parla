"use client";
import Image from "next/image";
import React, { useState } from "react";
import Text from "../../../../../Components/Text/Text";
import Heading from "../../../../../Components/Text/Heading";
import LegendInput from "../../../../../Components/Input/LegendInput";
import { useParams } from "next/navigation";
import AuthButton from "../../../../../Components/Buttons/AuthButton";

const ResetPassword = () => {
  const role = "customer";
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email } = params;

  const emails = decodeURIComponent(email);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px]  mt-6">
          <div className="text-center mb-6">
            <Heading text="Reset Password" />
            <Text text="Please type something you’ll remember" />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <LegendInput
                label="New Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-[#8D918C] mb-1">
                Password
              </label>
              <LegendInput
                label=" Confirm New Password"
                type="password"
                placeholder="Enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <AuthButton
              btnText="Reset Password"
              data={{ emails, password, confirmPassword, role }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
