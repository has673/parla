"use client";

import { useUser } from "@/Context/userContext";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const InboxUI = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const messages = [
    {
      name: "Marouane Belatok",
      time: "2:00 PM",
      section: "Today",
      avatar: "/images/courtney.png",
    },
    {
      name: "Marouane Belatok",
      time: "12:00 PM",
      section: "Today",
      avatar: "/images/courtney.png",
    },
    {
      name: "Marouane Belatok",
      time: "Yesterday",
      section: "Last 7 days",
      avatar: "/images/courtney.png",
    },
    {
      name: "Marouane Belatok",
      time: "2 days ago",
      section: "Last 7 days",
      avatar: "/images/courtney.png",
    },
    {
      name: "Marouane Belatok",
      time: "Jul 3",
      section: "Older",
      avatar: "/images/courtney.png",
    },
  ];

  const groupMessagesBySection = () => {
    const grouped = {
      Today: [],
      "Last 7 days": [],
      Older: [],
    };

    messages.forEach((msg) => {
      grouped[msg.section].push(msg);
    });

    return grouped;
  };

  const { token } = useUser();
  useEffect(() => {
    if (token) {
      getChats();
    }
  }, [token]);
  const getChats = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/chatting/getChatUsers`,
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
      setChats(data?.data);
      console.log(data?.data);
    } catch (err) {
      console.error("Failed to fetch employee:", err);
    } finally {
      setLoading(false);
    }
  };
  const groupedMessages = groupMessagesBySection();
  console.log(chats);
  return (
    <div className="flex h-screen font-sans text-sm">
      {/* Left Column */}
      <div className="w-3/4 border-r border-gray-300  overflow-y-auto">
        {Object.entries(groupedMessages).map(([section, msgs]) => (
          <div key={section} className="mb-6">
            <h3
              className="text-[#1E232C]
            text-xl font-semibold mb-2"
            >
              {section}
            </h3>
            {msgs.map((msg, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md px-4"
              >
                <div className="flex items-center space-x-2 p">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={msg.avatar}
                      alt={msg.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{msg.name}</p>
                    <p className="text-xs text-gray-400">{msg.time}</p>
                  </div>
                </div>
                <PhoneCall size={24} color="#2F2E2E" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className=" w-1/4 overflow-y-auto  ">
        <h3 className="text-black text-xl font-semibold mb-4 px-7">Inbox</h3>
        {chats.map((chat, idx) => (
          <div
            key={idx}
            className=" w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-md "
          >
            <div className="flex items-center space-x-2 ">
              <div className="w-12 h-12 relative">
                <Image
                  src={chat.image}
                  alt="all"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-base">
                  {chat.firstName} {chat.lastName}
                </p>
                <p className="text-xs font-normal text-[#8593A8]">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            {chat.unreadCount > 0 && (
              <span className="w-6 h-6 border border-[var(--orange)] rounded-full flex justify-center items-center">
                {" "}
                {chat.unreadCount}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxUI;
