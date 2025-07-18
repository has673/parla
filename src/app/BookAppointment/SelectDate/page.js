"use client";
import React, { useState } from "react";

import { useUser } from "@/Context/userContext";
import { useBooking } from "@/Context/BookingContext";
import DateTimeSelector from "../../../../Components/DateTimeSelecter";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { DateTracker } from "../../../../Components/Tracker";

const SelectDate = () => {
  const { userData } = useUser();
  const { booking, setBooking } = useBooking();
  const router = useRouter();
  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  console.log(dateTime, "date");

  const handleSubmit = () => {
    if (!dateTime?.date || !dateTime?.time) {
      toast.error("Please select a date and time!");
      return;
    }

    const selectedDate = dayjs(dateTime.date);
    const selectedTime = dayjs(dateTime.time, "HH:mm");

    // Save booking date/time
    setBooking((prev) => ({
      ...prev,
      bookingDate: dateTime.date,
      bookingTime: dateTime.time,
    }));

    if (booking.discount && booking.discountDetail) {
      const {
        discountStartDate,
        discountEndDate,
        onlyBetweenDays = [],
        onlyBetweenEndTime,
        onlyBetweenTime,
      } = booking.discountDetail;

      const start = dayjs(discountStartDate);
      const end = dayjs(discountEndDate);

      const isDateInRange =
        selectedDate.isSame(start, "day") ||
        selectedDate.isSame(end, "day") ||
        (selectedDate.isAfter(start) && selectedDate.isBefore(end));

      const selectedDay = selectedDate.format("dddd"); // e.g., "Monday"
      const isDayAllowed = onlyBetweenDays.includes(selectedDay);

      let isTimeAllowed = true;
      if (onlyBetweenTime && onlyBetweenEndTime) {
        const allowedEnd = dayjs(onlyBetweenEndTime, "HH:mm");
        isTimeAllowed =
          selectedTime.isSame(allowedEnd) || selectedTime.isBefore(allowedEnd);
      }

      if (!(isDateInRange && isDayAllowed && isTimeAllowed)) {
        setBooking((prev) => ({
          ...prev,
          discount: false,
          discountDetail: null,
        }));
      } else {
        console.log("Discount applied");
      }
    }
    router.push("/BookAppointment/Payment");
  };

  return (
    <div className="px-14">
      <div className="flex justify-center my-4">
        {" "}
        <DateTracker />
      </div>
      <div className="flex justify-between text-[#1D1B1B] my-4">
        <h2 className="text-2xl font-semibold">Choose Date</h2>
        <span className="text-[17px] font-medium">
          {userData?.firstName} {userData?.lastName}
        </span>
      </div>

      <DateTimeSelector
        sendDateToParent={({ date, time }) => {
          console.log("Selected:", date, time);
          setDateTime({ date, time });
        }}
      />

      <button
        className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold h-14 my-2 justify-center items-center cursor-pointer"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};

export default SelectDate;
