"use client";

import { useUser } from "@/Context/userContext";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Sidebar from "../../../Components/Layout/Sidebar";
import TypingList from "../../../Components/Messages";
import InboxUI from "../../../Components/InboxUi";
import ChatHeader from "../../../Components/Layout/ChatHeader";

export default function PrivateChat() {
  const { userData } = useUser();
  const [username, setUsername] = useState(userData?.firstName || "");
  const [target, setTarget] = useState("");
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const socketRef = useRef(null);

  // useEffect(() => {
  //   // Replace with your actual ngrok link
  //   const socket = io("https://35f3d545877f.ngrok-free.app", {
  //     transports: ["websocket"],
  //   });

  //   socketRef.current = socket;

  //   socket.on("connect", () => {
  //     console.log("🟢 Connected to socket server:", socket.id);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  //   useEffect(() => {
  //     // Connect socket only once on first mount
  //     socketRef.current = io(process.env.NEXT_PUBLIC_BASE_URL);

  //     // Listen for incoming messages
  //     socketRef.current.on("receivePrivateMessage", ({ from, message }) => {
  //       setChatLog((prev) => [...prev, `${from}: ${message}`]);
  //     });

  //     return () => {
  //       socketRef.current.disconnect();
  //     };
  //   }, []);

  const register = () => {
    if (!username) return;
    socketRef.current.emit("register", username);
  };

  const sendMessage = () => {
    if (!username || !target || !message.trim()) return;

    socketRef.current.emit("privateMessage", {
      from: username,
      to: target,
      message,
    });

    setChatLog((prev) => [...prev, `You (to ${target}): ${message}`]);
    setMessage("");
  };
  const TABS = [
    { path: "calls", label: "Calls" },
    { path: "inbox", label: "Inbox" },
    { path: "waiting", label: "Waiting" },
  ];
  const [activeTab, setActiveTab] = useState("calls");
  return (
    <div>
      <ChatHeader
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Messages"
      />
      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          {activeTab === "calls" && <InboxUI />}
          {activeTab === "inbox" && <TypingList />}
          {activeTab === "waiting" && <TypingList />}
        </div>
      </div>
    </div>
  );
}
