import React, { useContext } from "react";
import { genres } from "../../../utils";
import { GenreContextConsumer } from "../../Movies/context";

const Genres = () => {
  const { setGenreId } = useContext(GenreContextConsumer);

  return (
    <div className="flex flex-row items-center gap-4 w-[95%] overflow-auto mt-[6em] pb-2">
      {genres.map((genre) => {
        return (
          <div
          onClick={() => setGenreId(genre.id)}
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
