import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMovie.css";
import {GrView} from 'react-icons/gr';
const SingleMovie = ({ poster_path, backdrop_path, overview, genres }) => {
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=35d4f9d9b461451cb03bb7c066ff3bcd`;
  const API_IMG = "https://image.tmdb.org/t/p/w300";
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" container movies-card" style={{ color: "#ffff" }}>
      <div className="row">
      <div className="card-title col-10">
       
      </div>

      <div className="">
        <div className="movie-title col-md-4 row ">
        
          <img src={API_IMG + movie?.poster_path} />
          <div className="title">
          <h2 className="col-12">{movie?.original_title}</h2>

<p>{movie?.release_date}</p>
</div>
        </div>

        <span><GrView style={{color:"white"}}></GrView>{movie?.vote_average}</span>
        <div></div>
      </div>
      <div className=" overview text-start">
        <p className="container col-10 p-0 m-0 ">{movie?.overview}</p>
      </div>
      </div>
    </div>
  );
};

export default SingleMovie;
