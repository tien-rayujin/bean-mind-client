import { StyButton } from "@/components/Button";
import ManagerLayout from "@/components/layouts/ManagerLayout";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <ManagerLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href={"/manage"} className="mt-4">
          <StyButton>Return</StyButton>
        </Link>
      </div>
    </ManagerLayout>
  );
};

export default NotFound;
