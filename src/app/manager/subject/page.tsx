import Breadcrumb from "@/components/Breadcrumb";
import { CreateSubjectButton } from "./components/ActionButton";
import SearchBar from "@/components/SearchBar";
import { FaFilter } from "react-icons/fa";
import SubjectTable from "./components/SubjectTable";

interface SubjectPageProps {
  searchParams: {
    pageIndex: string;
    pageSize?: string;
    term?: string;
  };
}

const Page: React.FC<SubjectPageProps> = async (props) => {
  const searchParams = props.searchParams;
  const pageIndex = Number(searchParams.pageIndex) || 1;
  const pageSize =
    Number(searchParams.pageSize) || Number(process.env.DEFAULT_PAGE_SIZE) || 2;
  const term = searchParams.term || "";

  return (
    <div className="relative h-full">
      <Breadcrumb pageName="Subject" />

      <CreateSubjectButton />

      {/* Search area */}
      <div className="mb-4 flex items-center gap-4">
        <SearchBar extras="w-full" />
        {/* Filter button */}
        <button className="grid h-12 w-12 place-items-center rounded-md bg-secondary/30 text-text ">
          <FaFilter />
        </button>
      </div>

      <SubjectTable pageIndex={pageIndex} pageSize={pageSize} term={term} />
    </div>
  );
};

export default Page;
