import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { apiConfig } from "../../../api/apiConfig";

const SeasonDetail = ({ modal, setModal, tvId }) => {
  const [season, setSeason] = useState([]);

  const getSeasonData = async (tv_id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/season/${modal.season_number}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`
    );
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
        <div className="absolute top-20 flex flex-col w-[90%] h-full bg-gradient-to-b from-black to-[#030337] border-4 p-4">
          <div className="flex flex-row justify-end w-full text-3xl">
            <button onClick={() => handleModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <p className="w-full capitalize text-4xl mb-4">
            season {modal.season_number}
          </p>
          <div className="grid grid-cols-3 gap-4 max-[1200px]:grid-cols-2 max-[1200px]:grid-cols-2">
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
