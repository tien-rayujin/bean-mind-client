import { AlertSnack } from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { StyButton } from "@/components/Button";
import Pagination from "@/components/Pagination";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import Link from "next/link";

const Page: React.FC<{}> = async (props) => {
  const getActivitiesRequest = await GetActivitiesRequestHandler({});
  const activities = getActivitiesRequest.data;

  const activitiesList = activities?.items.length ? (
    activities?.items.map((activity) => {
      return <div key={activity.id}>{activity.id}</div>;
    })
  ) : (
    <h2 className="text-secondary">No data to display</h2>
  );
  return (
    <>
      <Breadcrumb pageName="Home" />
      <div className="min-w-242.5">
        {/* <Alert message="Some message" status="warning" title="Warning" />
        <Alert message="Some message" status="danger" title="Danger" />
        <Alert message="Some message" status="success" title="Success" /> */}

        <AlertSnack message="Some message" status="warning" title="Warning" />
        <AlertSnack message="Some message" status="danger" title="Danger" />
        <AlertSnack message="Some message" status="success" title="Success" />
      </div>

      {activitiesList}

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
        <Link href="/manage/activityType">
          <StyButton>Manage ActivityType</StyButton>
        </Link>
        <Link href="/manage/questionType">
          <StyButton>Manage QuestionType</StyButton>
        </Link>
        <Link href="/manage/questionLevel">
          <StyButton>Manage QuestionLevel</StyButton>
        </Link>
      </div>

      <Pagination page={1} totalPage={10} />
    </>
  );
};

export default Page;
