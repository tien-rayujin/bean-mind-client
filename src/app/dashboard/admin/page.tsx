import DounghtnutChart from "./chart/doughnutChart/donutChart";

import BarChart from "./chart/barChart/barChart";
import CardData from "./statisticCard/page";
import { FaCaretDown, FaCaretUp, FaCircle } from "react-icons/fa";
import DetailData from "./chart/doughnutChart/detail-data";
const Page = () => {
  return (
    <section className="">
      <div className="statictisCard ">
        <CardData />
      </div>

      <section className="flex my-4 px-11 gap-5">
        <div className="w-3/4 h-[600px] rounded-lg border-2 border-blue-950 flex pt-5 pl-5">
          <div className="w-3/4 py-10 px-5">
            <div className="text-2xl ml-10 mb-5">Bar chart Demo</div>
            <BarChart />
          </div>
          <div className="w-1/5 flex flex-col space-y-20 justify-start items-end mt-15
          ">
            <select className="bg-transparent border border-gray-400 rounded px-2 py-1 text-lg w-auto ">
              <option value="week" className="text-black">Week</option>
              <option value="month" className="text-black">Month</option>
              <option selected value="year" className="text-black">Year</option>
            </select>

            <div className="card">
              <div className="card1 mb-5  w-50 h-25">
                <div className="row1 flex justify-start items-start">
                  <div>
                    <FaCircle
                      className="mt-1.5 mr-1"
                      style={{
                        color: "rgba(183, 52, 255, 0.8)",
                        fontSize: "10px",
                      }}
                    />
                  </div>
                  <div>Income</div>
                </div>
                <div className="mt-2 text-xl">$800,000</div>
                <div className="flex">
                  <div className="text-green-600">
                    <FaCaretUp />
                  </div>
                  <div className="text-green-600">20</div>
                  <div
                    className="ml-2"
                    style={{ color: "rgba(197, 188, 201, 0.65)" }}
                  >
                    22 this month
                  </div>
                </div>
              </div>
              <div className="card2  w-50 h-25">
                <div className="row1 flex justify-start items-start">
                  <div>
                    <FaCircle
                      className="mt-1.5 mr-1 "
                      style={{
                        color: "rgba(148, 142, 151, 1)",
                        fontSize: "10px",
                      }}
                    />
                  </div>
                  <div>Expense</div>
                </div>
                <div className="mt-2 text-xl">$800,000</div>
                <div className="flex">
                  <div className="text-red-600">
                    <FaCaretDown />
                  </div>
                  <div className="text-red-600">20</div>
                  <div
                    className="ml-2"
                    style={{ color: "rgba(197, 188, 201, 0.65)" }}
                  >
                    22 this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 min-h-[600px] rounded-lg border-2 border-blue-950 px-5 pt-5">
          <div className="text-2xl px-5 mb-5">Bar chart Demo</div>
          <div className="w-85 h-85">
            <DounghtnutChart />
          </div>
          <div className="pb-5">
            <DetailData />
          </div>
        </div>
      </section>
      {
        /*
      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-100 rounded"></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
      </section> */
      }
    </section>
  );
};

export default Page;
