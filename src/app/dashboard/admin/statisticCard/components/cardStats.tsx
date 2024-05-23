import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
interface CardDataStatsProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
    rate: string;
    status: boolean;
  };
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ data }) => {
  const { icon, title, rate, description, status } = data;
  
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-blue-500">
        {icon}
      </div>

      <div className="mt-4 flex items-end space-x-5">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium">{description}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium  ${
            status === true ? "text-meta-3" : ""
          } ${status === false ? "text-meta-5" : ""}`}
        >
          {rate}

          {status === true && (
            <FaArrowUp className="text-green-500"/>
          )}
          {status === false && (
            <FaArrowDown className="text-red-500"/>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
