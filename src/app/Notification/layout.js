import Header from "../../../Components/Layout/Header";
import Sidebar from "../../../Components/Layout/Sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header
          links={[
            { path: "/Info", label: "Info" },
            { path: "/Rating", label: "Rating" },
            { path: "/Question", label: "Question" },
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
