"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer font-semibold text-[#1E232C]"
        onClick={() => setOpen(!open)}
      >
        <h4>{question}</h4>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180 text-[var(--orange)]" : ""
          }`}
        />
      </div>
      {open && (
        <p className="mt-2 text-[#00000080] text-sm font-medium">
          {answer ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      )}
    </div>
  );
};

export default function StampcardInfo() {
  return (
    <div className="md:w-1/2 w-full px-4 py-6 text-base font-medium text-[#1E232C]">
      <h3 className=" text-base font-medium text-[#1E232C] mb-4">
        How do i use stampcard?
      </h3>

      {/* Points list */}
      <ul className="mb-6 space-y-1">
        {[1, 2, 3].map((_, idx) => (
          <li key={idx}>
            <span className="text-[var(--orange)] font-bold mr-1">+15</span>
            Points for each appointment
          </li>
        ))}
      </ul>

      {/* Accordions */}
      <AccordionItem question="what are points" />
      <AccordionItem question="How Do i redeem mwy points" />
      <AccordionItem question="How long are my points valid for" />
      <AccordionItem question="what are points" />
    </div>
  );
}
