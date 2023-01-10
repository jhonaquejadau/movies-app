import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, MovieDetail, Movies, TvShowDetail, TvShows } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tv-shows" element={<TvShows />}></Route>
        <Route path="/movie-detail/:id" element={<MovieDetail />}></Route>
        <Route path="/tv-show-detail/:id" element={<TvShowDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
