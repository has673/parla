import Header from "../../../Components/Layout/Header";
import Sidebar from "../../../Components/Layout/Sidebar";

export default function AppointmentLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header
          links={[
            { path: "/Appointment/Appointments", label: "Active" },
            { path: "/Appointment/AppointmentWaiting", label: "Waiting" },
            { path: "/Appointment/AppointmentHistory", label: "History" },
          ]}
        />
        <div className="flex">
          <Sidebar />
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
