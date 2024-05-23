import DounghtnutChart from "./chart/donutChart";
import LineChart from "./chart/lineChart";
import CardData from "./statisticCard/page";

const Page = () => {
  return (
    <div className="">
      <div className="statictisCard text-black flex grid-cols-4">
        <CardData />
      </div>
      <div className="chart-area mt-4 grid grid-cols-2 gap-4 pt-10">
        <div className="chartLine ml-25 pt-10">
          <LineChart />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-150 h-150 rounded-sm border px-5 pb-5 pt-7.5 shadow-default">
            <DounghtnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
