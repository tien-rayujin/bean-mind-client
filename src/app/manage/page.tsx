import { AlertSnack } from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { StyButton } from "@/components/Button";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const Page: React.FC<{}> = async (props) => {
  return (
    <>
      <Breadcrumb pageName="Home" />
      <div className="min-w-242.5">
        <AlertSnack message="Some message" status="warning" title="Warning" />
        <AlertSnack message="Some message" status="danger" title="Danger" />
        <AlertSnack message="Some message" status="success" title="Success" />
      </div>

      <h2 className="text-xl">Goto</h2>

      <div className="flex flex-wrap gap-2.5">
        <Link href="/manage/subject">
          <StyButton>Manage Subject</StyButton>
        </Link>
        <Link href="/manage/course">
          <StyButton>Manage Course</StyButton>
        </Link>
        <Link href="/manage/chapter">
          <StyButton>Manage Chapter</StyButton>
        </Link>
        <Link href="/manage/topic">
          <StyButton>Manage Topic</StyButton>
        </Link>
        <Link href="/manage/questionType">
          <StyButton>Manage QuestionType</StyButton>
        </Link>
        <Link href="/manage/questionLevel">
          <StyButton>Manage QuestionLevel</StyButton>
        </Link>
        <Link href="/manage/question">
          <StyButton>Manage Question</StyButton>
        </Link>
        <Link href="/manage/worksheetTemplate">
          <StyButton>Manage WorksheetTemplate</StyButton>
        </Link>
        <Link href="/manage/worksheet">
          <StyButton>Manage Worksheet</StyButton>
        </Link>
      </div>

      <Pagination page={1} totalPage={10} />
    </>
  );
};

export default Page;
