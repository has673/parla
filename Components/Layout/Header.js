"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SidebarModal from "../Modals/SidebarModal";

export default function Header({ links }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row justify-between p-4 py-0 border-b border-b-[#ECEAEA] bg-white w-full gap-y-2 md:gap-y-0">
      {/* Left side - logo and title */}
      <div className="flex md:flex-row justify-center flex-col my-2 ">
        {" "}
        <div className="flex items-center md:flex-row flex-col  gap-2  ">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <span className="font-bold md:text-2xl text-lg  text-[#656565]">
            PARLA
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-row justify-between items-end md:pepx-14 overflow-x-auto ">
        <h3 className="text-[var(--color-dark)] md:text-xl text-sm font-bold md:py-3">
          Appointment details
        </h3>
        <div>
          {" "}
          <nav>
            <ul className="flex flex-row md:gap-x-3  list-none font-medium md:text-base text-xs cursor-pointer text-black ">
              {links.map(({ path, label }) => (
                <li key={path} className=" h-full flex ">
                  <Link
                    href={path}
                    className={`px-2  border-b-3 ${
                      pathname === path
                        ? "border-[var(--orange)] text-[var(--orange)] pb-2"
                        : "border-transparent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Right side - icons */}
      <div className="flex md:items-center gap-6 justify-center  ">
        {/* search icon, messages, notifications */}
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          {" "}
          <Image
            src="/images/search.png"
            alt="Search"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          <Image
            src="/images/chat.png"
            alt="Messages"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-6 md:h-6 w-4 h-4">
          <Image
            src="/images/bell.png"
            alt="Messages"
            fill
            className="cursor-pointer object-cover"
            onClick={() => {
              router.push("/Notification");
            }}
          />
        </div>

        <Image
          src="/images/menu.png"
          alt="menu"
          width={24}
          height={24}
          className="hidden md:block cursor-pointer object-cover"
        />

        <div className="md:hidden">
          {" "}
          <SidebarModal />
        </div>
      </div>
    </header>
  );
}
