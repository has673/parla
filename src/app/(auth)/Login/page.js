"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";
import LegendInput from "../../../../Components/Input/LegendInput";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px]  mt-6">
          <div className="text-center mb-6">
            <Heading text="Login Into Your Account" />
            <Text text="Please enter your information" />
          </div>

          <form className="space-y-4 text-left">
            {/* Email Field */}
            <div>
              <LegendInput
                label="Email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <LegendInput
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right mt-1">
                <Link
                  href="/ForgotPassword"
                  className="text-base text-[#484A47]"
                >
                  Forgot Password
                </Link>
              </div>
            </div>

            {/* Button */}
            <AuthButton data={{ email, password, role }} btnText="Login" />
          </form>
          {/*
            
            <p className="text-base font-normal text-center mt-6">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-[var(--orange)] font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
            */}
        </div>
      </div>
    </div>
  );
};

export default Login;
