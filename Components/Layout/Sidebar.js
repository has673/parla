"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/Context/userContext";
import { useLanguage } from "@/Context/LanguageContext";

const Sidebar = () => {
  const pathname = usePathname();
  const { token } = useUser();
  const { t } = useLanguage();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  const menuItems = [
    {
      label: t("menu.home"),
      href: "/HomeScreen",
      icon: "/images/home.png",
      activeIcon: "/images/home.png",
    },

    {
      label: t("menu.appointments"),
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
      label: t("menu.favorite"),
      href: "/Favorite",
      icon: "/images/Heart.png",
      activeIcon: "/images/paymentblue.svg",
    },
    {
      label: t("menu.account"),
      href: "/Account",
      icon: "/images/Account.png",
      activeIcon: "/images/accountwhite.png",
    },
    {
      label: t("menu.points"),
      href: "/Points",
      icon: "/gift.png",
      activeIcon: "/giftwhite.png",
      width: 28,
      height: 28,
    },
    {
      label: t("menu.stamp_cards"),
      href: "/StampCard",
      icon: "/stampblack.png",
      activeIcon: "/stampwhite.png",
    },
    {
      label: t("menu.gift_cards"),
      href: "/Gift",
      icon: "/store.png",
      activeIcon: "/storewgite.png",
    },
    {
      label: t("menu.language"),
      href: "/Language",
      icon: "/globeblack.png",
      activeIcon: "/globe.png",
    },
    {
      label: "Inbox",
      href: "/Inbox",
      icon: "/globeblack.png",
      activeIcon: "/globe.png",
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
                      className={`flex items-start px-4 py-2 mb-1 rounded-md cursor-pointer transition-colors font-medium ${
                        active
                          ? "bg-[var(--orange)] text-white mx-3"
                          : "text-[#202224] mx-3"
                      }`}
                    >
                      <div className="mr-3 w-5 h-5 relative ">
                        <Image
                          src={active ? item.activeIcon : item.icon}
                          alt={`${item.label} icon`}
                          width={item.width || 20}
                          height={item.height || 20}
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
