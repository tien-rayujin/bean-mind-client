
import AdminLayout from "@/components/layouts/AdminLayout";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return <AdminLayout>{props.children}</AdminLayout>;
};

export default Layout;
