import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import {Movies} from "./pages/Movies"
import {TvShows} from "./pages/TvShows"
import { TvShowDetail } from "./pages/TvShowDetail";

import './App.css';

function App() {
  
  return (
    <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}> </Route>
          <Route path="/tv-shows" element={<TvShows />}></Route>
          <Route path="/movie-detail/:id" element={<MovieDetail />}></Route>
          <Route path="/tv-show-detail/:id" element={<TvShowDetail />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
