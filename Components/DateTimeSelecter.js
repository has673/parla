"use client";
import React, { useState, useMemo, useEffect } from "react";
import dayjs from "dayjs";
import { useBooking } from "@/Context/BookingContext";
import Image from "next/image";
import { User } from "lucide-react";
import { useLanguage } from "@/Context/LanguageContext";

const DateTimeSelector = ({ sendDateToParent }) => {
  const { t } = useLanguage();
  const colors = [
    "##5A37E580",
    "#5A37E5CC",
    "#5A37E5CC",
    "#5A37E5CC",
    "#5A37E5CC",
    "#5A37E5CC",
    "#5A37E5CC",
    "#5A37E5CC",
  ];

  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [selectedTime, setSelectedTime] = useState("");
  const { booking } = useBooking();

  const workingHours = booking?.employeeWorkingHours || [];
  const availableSlots = booking?.availableSlots || [];
  const allSlots = booking?.allSlots || [];

  const getNextDays = () => {
    const today = dayjs();
    return Array.from({ length: 25 }, (_, i) => today.add(i, "day"));
  };

  const selectedDay = useMemo(
    () => dayjs(selectedDate).format("dddd"),
    [selectedDate]
  );

  const isEmployeeAvailableToday = useMemo(
    () => workingHours.some((wh) => wh.day === selectedDay),
    [workingHours, selectedDay]
  );

  const slotsForSelectedDay = useMemo(() => {
    // First try exact date match in availableSlots
    const availableEntry = availableSlots.find(
      (entry) => entry.date === selectedDate
    );

    if (availableEntry) return availableEntry.slots;

    // If not found, fallback to allSlots by day (e.g., "Tuesday")
    const allEntry = allSlots.find((entry) => entry.day === selectedDay);

    return allEntry?.slots || [];
  }, [availableSlots, allSlots, selectedDate, selectedDay]);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      sendDateToParent({ date: selectedDate, time: selectedTime });
    }
  }, [selectedDate, selectedTime]);

  return (
    <div>
      {/* Date selection grid */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-y-4 gap-x-2 py-4 px-2">
        {getNextDays().map((date) => {
          const formatted = date.format("YYYY-MM-DD");
          const isSelected = formatted === selectedDate;

          return (
            <div
              key={formatted}
              onClick={() => {
                setSelectedDate(formatted);
                setSelectedTime("");
              }}
              className={`flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full cursor-pointer transition ${
                isSelected
                  ? "bg-[var(--orange)] text-white"
                  : "bg-[#EEEEEE] text-[#1E293B]"
              }`}
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold">
                {date.format("DD")}
              </span>
              <span className="text-xs sm:text-sm md:text-xl">
                {date.format("dd")}
              </span>
            </div>
          );
        })}
      </div>

      {/* Availability bar */}
      <div className="md:flex  hidden md:flex-row items-center justify-center gap-2 py-3 px-1 ">
        {/* Label and icon */}

        <div className="text-base sm:text-lg font-semibold text-[#1D1B1BCC]">
          {t("Date.availability")}
        </div>
        <User size={18} />

        {/* Color bars */}
        <div className="flex justify-center flex-wrap gap-1 sm:gap-2">
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className={`w-10 sm:w-14 md:w-16 h-2 rounded-md ${
                  idx === 0 ? "bg-[#5A37E580]" : "bg-[#5A37E5CC]"
                }`}
              />
            ))}
        </div>

        {/* Image */}
        <div className="hidden sm:block">
          <Image src="/users.png" height={20} width={20} alt="users" />
        </div>
      </div>

      {/* Selected date/time */}
      <div className="text-[#1D1B1B] font-semibold text-lg sm:text-xl md:text-2xl flex justify-between px-4">
        <span>{selectedDate}</span>
        {selectedTime && <p>{selectedTime}</p>}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 justify-center py-4 px-4">
        {isEmployeeAvailableToday && slotsForSelectedDay.length > 0 ? (
          slotsForSelectedDay.map((time) => (
            <div
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-2 rounded-xl cursor-pointer text-sm sm:text-base md:text-xl font-semibold flex justify-center items-center h-12 sm:h-14 md:h-16 ${
                selectedTime === time
                  ? "bg-orange-500 text-white"
                  : "bg-[#D9D9D94D] text-black"
              }`}
            >
              {time}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No available slots for {selectedDay}
          </p>
        )}
      </div>
    </div>
  );
};

export default DateTimeSelector;
