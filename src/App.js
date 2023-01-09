import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MovieDetail, Movies, TvShowDetail, TvShows } from "./pages";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

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
