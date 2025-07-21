import Image from "next/image";

const users = [
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
  {
    name: "kevin.eth",
    status: "kevin.eth is typing...",
    avatar: "/images/courtney.png",
  },
];

const TypingList = () => {
  return (
    <div className="w-full p-4 bg-white">
      {users.map((user, index) => (
        <div key={index} className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base font-medium text-[#213241]">
                {user.name}
              </p>
              <p className="text-sm text-[#8593A8]">{user.status}</p>
            </div>
          </div>
          <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default TypingList;
