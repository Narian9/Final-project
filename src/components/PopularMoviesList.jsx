
import React, { Component, useEffect, useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

const PopularMoviesList = ({ movies = []}) => {
  return (
    <Carousel fade>

    {movies.map((movie, index) => {return(
    <Carousel.Item >
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
      alt={`poster_${movie.id}`}
    />
    <Carousel.Caption>
      <h3>{movie.original_title}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    )}) } 
    </Carousel> 
  );
}

export default PopularMoviesList;


{/* <Container className="bg-light">
<a rel="stylesheet" href="">
{movies.map((movie, index) => {return(
<Row>
  <Col><img
    className="d-block w-100"
    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
    alt={`poster_${movie.id}`}
  />
  </Col>

  <Col>
    <h4>{movie.original_title}</h4>
  </Col>
</Row>
)})}
</a>
</Container> */}