"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";
import LegendInput from "../../../../Components/Input/LegendInput";
import Link from "next/link";
import { useLanguage } from "@/Context/LanguageContext"; // ✅ Import context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const { t } = useLanguage(); // ✅ Use context

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px] mt-6">
          <div className="text-center mb-6">
            <Heading text={t("login_heading")} />
            <Text text={t("login_subheading")} />
          </div>

          <form className="space-y-4 text-left">
            {/* Email Field */}
            <div>
              <LegendInput
                label={t("email_label")}
                type="email"
                placeholder={t("email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <LegendInput
                label={t("password_label")}
                type="password"
                placeholder={t("password_placeholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right mt-1">
                <Link
                  href="/ForgotPassword"
                  className="text-base text-[#484A47]"
                >
                  {t("forgot_password")}
                </Link>
              </div>
            </div>

            {/* Button */}
            <AuthButton
              data={{ email, password, role }}
              btnText={t("login_button")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
