"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";
import LegendInput from "../../../../Components/Input/LegendInput";
import { useLanguage } from "@/Context/LanguageContext";

const ForgotPassword = () => {
  const role = "customer";
  const [email, setEmail] = useState("");
  const { t } = useLanguage(); // translation hook

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px] mt-6">
          <div className="text-center mb-6">
            <Heading text={t("forgot_password_heading")} />
            <Text text={t("forgot_password_description")} />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <LegendInput
                label={t("email_label")}
                type="email"
                placeholder={t("email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <AuthButton data={{ email, role }} btnText={t("send_code")} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
