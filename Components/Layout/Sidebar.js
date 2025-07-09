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
          <div className="mb-6 py-2">
            <ul>
              <li
                className={`mb-6   px-4  ${
                  isActive(["/HomeScreen"]) &&
                  "border-l border-l-[var(--orange)]"
                } `}
              >
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
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li
                className={`mb-6   px-4  ${
                  isActive(["/Explore"]) && "border-l border-l-[var(--orange)]"
                } `}
              >
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
                        width={16}
                        height={16}
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
                    "/Appointment/Appointments",
                    "/Appointment/CancelAppointment",
                    "/Appointment/Appointment/Waiting",
                    "/Appointment/SingleAppointment",
                    "/Appointment/AppointmentDetail",
                    "/Appointment/AppointentHistory",
                    "/BookAppointment/",
                  ]) && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/Appointment/Appointments">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive([
                        "/Appointment/Appointments",
                        "/Appointment/CancelAppointment",
                        "/Appointment/Waiting",
                        "/Appointment/SingleAppointment",
                        "/Appointment/AppointmentDetail",
                        "/Appointment/AppointentHistory",
                      ])
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/appoint.png"
                        alt=" icon"
                        width={16}
                        height={16}
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
                <Link href="/Favorite">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/Favorite")
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
                <Link href="/Service/Account">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/Service/Account")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/Service/Account")
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
              <li
                className={`mb-6   px-4  ${
                  isActive("/Favorite") && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/Gift">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/Gift")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        // src="/images/medication.png"
                        src={
                          isActive("/Gift")
                            ? "/images/paymentblue.svg"
                            : "/giftwhite.png"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Points</span>
                  </div>
                </Link>
              </li>
              <li
                className={`mb-6   px-4  ${
                  isActive("/StampCard") && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/StampCard">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/StampCard")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        // src="/images/medication.png"
                        src={
                          isActive("/StampCard")
                            ? "/images/paymentblue.svg"
                            : "/stampwhite.png"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Stamp Cards</span>
                  </div>
                </Link>
              </li>
              <li
                className={`mb-6   px-4  ${
                  isActive("/Favorite") && "border-l border-l-[var(--orange)]"
                } `}
              >
                <Link href="/Gift">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                      isActive("/Gift")
                        ? "bg-[var(--orange)] text-white mx-3"
                        : "text-[#202224] mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        // src="/images/medication.png"
                        src={
                          isActive("/Gift")
                            ? "/images/paymentblue.svg"
                            : "/images/Heart.png"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Gift Cards</span>
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
