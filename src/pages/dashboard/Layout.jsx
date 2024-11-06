import { Sidebar } from "../../components/DashboardComponents/Sidebar";
import { Topbar } from "../../components/Topbar";
import { useState } from "react";

export const Layout = ({ children }) => {
 const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

 const handleSidebarToggle = (collapsed) => {
  setSidebarCollapsed(collapsed);
 };

 return (
  <div className="flex h-screen bg-mainbg">
   <Sidebar onToggle={handleSidebarToggle} />

   {/* Main content wrapper */}
   <div
    className={`flex-1 overflow-x-hidden ${
     isSidebarCollapsed ? "ml-0" : "ml-0 md:ml-[170px]"
    }`}
   >
    {/* Scrollable content area */}
    <div className="h-screen overflow-y-auto">
     <div className="px-4 md:px-10 py-5">
      <Topbar />
      <div className="mt-5">{children}</div>
     </div>
    </div>
   </div>
  </div>
 );
};
