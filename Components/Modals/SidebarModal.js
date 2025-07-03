"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SidebarModal = () => {
  const pathname = usePathname();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu button to open modal */}
      <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          {" "}
          <Image src="/images/menu.png" alt="menu" width={24} height={24} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-sm flex ">
          {/* Side drawer */}
          <div className="w-2/3 h-full bg-gray-50 p-4 rounded-r-xl overflow-y-auto">
            {/* Header with close button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={80} height={60} />
                <span className="font-bold text-2xl text-[#656565]">PARLA</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X size={24} color="#000" />
              </button>
            </div>

            {/* Menu Links */}
            <ul>
              <li className="mb-6">
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/UserDashboard/HomeScreen"
                >
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/HomeScreen")
                        ? "bg-[var(--orange)] text-white"
                        : "text-[#202224]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/home.png"
                        alt="Pet Profile icon"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <span>Home</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6">
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/UserDashboard/Quotation"
                >
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Quotation")
                        ? "bg-[var(--orange)] text-white"
                        : "text-[#202224]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Quotation")
                            ? "/images/quotation.svg"
                            : "/images/explore.png"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Explore</span>
                  </div>
                </Link>
              </li>

              <li
                className={`mb-6 px-4 ${
                  isActive([
                    "/Appointments",
                    "/CancelAppointment",
                    "/Waiting",
                    "/SingleAppointment",
                    "/AppointmentDetail",
                    "/AppointentHistory",
                  ]) && "border-l border-l-[var(--orange)]"
                }`}
              >
                <Link onClick={() => setIsOpen(false)} href="/Appointments">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive([
                        "/Appointments",
                        "/CancelAppointment",
                        "/Waiting",
                        "/SingleAppointment",
                        "/AppointmentDetail",
                        "/AppointentHistory",
                      ])
                        ? "bg-[var(--orange)] text-white"
                        : "text-[#202224]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/Appointments",
                            "/CancelAppointment",
                            "/Waiting",
                            "/SingleAppointment",
                            "/AppointmentDetail",
                            "/AppointentHistory",
                          ])
                            ? "/images/appointwhite.png"
                            : "/images/appoint.png"
                        }
                        alt=" icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Appointments</span>
                  </div>
                </Link>
              </li>

              <li
                className={`mb-6 px-4 ${
                  isActive("/Favorite") && "border-l border-l-[var(--orange)]"
                }`}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/UserDashboard/Payment"
                >
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Payment")
                        ? "bg-[var(--orange)] text-white"
                        : "text-[#202224]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Payment")
                            ? "/images/paymentblue.svg"
                            : "/images/Heart.png"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Favorite</span>
                  </div>
                </Link>
              </li>

              <li
                className={`mb-6 px-4 ${
                  isActive("/Account") && "border-l border-l-[var(--orange)]"
                }`}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/UserDashboard/Help"
                >
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Help")
                        ? "bg-[var(--orange)] text-white"
                        : "text-[#202224]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Help")
                            ? "/images/helpblue.svg"
                            : "/images/Account.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>Account</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* clicking outside closes modal */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default SidebarModal;
