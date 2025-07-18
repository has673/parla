"use client";
import React, { useState, useMemo, useEffect } from "react";
import dayjs from "dayjs";
import { useBooking } from "@/Context/BookingContext";
import Image from "next/image";

const DateTimeSelector = ({ sendDateToParent }) => {
  const colors = [
    "##5A37E580",
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
  console.log(allSlots, "all");
  console.log(availableSlots, "available");

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
      <div className="grid grid-cols-8 gap-y-4 py-4 md:gap-x-0">
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
              className={`flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full cursor-pointer ${
                isSelected
                  ? "bg-[var(--orange)] text-white"
                  : "bg-[#EEEEEE] text-[#1E293B]"
              }`}
            >
              <span className="text-lg font-semibold">{date.format("DD")}</span>
              <span className="text-md md:text-2xl">{date.format("dd")}</span>
            </div>
          );
        })}
      </div>

      {/* Selected date and time */}
      <div className="text-[#1D1B1B] font-semibold text-[22px] flex justify-between">
        {selectedDate}
        {selectedTime && <p className="text-center">{selectedTime}</p>}
      </div>
      <div className="flex">
        <p className="text-lg font-semibold text-[#1D1B1BCC]">Availability</p>
        <Image src="/user.png" height={20} width={20} alt="user" />
        <div className="flex justify-center items-center ">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-17 h-2 rounded-md "
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <Image src="/users.png" height={20} width={20} alt="users" />
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 justify-center py-4">
        {isEmployeeAvailableToday && slotsForSelectedDay.length > 0 ? (
          slotsForSelectedDay.map((time) => (
            <div
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 rounded-xl cursor-pointer md:text-2xl font-semibold md:h-18 flex justify-center items-center md:w-44 w-22 h-15 text-base ${
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
