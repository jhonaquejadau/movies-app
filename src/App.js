import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";
import { MovieInfo } from "./components/MovieInfo";

import Home from "./pages/Home";
import {Movies} from "./pages/Movies"
import {TvShows} from "./pages/TvShows"

import './App.css';

function App() {

  return (
    <div className="bg-black">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}> </Route>
          <Route path="/tv-shows" element={<TvShows />}></Route>
          <Route path="/movie-detail/:id" element={<MovieInfo />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
