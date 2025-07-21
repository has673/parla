import { Ellipsis, PhoneCall } from "lucide-react";
import Image from "next/image";

const ChatWindow = ({
  employeeData,
  sendMessage,
  message,
  setMessage,
  messages,
  userData,
}) => {
  console.log(messages, "msg", userData);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-b-[#F6FBFF]">
        <div className="flex items-center gap-2 ">
          <div className="w-12 h-12 relative">
            {" "}
            <Image
              src={employeeData?.image}
              alt="kevin.eth"
              fill
              className=" object-cover rounded-full"
            />
          </div>

          <div className=" text-[#213241]">
            <p className="text-xl font-semibold">
              {employeeData?.firstName} {employeeData?.lastName}
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <PhoneCall size={24} color="#2F2E2E" />
          <Ellipsis size={24} color="#424F63" />
        </div>
      </div>

      {/* Date */}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex  w-full  ${
              msg.senderId === userData._id ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs text-sm px-4 py-2 rounded-lg ${
                msg.senderId === userData._id
                  ? "bg-orange-400 text-white rounded-tr-none"
                  : "bg-[#F6FBFF] text-black rounded-tl-none"
              }`}
            >
              {msg.message}
              <div className="text-[10px] text-right mt-1 opacity-70">
                {msg.createdAt
                  ? new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <div className=" p-2 flex items-center ">
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 px-4 rounded-full border bg-[#F6FBFF] border-gray-300 text-sm outline-none placeholder:text-[#8593A8]"
        />
        <div className="ml-2 flex items-center gap-2 text-gray-400">
          <button>😊</button>
          <button className="cursor-pointer" onClick={sendMessage}>
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
