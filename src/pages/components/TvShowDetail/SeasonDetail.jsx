import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { apiConfig } from "../../../api/apiConfig";

const SeasonDetail = ({ modal, setModal, tvId }) => {
  const [season, setSeason] = useState([]);

  const getSeasonData = async (id) => {
    const response = await fetch(apiConfig.season(id, modal.season_number));
    const data = await response.json();
    setSeason(data.episodes);
  };

  const handleModal = () => {
    setModal((prev) => {
      return {
        ...prev,
        state: false,
      };
    });
  };

  useEffect(() => {
    getSeasonData(tvId);
  }, [tvId, modal.season_number]);

  return (
    <>
      {modal.state && (
        <div className="absolute z-50 top-20 flex flex-col w-[90%] h-full bg-gradient-to-b from-black to-[#030337] border-4 p-4">
          <div className="flex flex-row justify-end w-full text-3xl">
            <button onClick={() => handleModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <p className="w-full capitalize text-4xl mb-4">
            season {modal.season_number}
          </p>
          <div className=" h-full grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {season &&
              season.map((season, index) => {
                return (
                  <div key={index} className="w-full h-full">
                    <img
                      className="w-full"
                      src={apiConfig.imageUrl("original", season.still_path)}
                      alt={season.name}
                    />
                    <p>
                      {index + 1}. {season.name}
                    </p>
                    <p>{season.runtime}min</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default SeasonDetail;
