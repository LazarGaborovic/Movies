import React, { useEffect, useState } from "react";
import MoviesBox from "./MoviesBox";
import PaginationComponent from "react-reactstrap-pagination";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
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

  const handleClick = (e, index) => {
    e.preventDefault();
    console.log(index);
    setPage(index);
  };

  let pageNumbers = [];
  for (let i = 0; i < totalMovies; i++) {
    pageNumbers.push(
      <PaginationItem key={i} active={page === i + 1 ? true : false}>
        <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }

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
        <div className="pagination-card col-12">
          {/* <PaginationComponent
            totalItems={50}
            pageSize={5}
            onSelect={handleSelected}
          /> */}

          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink
                onClick={(e) => handleClick(e, page - 1)}
                previous
                href="#"
              />
            </PaginationItem>
            {pageNumbers.slice(0, 20)}

            <PaginationItem disabled={page >= totalMovies - 1}>
              <PaginationLink
                onClick={(e) => handleClick(e, page + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Movies;
