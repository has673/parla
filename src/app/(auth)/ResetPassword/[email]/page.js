"use client";
import Image from "next/image";
import React, { useState } from "react";
import Text from "../../../../../Components/Text/Text";
import Heading from "../../../../../Components/Text/Heading";
import LegendInput from "../../../../../Components/Input/LegendInput";
import { useParams } from "next/navigation";
import AuthButton from "../../../../../Components/Buttons/AuthButton";
import { useLanguage } from "@/Context/LanguageContext"; // ✅ import language context

const ResetPassword = () => {
  const role = "customer";
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email } = params;
  const emails = decodeURIComponent(email);

  const { t } = useLanguage(); // ✅ use language context

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px] mt-6">
          <div className="text-center mb-6">
            <Heading text={t("reset_password_heading")} />
            <Text text={t("reset_password_description")} />
          </div>

          <form className="space-y-4 text-left">
            {/* New Password */}
            <div>
              <LegendInput
                label={t("new_password_label")}
                type="password"
                placeholder={t("password_placeholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <LegendInput
                label={t("confirm_password_label")}
                type="password"
                placeholder={t("password_placeholder")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <AuthButton
              btnText={t("reset_button")}
              data={{ emails, password, confirmPassword, role }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
