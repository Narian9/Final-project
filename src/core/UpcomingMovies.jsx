import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import UpcomingMoviesList from "../components/UpcomingMoviesList";
import PopularMoviesList from "../components/PopularMoviesList";

function UpcomingMovies() {

    const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=8073710897a371d7b3a80d7c8055cb29`
            )
            .then((response) => {
                setPopularMovies(response.data.results);
                const mov = [];
                for (let i = 0; i < 3; i++) {
                    mov.push(response.data.results[i]);
                }
                console.log("Peliculas Upcoming", mov);
                setMovies(mov);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);

    return (        
        <Stack gap={2} className="stack">
        <Container fluid className="">
            <Row >
                <Col xs={12} md={9} lg={5} ><PopularMoviesList movies={popularMovies} /></Col>
                <Col xs={4} md={3} lg={3}><UpcomingMoviesList movies={movies} /></Col>
            </Row>
        </Container>
        </Stack>
    );
};




export default UpcomingMovies;