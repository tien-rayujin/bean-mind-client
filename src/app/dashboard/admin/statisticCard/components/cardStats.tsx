import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
interface CardDataStatsProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
    rate: string;
    status: boolean;
    rateDetail: string;
  };
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ data }) => {
  const { icon, title, rate, description, status, rateDetail } = data;

  return (
    <div className="rounded-3xl border border-cyan-900  px-2 py-2 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between space-x-10">
        <h4 className="text-title-md font-bold ml-2">
          {title}
        </h4>
        <div className="flex-shrink-0 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-blue-500">
          {icon}
        </div>
      </div>

      <div className="pt-2  border-t-slate-500 border-t-2 pl-4 ">
        <div>
          <span className="size-24 font-medium">{description}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            status === true ? "text-meta-3" : ""
          } ${status === false ? "text-meta-5" : ""}`}
        >
          {rate}
          {status === true && <FaArrowUp className="text-green-500" />}
          {status === false && <FaArrowDown className="text-red-500" />}
          <div className="pl-2" style={{color:'rgba(170, 170, 170, 0.49)'}}>{rateDetail}</div>
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
