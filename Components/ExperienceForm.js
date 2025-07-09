"use client";
import React, { useState } from "react";

const ShareExperienceForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [recipient, setRecipient] = useState("friend");
  const [showNote, setShowNote] = useState(true);
  const [showDesign, setShowDesign] = useState(true);
  const [titleChecked, setTitleChecked] = useState(false);

  const amounts = ["40$", "50$", "90$", "900$", "600$"];

  return (
    <div className=" p-6">
      {/* Heading */}
      <h2 className="font-medium text-base text-[#1E232C] mb-2">
        Share the experience with a friend
      </h2>

      {/* Choose value */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 w-1/2">
          <label className="font-medium">Choose your value</label>
          <span className="text-sm text-orange-500">Up to 1000TL</span>
        </div>

        <input
          type="text"
          placeholder="Custom amount"
          className="border border-[#E8E8E8] rounded px-3 py-2 w-1/2 mb-2 "
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(e.target.value)}
        />

        <div className="flex gap-2">
          {amounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`px-4 py-2 border border-[#E8E8E8] rounded ${
                selectedAmount === amt
                  ? "bg-[var(--orange)] text-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {amt}
            </button>
          ))}
        </div>
      </div>

      {/* Recipient */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          To Whom it will be sent?
        </label>
        <div className="flex gap-3">
          <button
            onClick={() => setRecipient("friend")}
            className={`px-4 py-2 border border-[#E8E8E8] rounded ${
              recipient === "friend"
                ? "bg-[var(--orange)] text-white"
                : "bg-gray-100"
            }`}
          >
            Friend
          </button>
          <button
            onClick={() => setRecipient("family")}
            className={`px-4 py-2 border border-[#E8E8E8] rounded ${
              recipient === "family"
                ? "bg-[var(--orange)] text-white"
                : "bg-gray-100"
            }`}
          >
            Family
          </button>
        </div>
      </div>

      {/* Shipping info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name last name"
          className="border border-[#E8E8E8] rounded px-3 py-2 w-1/2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-[#E8E8E8] rounded px-3 py-2 w-1/2"
        />
      </div>

      {/* Personal Note */}
      <div className="mb-4">
        <label className="flex items-center gap-2 font-medium mb-1">
          <input
            type="checkbox"
            checked={showNote}
            onChange={() => setShowNote(!showNote)}
            className="accent-orange-500"
          />
          Add a personal note
        </label>
        {showNote && (
          <textarea
            className="w-1/2 border border-[#E8E8E8] rounded px-3 py-2"
            rows={3}
            placeholder="Your message"
          ></textarea>
        )}
      </div>

      {/* Design upload */}
      <div className="mb-4">
        <label className="flex items-center gap-2 font-medium mb-1">
          <input
            type="checkbox"
            checked={showDesign}
            onChange={() => setShowDesign(!showDesign)}
            className="accent-orange-500"
          />
          Choose a Design
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="Title"
            className="border border-[#E8E8E8] rounded px-3 py-2"
          />
          <div className="border border-[#E8E8E8] rounded px-3 py-8 text-center text-sm text-gray-500">
            Design Picture/Video/Gif
          </div>
        </div>

        {/* Optional title checkbox */}
        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={titleChecked}
            onChange={() => setTitleChecked(!titleChecked)}
            className="accent-orange-500"
          />
          Title
        </label>

        <div className="mt-2 border border-[#E8E8E8] rounded px-3 py-8 text-center text-sm text-gray-500">
          Design Picture/Video/Gif
        </div>
      </div>

      {/* Checkout button */}
      <div className="flex justify-end mt-6">
        <button className="bg-[var(--orange)] text-white px-6 py-2 text-[13px] font-semibold rounded-[10px]">
          Continue to check Out
        </button>
      </div>
    </div>
  );
};

export default ShareExperienceForm;
