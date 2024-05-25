import React from "react";
import CardDataStats from "./components/cardStats";
import { DataStatisticCard } from "./components/dataStatisticCard";

const CardData: React.FC = () => {
  return (
    <div className=" w-full grid grid-cols-4 mt-5 mx-2">
      {DataStatisticCard.map((data, index) => (
        <div className="rounded-2xl w-90 ml-auto mr-auto">
          <div key={data.description} className=" ">
            <CardDataStats data={data} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardData;
