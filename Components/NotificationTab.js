"use client";
import React, { useEffect, useState } from "react";
import NotificationCard from "./Card/NotificationCard";
import { Loader } from "./Loader";
import { useUser } from "@/Context/userContext";

const NotificationTab = ({ type }) => {
  const [notifcations, setNotifcations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useUser();

  const getNotifications = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        type,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Notification/getNotification?${query}`,
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
      setNotifcations(data.data);

      //   setPagination(data.pagination); // Save pagination info
    } catch (err) {
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getNotifications();
    }
  }, [token, type]);

  return (
    <div className="px-2">
      {loading ? (
        <Loader />
      ) : (
        <>
          {notifcations?.length > 0 ? (
            notifcations.map((notification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No Notification found</p>
          )}
        </>
      )}
    </div>
  );
};

export default NotificationTab;
