import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { AiFillCalendar } from "react-icons/ai";
import "./MoviesBox.css";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w1280";

const MoviesBox = ({
  original_title,
  release_date,
  overview,
  poster_path,
  vote_average,
  id,
}) => {
  return (
    <div className="col-sm-3">
      <Col>
        <Card onSelect={() => {}} className="cards m-2 ">
          <div className="card-image">
          <Link to={`/${id}`}>
            <img
              className=" bg-image hover-zoom"
              alt="Card image"
              src={API_IMG + poster_path}
            />
            </Link>
          </div>
          <CardBody className="card__body p-1">
            <div className="title">
            <a href="/">
                {" "}
              <h1 className="p-0"> {original_title}</h1>
              </a>
            </div>
          
            <div>
              <p className="m-0">
                <AiFillCalendar> </AiFillCalendar> {release_date}
              </p>
            </div>
            <span class="badge text-bg-warning col-2">{vote_average}</span>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default MoviesBox;
