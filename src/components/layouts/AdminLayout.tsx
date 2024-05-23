import { ReactNode } from "react";
import ManagerSideNav from "./Sidenav/ManagerSidenav";
import Breadcrumb from "../Breadcrumb";
import { AdminHeader } from "./Header/AdminHeader";


const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-y-auto bg-background bg-cover">
      {/* <!-- ===== Navigation Start ===== --> */}
      <ManagerSideNav />
      {/* <!-- ===== Navigation End ===== --> */}
      <div className="h-full flex-1 rounded-2xl bg-cover m-3">
        <AdminHeader/>
        {/* <!-- ===== Content Start ===== --> */}
        <main className="">
          <div className="relative h-full">{children}</div>
        </main>
        {/* <!-- ===== Content End ===== --> */}
      </div>
    </div>
  );
};

export default UserLayout;
