"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../Components/Text/Heading";
import AuthButton from "../../../../Components/Buttons/AuthButton";
import Text from "../../../../Components/Text/Text";

const Signup = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className=" p-8 w-[320px] md:w-[600px]  mt-6">
          <div className="text-center mb-6">
            <Heading text="Create Account" />
            <Text text="Please enter your information" />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  Name
                </legend>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  Email
                </legend>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  Password
                </legend>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  Date of Birth
                </legend>
                <input
                  type="text"
                  placeholder="Enter your Date of birth"
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="border border-[#8D918C] rounded-md p-2 flex flex-col justify-center h-12">
                <legend className="block text-sm text-[#8D918C] px-2">
                  Gender
                </legend>
                <input
                  type="text"
                  placeholder="Enter your Gender"
                  className="w-full px-2 outline-none"
                />
              </fieldset>
            </div>

            <AuthButton btnText="Signup" />
          </form>

          <p className="text-base font-normal text-center mt-6">
            Already an account?{" "}
            <a
              href="#"
              className="text-[var(--orange)] font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
