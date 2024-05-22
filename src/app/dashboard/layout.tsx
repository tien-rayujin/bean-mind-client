import { ReactNode } from "react";

export default function Layout({
  admin,
  user,
  children,
}: {
  admin: ReactNode;
  user: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <div className="flex w-full">
        <div className="w-1/2">{admin}</div>
        <div className="w-1/2">{user}</div>
      </div>
    </>
  );
}
