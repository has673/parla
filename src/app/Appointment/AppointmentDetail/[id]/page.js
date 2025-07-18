"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/Context/userContext";

import { Loader } from "../../../../../Components/Loader";
import HeaderTab from "../../../../../Components/Layout/HeaderTab";
import Sidebar from "../../../../../Components/Layout/Sidebar";

const SingleAppointment = () => {
  const params = useParams();
  const appointmentId = params?.id;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState(null);
  const { token } = useUser();

  const TABS = [
    // { path: "active", label: "Active" },
    // { path: "waiting", label: "Waiting" },
    // { path: "history", label: "History" },
  ];

  const [activeTab, setActiveTab] = useState("active");

  const getAppointment = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getAppointmentDetail?appointmentId=${appointmentId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = await response.json();
      setAppointment(data?.data);
    } catch (err) {
      console.error("Failed to fetch appointment:", err);
    } finally {
      setLoading(false);
    }
  };

  // const deleteAppointment = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/deleteAppointment?appointmentId=${appointmentId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     if (data.status === 200) {
  //       router.push("/Appointments");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const next = () => {
    router.push(`/Appointment/CancelAppointment/${appointmentId}`);
  };

  useEffect(() => {
    if (appointmentId && token) {
      getAppointment();
    }
  }, [appointmentId, token]);

  if (loading) return <Loader />;

  const status = appointment?.[0]?.status;

  return (
    <div>
      {/* Header with Tabs */}
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Appointments"
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          {/* Delay Banner */}
          <div className="bg-[#FFC805] text-white rounded-md w-full text-lg font-medium h-10 mt-8 mb-2 flex py-2 justify-center items-center">
            Delay +30 Mint
          </div>

          {/* Appointment Info Section */}
          <div className="md:px-3 bg-white border-b border-b-[#EFEEEE] px-0">
            <h3 className="text-[var(--color-dark)] font-medium md:text-xl text-base">
              Explaintion
            </h3>
            <h3 className="text-[var(--color-dark)] font-medium md:text-xl text-base">
              Busy
            </h3>

            <div className="flex flex-row justify-between">
              <div>
                <p className="text-[var(--Cornflower-Blue)]">Appointments No</p>
                <p className="text-[var(--Cornflower-Blue)]">Beauty Expert</p>
                <p className="text-[var(--Cornflower-Blue)]">Date:</p>
                <p className="text-[var(--Cornflower-Blue)]">Time:</p>
                <p className="text-[var(--Cornflower-Blue)]">Service</p>
                <p className="text-[#252525] text-lg font-bold">Man Cave</p>

                <div className="relative w-100 h-25 my-3">
                  <Image
                    src="/images/maps.png"
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:text-lg text-sm">
                <p>{appointment?.[0]?.appointmentNo}</p>
                <p>{appointment?.[0]?.employeeName}</p>
                <p>{appointment?.[0]?.bookingDate}</p>
                <p>{appointment?.[0]?.bookingTime}</p>
                <p>{appointment?.[0]?.serviceName}</p>
                <p className="text-[var(--orange)] font-semibold">
                  ${` ${appointment?.[0]?.price}`}
                </p>

                <div className="my-3">
                  <p className="text-[var(--Woodsmoke)] text-[20px] font-medium">
                    Kadikoy,Istanbul
                  </p>
                  <p className="text-[#18191A80] text-base font-medium">
                    Bagdat Caddies 19/2
                  </p>
                  <p className="text-[#18191A80] text-base font-medium">
                    Bagdat Caddies 19/2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conditional Delete Button */}
          {status === "pending" && (
            <div className="flex md:justify-end justify-center">
              <div className="flex flex-row my-3 gap-x-2">
                <button
                  className="border rounded-[10px] text-[var(--orange)] bg-white text-lg flex justify-center items-center font-medium px-12 py-2 cursor-pointer"
                  onClick={next}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
