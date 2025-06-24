import React from "react";
import NotificationCard from "../../../Components/Card/NotificationCard";

const Notification = () => {
  return (
    <div className="px-6">
      <NotificationCard
        username="Drey"
        message="I Thought lol"
        timestamp="yesterday"
        number={3}
      />
      <NotificationCard
        username="Drey"
        message="I Thought lol"
        timestamp="yesterday"
        number={3}
      />
      <NotificationCard
        username="Drey"
        message="I Thought lol"
        timestamp="yesterday"
        number={3}
      />
    </div>
  );
};

export default Notification;
