import React from "react";
import {Route,Routes} from "react-router-dom";
import HomePage from "./views/Home-Page";
import { Pagination } from 'swiper/modules';
import MovieInfo from "./views/Movie-Info";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movied" element={<MovieInfo />} />
      </Routes>
  );
};


export default App;
