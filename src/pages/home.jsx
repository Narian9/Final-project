import React from "react";
import Stack from 'react-bootstrap/Stack';
import NavScroll from '../components/NavScroll';
import CarouselSection from '../components/carousel';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpcomingMovies from "../core/UpcomingMovies";
import PopularMovies from "../core/PopularMovies";


function Home() {

    return (
      <Stack  gap={4}>

        <Container fluid>       
        <NavScroll/>
        </Container>

        <Container><UpcomingMovies/>
        </Container>

        <Container><UpcomingMovies/>
        </Container>
        <Container><UpcomingMovies/>
        </Container>

        <div className="bg-dark border" ></div>
        <div className="bg-dark border" ></div>
       
      </Stack>
    );
  }

  export default Home;
  