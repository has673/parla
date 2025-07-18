"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/Context/userContext";
import { CancelModal } from "../../../../../Components/Modals/CancelModal";
import Sidebar from "../../../../../Components/Layout/Sidebar";
import HeaderTab from "../../../../../Components/Layout/HeaderTab";

const CancelAppointment = () => {
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("active");

  const params = useParams();
  const router = useRouter();
  const { token } = useUser();
  const appointmentId = params?.id;

  const TABS = [
    // { path: "active", label: "Active" },
    // { path: "waiting", label: "Waiting" },
    // { path: "history", label: "History" },
  ];

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

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

  const deleteAppointment = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/deleteAppointment?appointmentId=${appointmentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.status === 200) {
        openModal();
        router.push("/Appointments");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (appointmentId && token) {
      getAppointment();
    }
  }, [appointmentId, token]);

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Appointments"
      />

      <div className="flex">
        <Sidebar />

        <div className="md:px-10 px-6 w-full">
          <div className="pt-4 bg-white">
            <div className="flex flex-row justify-between">
              <div className="md:text-lg text-sm">
                <p className="text-[var(--Cornflower-Blue)]">Appointments No</p>
                <p className="text-[var(--Cornflower-Blue)]">Beauty Expert</p>
                <p className="text-[var(--Cornflower-Blue)]">Date:</p>
                <p className="text-[var(--Cornflower-Blue)]">Time:</p>
                <p className="text-[var(--Cornflower-Blue)]">Service</p>
                <p className="text-[#252525] md:text-lg text-base font-bold">
                  Man Cave
                </p>
                <div className="relative md:w-100 md:h-25 my-3">
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
                <p className="text-[var(--orange)] font-semibold">$17,343</p>

                <div className="my-3">
                  <p className="text-[var(--Woodsmoke)] md:text-[20px] text-base font-medium">
                    Kadikoy, Istanbul
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

          {/* Cancellation Options */}
          <div className="flex md:flex-row md:justify-between flex-col my-3">
            <div className="md:w-2/5">
              <span className="text-lg font-semibold text-[var(--color-dark)]">
                Why do you want to cancel your appointment?
              </span>

              <div className="flex gap-x-3">
                <input type="checkbox" id="refund-card" />
                <label
                  htmlFor="refund-card"
                  className="text-[var(--darkGrey)] text-base font-medium"
                >
                  Refund to user Card
                </label>
              </div>

              <div className="flex gap-x-3">
                <input type="checkbox" id="refund-wallet" />
                <label
                  htmlFor="refund-wallet"
                  className="text-[var(--darkGrey)] text-base font-medium"
                >
                  To User Wallet Account
                </label>
              </div>

              <div className="my-3">
                <div className="flex flex-col gap-1 border-b border-[#E3E3E3] pb-2">
                  <div className="flex flex-row justify-between w-full">
                    <span className="text-sm font-semibold text-[var(--color-dark)]">
                      1 Classic male haircut
                    </span>
                    <span className="text-sm font-bold text-[var(--orange)]">
                      ${` ${appointment?.[0]?.price}`}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#1E232CC2] font-normal px-3">
                    Lorem Ipsum is simply dummy text
                  </span>
                </div>

                <div className="flex flex-col border-b border-[#E3E3E3] pb-2 mt-4">
                  <div className="flex flex-row justify-between w-full">
                    <span className="text-sm font-semibold text-[var(--color-dark)]">
                      1 Classic male haircut
                    </span>
                    <span className="text-sm font-bold text-[var(--orange)]">
                      $68,898
                    </span>
                  </div>
                  <span className="text-[10px] text-[#1E232CC2] font-normal px-3">
                    Lorem Ipsum is simply dummy text
                  </span>
                </div>
              </div>
            </div>

            {/* Textarea + Totals */}
            <div className="md:w-2/5 md:flex-col">
              <textarea
                placeholder="Write Something..."
                className="bg-white border-2 rounded-[10px] pl-3 border-[#D8DADC] md:h-22 md:w-88 w-84 h-18"
              ></textarea>

              <div className="my-3">
                <div className="flex flex-col gap-1 pb-2">
                  <div className="flex flex-row justify-between w-full">
                    <span className="text-sm font-semibold text-[var(--color-dark)]">
                      1 Classic male haircut
                    </span>
                    <span className="text-sm font-bold text-[var(--orange)]">
                      $68,898
                    </span>
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <div className="flex flex-row justify-between w-full">
                    <span className="text-sm font-semibold text-[var(--color-dark)]">
                      1 Classic male haircut
                    </span>
                    <span className="text-sm font-bold text-[var(--orange)]">
                      $68,898
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund options */}
          <div className="my-4">
            <span className="text-lg font-semibold text-[var(--color-dark)]">
              Please Choose your refund option
            </span>

            <div className="flex flex-col">
              <div className="flex gap-x-3">
                <input type="checkbox" id="option-1" />
                <label
                  htmlFor="option-1"
                  className="text-[var(--color-dark)] md:text-[17px] text-xs font-normal"
                >
                  I have a bike
                </label>
              </div>
              <span className="text-xs text-[#1E232CC2] font-normal px-6">
                Lorem Ipsum is simply dummy text
              </span>

              <div className="flex gap-x-3 mt-2">
                <input type="checkbox" id="option-2" />
                <label
                  htmlFor="option-2"
                  className="text-[var(--color-dark)] md:text-[17px] text-sm font-normal"
                >
                  I have a bike
                </label>
              </div>
              <span className="text-xs text-[#1E232CC2] font-normal px-6">
                Lorem Ipsum is simply dummy text
              </span>
            </div>
          </div>

          <button
            className="bg-[#405DE5] text-white rounded-[10px] w-full text-lg font-semibold h-14 my-2 justify-center items-center cursor-pointer"
            onClick={deleteAppointment}
          >
            Cancel the appointment
          </button>

          <CancelModal onClose={closeModal} isOpen={open} />
        </div>
      </div>
    </div>
  );
};

export default CancelAppointment;
