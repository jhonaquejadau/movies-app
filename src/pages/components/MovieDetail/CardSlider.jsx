import React from "react";
import { apiConfig } from "../../../api";

const CardSlider = ({ credits }) => {
  const cardsData =
    credits &&
    credits
      .filter((card) => card.profile_path !== null)
      .map((card) => {
        return (
          <div key={card.credit_id} className="flex flex-col items-center min-w-[200px] h-full pb-4">
            <img
              className="w-[200px] h-[250px] rounded-xl object-cover object-top"
              src={apiConfig.imageUrl("original", card.profile_path)}
              alt={card.title}
            />
            <p className="font-bold">{card.name}</p>
            <p>{card.character}</p>
          </div>
        );
      });

  return (
    <div className="w-full mx-auto px-4 lg:px-10">
      <p className="text-xl font-[600] capitalize mb-2">cast</p>
      <div className="w-full h-full flex flex-row gap-2 overflow-x-auto">
        {cardsData}
      </div>
    </div>
  );
};

export default CardSlider;
