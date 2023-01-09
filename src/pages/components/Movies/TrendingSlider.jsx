import React from "react";
import { Link } from "react-router-dom";

const TrendingSlider = ({ data, apiConfig, type, path }) => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col justify-start p-2 w-[100%]">
        <p className="font-bold opacity-80 capitalize text-xl">our top</p>
        <p className="text-5xl text-white opacity-50 uppercase font-bold">
          trending {type}
        </p>
        <p className="text-lg">
          The most watched {type} in the past few days...
        </p>
      </div>
      <div className="cards-container">
        {data &&
          data.map((trend, index) => {
            return (
              <div
                key={index}
                className="trending-card relative w-[200px] hover:scale-[1.04]"
                onClick={handleScrollUp}
              >
                <Link to={`/${path}/${trend.id}`}>
                  <img
                    src={apiConfig.imageUrl("original", trend.poster_path)}
                    alt={trend.original_title}
                  />
                  <p className="absolute top-0 bg-slate-200 p-[4px] text-[12px] text-center text-black w-fit font-bold">
                    #{index + 1}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TrendingSlider;
