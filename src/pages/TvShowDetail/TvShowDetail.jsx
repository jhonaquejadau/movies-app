import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";

import { Loader, TvShowSlider } from "../../components";
import { SeasonDetail, TvShowBanner, TvShowSeasons } from "../components";

export const TvShowDetail = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState([]);
  const [modal, setModal] = useState({
    state: false,
    season_number: 1,
  });

  const getTvShowDetail = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US$&append_to_response=recommendations`
    );
    const data = await res.json();
    setTvShow(data);
  };

  console.log(modal);

  useEffect(() => {
    getTvShowDetail(id);
  }, [id]);

  if (tvShow.length === 0) {
    return <Loader />;
  } else {
    return (
      <section className="relative w-[100%] h-full text-slate-200 bg-gradient-to-b from-black to-[#030337]">
        <TvShowBanner tvShow={tvShow} />

        <div className="flex flex-col items-center w-full h-[100%] bg-gradient-to-b from-black to-[#030337] ">
          <TvShowSeasons tvShow={tvShow} modal={modal} setModal={setModal} />
          <div className="flex flex-col w-[90%] mt-6">
            <p className="text-2xl capitalize my-2 font-bold">
              {tvShow.recommendations.results.length > 0
                ? "more like this"
                : "there isn't recommendations for this serie..."}{" "}
            </p>
            <TvShowSlider
              tvShows={tvShow.recommendations.results}
              imagePath={apiConfig}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <SeasonDetail modal={modal} setModal={setModal} tvId={tvShow.id} />
        </div>
      </section>
    );
  }
};
