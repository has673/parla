"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/Context/LanguageContext";

const SidebarModal = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
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
      label: "Appointments",
      href: "/Appointment",
      icon: "/images/appoint.png",
      activeIcon: "/images/appointwhite.png",
      match: [
        "/Appointment",
        "/Appointment/CancelAppointment/[id]",
        "/Appointment/AppointmentDetail/[id]",
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
      href: "/Account",
      icon: "/images/Account.png",
      activeIcon: "/images/accountwhite.png",
    },
    {
      label: "Points",
      href: "/Points",
      icon: "/gift.png",
      activeIcon: "/giftwhite.png",
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
    {
      label: "Language",
      href: "/Language",
      icon: "/globeblack.png",
      activeIcon: "/globe.png",
    },
  ];

  return (
    <>
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          <Image src="/images/menu.png" alt="menu" width={24} height={24} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-sm flex">
          {/* Sidebar Modal Content */}
          <div className="w-2/3 h-full bg-white p-4 rounded-r-xl overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={80} height={60} />
                <span className="font-bold text-2xl text-[#656565]">PARLA</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X size={24} color="#000" />
              </button>
            </div>

            {/* Navigation Items */}
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
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
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

          {/* Close modal by clicking outside */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default SidebarModal;
