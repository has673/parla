"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  return (
    <div className="hidden md:flex flex-col w-1/5  bg-white h-auto border-r border-r-[#AAAAAA]">
      <div>
        <div className="flex-1 ">
          {/* MENU Section */}
          <div className="mb-6">
            <ul>
              <li className="mb-6 mx-6">
                <Link href="/HomeScreen">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/HomeScreen")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224]  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/home.png"
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/UserDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/PainScore")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224]  mx-3"
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
                className={`mb-6   px-4  ${
                  isActive([
                    "/Appointments",
                    "/CancelAppointment",
                    "/Waiting",
                    "/SingleAppointment",
                    "/AppointmentDetail",
                    "/AppointentHistory",
                  ]) && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/Appointments">
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
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
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
                className={`mb-6   px-4  ${
                  isActive("/Favorite") && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/UserDashboard/Payment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Payment")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        // src="/images/medication.png"
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
                className={`mb-6   px-4  ${
                  isActive("/Account") && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/Account">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/Account")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/Account")
                            ? "/images/accountwhite.png"
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
