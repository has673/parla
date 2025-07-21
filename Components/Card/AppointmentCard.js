"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

const AppointmentCard = ({ appointment }) => {
  const router = useRouter();
  const id = appointment?._id;
  const employeeId = appointment?.employeeId;
  console.log(appointment);
  const goToDetails = () => {
    router.push(`/Appointment/AppointmentDetail/${id}`);
  };

  const goToChat = (e) => {
    e.stopPropagation(); // prevent triggering parent click
    router.push(`/Chat/${employeeId}`);
  };

  return (
    <div className="my-2 cursor-pointer" onClick={goToDetails}>
      {/* Card section with rounded top only */}
      <div className="bg-white rounded-t-[11px] border border-[#BBBBBB]">
        <div className="flex md:flex-row flex-col">
          {/* Left image */}
          <div className="relative md:w-111 md:h-58 h-40 w-full">
            <Image
              src="/images/maps.png"
              alt="Map"
              fill
              className="object-cover rounded-t-[11px]"
            />
          </div>

          {/* Right content */}
          <div className="flex-1">
            <div className="flex justify-end p-2">
              <button
                onClick={goToChat}
                className="flex items-center space-x-2 text-sm text-[var(--Cornflower-Blue)]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat With Professional</span>
              </button>
            </div>

            <div className="px-4 md:pt-2 pb-4">
              <div className="flex md:flex-row md:justify-between text-lg md:text-[22px] font-normal gap-4 md:text-left">
                <div className="flex flex-col space-y-1">
                  <p className="text-[var(--Cornflower-Blue)]">
                    Appointments No
                  </p>
                  <p className="text-[var(--Cornflower-Blue)]">Beauty Expert</p>
                  <p className="text-[var(--Cornflower-Blue)]">Date:</p>
                  <p className="text-[var(--Cornflower-Blue)]">Time:</p>
                  <p className="text-[var(--Cornflower-Blue)]">Service</p>
                  <p className="text-[#252525] text-lg font-bold">Asume Dere</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p>{appointment?.appointmentNo}</p>
                  <p>{appointment?.employeeName}</p>
                  <p>{appointment?.bookingDate}</p>
                  <p>{appointment?.bookingTime}</p>
                  <p>{appointment?.serviceName}</p>
                  <p className="text-[var(--orange)] font-semibold">
                    ${appointment?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (only if status is pending) */}
      {appointment?.status === "pending" && (
        <div className="rounded-b-[11px] h-8 md:h-16 text-white flex justify-center items-center bg-[var(--orange)]">
          Assistant
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
