import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import WorksheetTable from "./components/Table";
import {
  CreateButton,
  FilterButton,
  ReloadButton,
} from "@/components/Form/Button";
import Link from "next/link";

interface WorksheetPageProps {
  searchParams: {
    pageIndex: string;
    pageSize?: string;
    term?: string;
  };
}

const Page: React.FC<WorksheetPageProps> = async (props) => {
  const searchParams = props.searchParams;
  const pageIndex = Number(searchParams.pageIndex) || 1;
  const pageSize =
    Number(searchParams.pageSize) || Number(process.env.DEFAULT_PAGE_SIZE) || 2;
  const term = searchParams.term || "";

  return (
    <div className="relative h-full">
      <Breadcrumb pageName="Worksheet" />

      <section className="mb-4 w-full rounded-md bg-background/30 p-4 shadow-md">
        {/* Search area */}
        <div className="mb-4 flex items-center gap-4">
          <SearchBar extras="flex-1" />
          <Link href={"worksheet/create"}>
            <CreateButton text="Create worksheet" extras="h-12" />
          </Link>
          <FilterButton />
          <ReloadButton />
        </div>

        {/* Filter area */}
      </section>

      <WorksheetTable pageIndex={pageIndex} pageSize={pageSize} term={term} />
    </div>
  );
};

export default Page;
