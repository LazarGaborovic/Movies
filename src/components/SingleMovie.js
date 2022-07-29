import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMovie.css";
import { AiFillCalendar, AiFillYoutube } from "react-icons/ai";
import {FcRatings} from "react-icons/fc"





const SingleMovie = ({ poster_path, backdrop_path, overview, genres }) => {
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=35d4f9d9b461451cb03bb7c066ff3bcd`;
  const API_IMG = "https://image.tmdb.org/t/p/w1280";
  
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
    <div className="container  movies-card" style={{ color: "#ffff", height:"80vh" }}>

      <div className="row">
      <div className="background col-sm" style={{backgroundImage: `url('${API_IMG + movie?.backdrop_path}')`, width: "100%", height:600 ,backgroundSize:'cover', }} >
         <div className="title bg-dark p-2 col-7">
          <h2 className="col-12">{movie?.original_title}</h2>
          <div><FcRatings ></FcRatings>{movie?.vote_average}</div>
          <p className="container col-sm p-0 m-0 ">{movie?.overview}</p>
         <p><AiFillCalendar> </AiFillCalendar>Date:{movie?.release_date}</p>
          </div>

         <div className="poster container col-sm-3">
             <img className="poster_movie col-xs-12" src={API_IMG + movie?.poster_path} style={{}} />
<div  className="btn col-md-12 p-1  bg-danger"><AiFillYoutube></AiFillYoutube>Watch treiler</div>
</div>
        
      </div>
       
      </div>

        
 
      
      </div>
    
  );
};

export default SingleMovie;
