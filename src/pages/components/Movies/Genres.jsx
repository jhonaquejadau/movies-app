import React from "react";
import { genres } from "../../../utils";

const Genres = () => {
  return (
    <div className="flex flex-row items-center gap-4 w-[90%] overflow-auto mt-[6em] pb-2">
      {genres.map((genre) => {
        return (
          <div
            key={genre.id}
            className="min-w-[100px] bg-[rgba(255,255,255,0.2)] rounded-sm py-1 hover:bg-slate-500 hover:cursor-pointer"
          >
            <p className="text-sm text-center w-full">{genre.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Genres;