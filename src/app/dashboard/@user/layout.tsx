import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-accent">
      <nav>
        <Link href="/dashboard/profile">Profile</Link>
        <Link href="/dashboard/setting">Setting</Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
