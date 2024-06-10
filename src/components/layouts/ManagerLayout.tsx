import { ReactNode } from "react";
import ManagerSideNav from "./Sidenav/ManagerSidenav";
import { ManagerSideNavExpanded } from "./Sidenav/components/ManagerSideNavItem";

const ManagerLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-y-auto bg-background bg-cover">
      {/* <!-- ===== Navigation Start ===== --> */}
      <ManagerSideNav />

      <ManagerSideNavExpanded />
      {/* <!-- ===== Navigation End ===== --> */}
      <div className="h-full grow bg-gray p-8">
        {/* <!-- ===== Content Start ===== --> */}
        <main className="h-full w-full">
          <div className="relative h-full">{children}</div>
        </main>
        {/* <!-- ===== Content End ===== --> */}
      </div>
    </div>
  );
};
export default ManagerLayout;
