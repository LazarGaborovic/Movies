import React, { useEffect, useState } from "react";
import MoviesBox from "./MoviesBox";


import "./Movies.css";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const API_URL = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=35d4f9d9b461451cb03bb7c066ff3bcd`;
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setTotalMovies(data.total_pages);
        setLoading(false);
      });
  }, [page]);

  const handleSelected = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="container ">
      <div className="row">
        {loading ? (
          <h1 style={{ color: "#fff" }}>Loading...</h1>
        ) : (
          movies.map((movieReq) => (
            <MoviesBox key={movieReq.id} {...movieReq} />
          ))
        )}
        <div className="pagination-card col-12"></div>
      </div>
    </div>
  );
};

export default Movies;
