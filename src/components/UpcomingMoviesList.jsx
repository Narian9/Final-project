import React, { Component, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PopularMoviesList = ({ movies = []}) => {
  return (
    <Container className="stack">
      <h2>Proximamente</h2>
     
      {movies.map((movie, index) => {return(
    <Row>
  <Col><a rel="stylesheet" href=""><img
    className="d-block w-100"
    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
    alt={`poster_${movie.id}`}
    
  /></a>
  </Col>

  <Col>
    <h6>{movie.original_title}</h6>
  </Col>
</Row>
)})}

</Container> 
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