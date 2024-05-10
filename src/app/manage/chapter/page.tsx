import Breadcrumb from "@/components/Breadcrumb";
import { FilterChapterButton } from "./components/Button";
import SearchBar from "@/components/SearchBar";
import ChapterTable from "./components/Table";

interface ChapterPageProps {
  searchParams: {
    pageIndex: string;
    pageSize?: string;
    term?: string;
  };
}

const Page: React.FC<ChapterPageProps> = async (props) => {
  const searchParams = props.searchParams;
  const pageIndex = Number(searchParams.pageIndex) || 1;
  const pageSize =
    Number(searchParams.pageSize) || Number(process.env.DEFAULT_PAGE_SIZE) || 2;
  const term = searchParams.term || "";

  return (
    <div className="relative h-full">
      <Breadcrumb pageName="Chapter" />

      {/* Search area */}
      <div className="mb-4 flex items-center gap-4">
        <SearchBar extras="w-full" />
        {/* Filter button */}
        <FilterChapterButton />
      </div>

      <ChapterTable pageIndex={pageIndex} pageSize={pageSize} term={term} />
    </div>
  );
};

export default Page;
