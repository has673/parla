"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  const menuItems = [
    {
      label: "Home",
      href: "/HomeScreen",
      icon: "/images/home.png",
      activeIcon: "/images/home.png",
    },
    {
      label: "Explore",
      href: "/UserDashboard/Quotation",
      icon: "/images/explore.png",
      activeIcon: "/images/quotation.svg",
    },
    {
      label: "Appointments",
      href: "/Appointment",
      icon: "/images/appoint.png",
      activeIcon: "/images/appointwhite.png",
      match: [
        "/Appointment",
        "/Appointment/CancelAppointment",

        "/Appointment/SingleAppointment",
        "/Appointment/AppointmentDetail",
        "/BookAppointment/",
      ],
    },
    {
      label: "Favorite",
      href: "/Favorite",
      icon: "/images/Heart.png",
      activeIcon: "/images/paymentblue.svg",
    },
    {
      label: "Account",
      href: "/Service/Account",
      icon: "/images/Account.png",
      activeIcon: "/images/accountwhite.png",
    },
    {
      label: "Points",
      href: "/Points",
      icon: "/giftwhite.png",
      activeIcon: "/gift.png",
    },
    {
      label: "Stamp Cards",
      href: "/StampCard",
      icon: "/stampblack.png",
      activeIcon: "/stampwhite.png",
    },
    {
      label: "Gift Cards",
      href: "/Gift",
      icon: "/store.png",
      activeIcon: "/storewgite.png",
    },
  ];

  return (
    <div className="hidden md:flex flex-col w-1/5 bg-white h-auto border-r border-r-[#AAAAAA]">
      <div className="flex-1">
        <div className="mb-6 py-2">
          <ul>
            {menuItems.map((item, index) => {
              const active = isActive(item.match || item.href);

              return (
                <li
                  key={index}
                  className={`mb-6 px-4 ${
                    active && "border-l border-l-[var(--orange)]"
                  }`}
                >
                  <Link href={item.href}>
                    <div
                      className={`flex items-center px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                        active
                          ? "bg-[var(--orange)] text-white mx-3"
                          : "text-[#202224] mx-3"
                      }`}
                    >
                      <div className="mr-3 w-5 h-5 relative">
                        <Image
                          src={active ? item.activeIcon : item.icon}
                          alt={`${item.label} icon`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
