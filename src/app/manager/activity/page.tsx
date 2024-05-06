import Breadcrumb from "@/components/Breadcrumb";

interface SubjectPageProps {
  searchParams: {
    pageIndex: number;
    pageSize?: number;
    totalPage: number;
  };
}

const Page: React.FC<SubjectPageProps> = (props) => {
  // const { pageIndex, pageSize = 10 } = props.searchParams;
  const pageIndex = Number(props.searchParams.pageIndex) || 1;
  const pageSize = Number(props.searchParams.pageSize) || 20;

  return (
    <div>
      <Breadcrumb pageName="Subject" />
    </div>
  );
};

export default Page;
