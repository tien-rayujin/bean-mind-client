import React from "react";
import CardDataStats from "./components/cardStats";
import { DataStatisticCard } from "./components/dataStatisticCard";

const CardData: React.FC = () => {
  return (
    <div className="ml-auto mr-auto flex">
      {DataStatisticCard.map((data, index) => (
        <div className="rounded-2xl ">
          <div key={index} className="grid-cols-4 m-10">
            <CardDataStats data={data} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardData;
