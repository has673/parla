import Header from "../../../Components/Layout/Header";
import Sidebar from "../../../Components/Layout/Sidebar";

export default function AppointmentLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header
          links={[
            { path: "/Active", label: "Active" },
            { path: "/Waiting", label: "Waiting" },
            { path: "/History", label: "History" },
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
