import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import UserTable from "./components/Table";
import {
  CreateButton,
  FilterButton,
  ReloadButton,
} from "@/components/Form/Button";
import Link from "next/link";
import { UserFilter } from "./components/Filter";

interface UserPageProps {
  searchParams: {
    pageIndex: string;
    pageSize?: string;
    term?: string;
    isDeleted?: string;
  };
}

export const dynamic = "force-dynamic";

const Page: React.FC<UserPageProps> = async (props) => {
  const searchParams = props.searchParams;
  const pageIndex = Number(searchParams.pageIndex) || 1;
  const pageSize =
    Number(searchParams.pageSize) || Number(process.env.DEFAULT_PAGE_SIZE) || 2;
  const term = searchParams.term || "";
  const isDeleted = searchParams.isDeleted || "";

  return (
    <div className="relative h-full">
      <Breadcrumb pageName="User" />

      <section className="mb-4 w-full rounded-md bg-background/30 p-4 shadow-md">
        {/* Search area */}
        <div className="mb-4 flex items-center gap-4">
          <SearchBar extras="flex-1" />
          <Link href={"user/create"}>
            <CreateButton text="Create user" extras="h-12" />
          </Link>
          <FilterButton />
          <ReloadButton />
        </div>

        {/* Filter area */}
        <UserFilter />
      </section>

      <UserTable
        pageIndex={pageIndex}
        pageSize={pageSize}
        term={term}
        isDeleted={isDeleted}
      />
    </div>
  );
};

export default Page;
