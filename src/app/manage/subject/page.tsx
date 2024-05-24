import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import SubjectTable from "./components/Table";
import {
  CreateButton,
  FilterButton,
  ReloadButton,
} from "@/components/Form/Button";
import Link from "next/link";
import { SubjectFilter } from "./components/Filter";

interface SubjectPageProps {
  searchParams: {
    pageIndex: string;
    pageSize?: string;
    term?: string;
    isDeleted?: string;
  };
}

export const dynamic = "force-dynamic";

const Page: React.FC<SubjectPageProps> = async (props) => {
  const searchParams = props.searchParams;
  const pageIndex = Number(searchParams.pageIndex) || 1;
  const pageSize =
    Number(searchParams.pageSize) || Number(process.env.DEFAULT_PAGE_SIZE) || 2;
  const term = searchParams.term || "";
  const isDeleted = searchParams.isDeleted || "";

  return (
    <div className="relative h-full">
      <Breadcrumb pageName="Subject" />

      <section className="mb-4 w-full rounded-md bg-background/30 p-4 shadow-md">
        {/* Search area */}
        <div className="mb-4 flex items-center gap-4">
          <SearchBar extras="flex-1" />
          <Link href={"subject/create"}>
            <CreateButton text="Create subject" extras="h-12" />
          </Link>
          <FilterButton />
          <ReloadButton />
        </div>

        {/* Filter area */}
        <SubjectFilter />
      </section>

      <SubjectTable
        pageIndex={pageIndex}
        pageSize={pageSize}
        term={term}
        isDeleted={isDeleted}
      />
    </div>
  );
};

export default Page;
