import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpcomingMoviesList = ({ movies = []}) => {
  return (
    <Container className="bg-light" id="upComing">
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
      </Container>
      
  )
}

export default UpcomingMoviesList;