import { ReactNode } from "react";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-full overflow-y-hidden bg-background p-12">
      <div className="relative grid h-full w-full place-items-center rounded-2xl">
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
