"use client";
import React, { useState, useMemo, useEffect } from "react";
import dayjs from "dayjs";
import { useBooking } from "@/Context/BookingContext";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const DateTimeSelector = ({ sendDateToParent }) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [selectedTime, setSelectedTime] = useState("");
  const { booking, setBooking } = useBooking();
  console.log(booking);
  const workingHours = booking?.employeeWorkingHours || [];
  console.log(workingHours);

  const getNextDays = () => {
    const today = dayjs();
    return Array.from({ length: 25 }, (_, i) => today.add(i, "day"));
  };

  const generateTimeSlots = (from, to) => {
    return [`${from} - ${to}`]; // one full block
  };
  const selectedDay = useMemo(
    () => dayjs(selectedDate).format("dddd"), // e.g., "Monday"
    [selectedDate]
  );

  const daySchedule = useMemo(
    () => workingHours.find((item) => item.day === selectedDay),
    [selectedDay, workingHours]
  );

  const availableTimes = useMemo(() => {
    if (!daySchedule) return [];

    const { from, to } = daySchedule;

    // Simply return one block with "from - to"
    return [`${from} - ${to}`];
  }, [daySchedule]);

  // sending data to parent
  useEffect(() => {
    if (selectedDate && selectedTime) {
      sendDateToParent({ date: selectedDate, time: selectedTime });
    }
  }, [selectedDate, selectedTime]);

  return (
    <div>
      {/* Dates */}
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

      <div className="text-[#1D1B1B] font-semibold text-[22px] flex justify-between">
        {selectedDate}
        {selectedTime && <p className="text-center">{selectedTime}</p>}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 justify-center py-4">
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => (
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
            No working hours for {selectedDay}
          </p>
        )}
      </div>
    </div>
  );
};

export default DateTimeSelector;
