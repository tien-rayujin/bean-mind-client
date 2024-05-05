import { ReactNode } from "react";
import { UserHeader } from "./Header/UserHeader";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-full overflow-y-hidden bg-sunsetBackground bg-cover p-12">
      <div className="relative grid h-full w-full place-items-center rounded-2xl bg-cover shadow-layoutPopup">
        {/* <!-- ===== Navigation Start ===== --> */}
        <UserHeader />
        {/* <!-- ===== Navigation End ===== --> */}

        {/* <!-- ===== Content Start ===== --> */}
        <main>
          <div>{children}</div>
        </main>
        {/* <!-- ===== Content End ===== --> */}
      </div>
    </div>
  );
};

export default UserLayout;
