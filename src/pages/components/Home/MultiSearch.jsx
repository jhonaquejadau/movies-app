import { useEffect } from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";

import { apiConfig } from "../../../api/apiConfig";

const MultiSearch = () => {
  //VARIABLES AND HOOKS
  const [formData, setFormData] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const [selected, setSelected] = useState("");

  const types = ["movie", "tv", "person"];
  const url = apiConfig.search(selected, formData);

  //FUNCTION TO HANDLE DATA
  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormData(value);
  };

  const handleOption = (type) => {
    setSelected(type);
  };

  // FETCHING API DATA
  const getMovieSearch = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // HOOK TO CONTROL API
  useEffect(() => {
    {
      formData && getMovieSearch(url);
    }
  }, [url]);

  // RENDERING CONTENT
  const options = types.map((type, index) => {
    return (
      <div
        key={index}
        onClick={() => handleOption(type)}
        className={`${
          selected === type ? "bg-orange-500" : "bg-[rgba(255,255,255,0.2)]"
        } px-6 text-[1rem] mr-2 capitalize`}
      >
        <p>{type}</p>
      </div>
    );
  });

  return (
    <div className="w-[90%]">
      <div className="w-[100%] mt-4">
        <p className="text-5xl text-slate-200 font-bold uppercase">welcome</p>
        <p className="text-3xl text-slate-200 mb-4">
          Movies, TV Shows, Peoples, and more...
        </p>
        <p className="text-[1.5rem] opacity-50">Select an option</p>
        <div className="flex flex-row items-center my-2">{options}</div>
        <div className="relative flex flex-row justify-center items-center w-[100%] h-[3em] p-0 mb-4">
          <input
            type="text"
            placeholder="Search for Movies, TV Shows, Person...."
            className="relative w-[100%] h-[100%] px-8  bg-[rgba(255,255,255,0.2)]"
            name="title"
            value={formData}
            onChange={handleSearch}
            disabled={selected === "" ? true : false}
          />
          <button className="absolute right-0 h-[100%] px-4 text-slate-200 font-bold bg-gradient-to-r from-purple-900 to-purple-500">
            Search
          </button>
        </div>
      </div>

      <div
        className={`${
          formData.length > 0
            ? "w-[100%] grid grid-cols-4 gap-2 max-[800px]:grid-cols-3 max-[600px]:grid-cols-2"
            : "h-[100px] flex justify-center items-center bg-[rgba(255,255,255,0.2)] mb-4"
        } `}
      >
        {formData.length > 0 ? (
          movieSearch
            .filter((movie) => movie.backdrop_path !== null)
            .map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="relative w-[100%] h-[300px] hover:scale-[1.01]"
                >
                  <img
                    className="w-[100%] h-[100%] object-cover object-top"
                    src={apiConfig.imageUrl("original", movie.poster_path)}
                    alt={movie.title}
                  />
                  <p className="absolute bottom-0 bg-[rgba(255,255,255,0.2)] w-[100%] p-2 font-bold">
                    {movie.title}
                  </p>
                </div>
              );
            })
        ) : (
          <p className="font-bold text-[1.75rem] opacity-50">
            Ooops there isn't any search!!
          </p>
        )}
      </div>
    </div>
  );
};

export default MultiSearch;
