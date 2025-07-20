"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";
import { useLanguage } from "@/Context/LanguageContext"; // ✅ Import

const Signup = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage(); // ✅ Use context

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="p-8 w-[320px] md:w-[600px] mt-6">
          <div className="text-center mb-6">
            <Heading text={t("signup_heading")} />
            <Text text={t("signup_description")} />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  {t("name_label")}
                </legend>
                <input
                  type="text"
                  placeholder={t("name_placeholder")}
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  {t("email_label")}
                </legend>
                <input
                  type="email"
                  placeholder={t("email_placeholder")}
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  {t("password_label")}
                </legend>
                <input
                  type="password"
                  placeholder={t("password_placeholder")}
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  {t("dob_label")}
                </legend>
                <input
                  type="text"
                  placeholder={t("dob_placeholder")}
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  {t("gender_label")}
                </legend>
                <input
                  type="text"
                  placeholder={t("gender_placeholder")}
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <AuthButton btnText={t("signup_button")} />
          </form>

          <p className="text-base font-normal text-center mt-6">
            {t("already_have_account")}{" "}
            <a
              href="#"
              className="text-[var(--orange)] font-medium hover:underline"
            >
              {t("login_now")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
