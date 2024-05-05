import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";
import ManagerLayout from "@/components/layouts/ManagerLayout";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";

const Page: React.FC<{}> = async (props) => {
  const getActivitiesRequest = await GetActivitiesRequestHandler();
  const activities = getActivitiesRequest.result;

  const activitiesList = activities?.items.length ? (
    activities?.items.map((activity) => {
      return <div key={activity.id}>{activity.id}</div>;
    })
  ) : (
    <h2 className="text-secondary">No data to display</h2>
  );
  return (
    <ManagerLayout>
      <Breadcrumb pageName="Home" />
      <div className="min-w-242.5">
        <Alert message="Some message" status="warning" title="Warning" />
        <Alert message="Some message" status="danger" title="Danger" />
        <Alert message="Some message" status="success" title="Success" />
      </div>

      {activitiesList}

      <Pagination page={1} totalPage={10} />
    </ManagerLayout>
  );
};

export default Page;
