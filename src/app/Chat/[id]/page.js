"use client";

import { useUser } from "@/Context/userContext";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import Sidebar from "../../../../Components/Layout/Sidebar";
import ChatHeader from "../../../../Components/Layout/ChatHeader";
import ChatWindow from "../../../../Components/ChatWindow";
import { Loader } from "../../../../Components/Loader";

export default function Chat() {
  const { userData } = useUser();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(userData?.firstName || "");
  const [employee, setEmployee] = useState(null);
  const [socketId, setSocketId] = useState(null);
  const [target, setTarget] = useState("");
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const { id } = params;
  const { token } = useUser();

  const socketRef = useRef(null);

  useEffect(() => {
    if (id && token) {
      getEmployee();
    }
  }, [id, token]);
  const getEmployee = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/chatting/getEmployeeData?employeeId=${id}`,
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
      setEmployee(data?.data);
    } catch (err) {
      console.error("Failed to fetch employee:", err);
    } finally {
      setLoading(false);
    }
  };

  //for socket initilisation
  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_BASE_URL_Chat}`, {
      transports: ["websocket"],
      withCredentials: true,
      auth: {
        token,
      },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setSocketId(socket.id);
    });

    socket.emit("load-chat", { receiverId: id, receiverType: "employee" });
    // Receive messages
    socket.on("chat-history", (messages) => {
      setChatLog(messages); // Update state
    });
    return () => {
      socket.disconnect();
    };
  }, [token]);

  //recive messages
  useEffect(() => {
    // Connect socket only once on first mount
    socketRef.current = io(`${process.env.NEXT_PUBLIC_BASE_URL_Chat}`);

    // Listen for incoming messages
    socketRef.current.on("receivePrivateMessage", ({ from, message }) => {
      setChatLog((prev) => [...prev, `${from}: ${message}`]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socketRef.current.emit("private-message", {
      receiverId: id,
      receiverType: "employee",
      message,
    });

    // Append to local chat log
    setChatLog((prev) => [
      ...prev,
      {
        senderId: userData?._id,
        message,
      },
    ]);
    setMessage("");
  };

  const TABS = [];

  if (loading) return <Loader />;
  return (
    <div>
      <ChatHeader links={TABS} title="Chat" />
      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          <ChatWindow
            employeeData={employee}
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
            messages={chatLog}
            userData={userData}
          />
        </div>
      </div>
    </div>
  );
}
