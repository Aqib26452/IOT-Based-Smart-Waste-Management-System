import { Outlet } from "react-router-dom";
import CollectorSidebar from "../components/CollectorSidebar/Sidebar";

const CollectorLayout = () => {
  return (
    <div className="flex  min-h-screen">
      <CollectorSidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default CollectorLayout;
