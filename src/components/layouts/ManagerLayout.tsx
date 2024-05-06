import { ReactNode } from "react";
import ManagerSideNav from "./Sidenav/ManagerSidenav";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-y-hidden bg-background bg-cover">
      {/* <!-- ===== Navigation Start ===== --> */}
      <ManagerSideNav />
      {/* <!-- ===== Navigation End ===== --> */}
      <div className="h-full flex-1 rounded-2xl bg-cover p-12">
        {/* <!-- ===== Content Start ===== --> */}
        <main className="h-full w-full">
          <div className="h-full">{children}</div>
        </main>
        {/* <!-- ===== Content End ===== --> */}
      </div>
    </div>
  );
};

export default UserLayout;
