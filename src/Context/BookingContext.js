"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    serviceId: null,
    serviceName: "",
    serviceMints: "",
    price: "",
    employeeId: null,
    employeeName: "",
    discount: false,
    discountDetail: null,
    employeeWorkingHours: [],
    date: null,
    time: null,
  });

  // Load booking from localStorage (once on mount)
  useEffect(() => {
    const stored = localStorage.getItem("bookingData");
    if (stored) {
      try {
        setBooking(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse bookingData:", err);
      }
    }
  }, []);

  // Save booking to localStorage on change
  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(booking));
  }, [booking]);

  // Clear booking
  const clearBooking = () => {
    setBooking({
      serviceId: null,
      serviceName: "",
      serviceMints: "",
      price: "",
      employeeId: null,
      employeeName: "",
      discount: false,
      discountDetail: null,
      employeeWorkingHours: [],
      date: null,
      time: null,
    });
    localStorage.removeItem("bookingData");
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
