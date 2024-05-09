import ManagerLayout from "@/components/layouts/ManagerLayout";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return <ManagerLayout>{props.children}</ManagerLayout>;
};

export default Layout;
