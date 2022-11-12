import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularMoviesList from "../components/PopularMoviesList";


function PopularMovies() {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=8073710897a371d7b3a80d7c8055cb29`
            )
            .then((response) => {
                console.log("popular respuesta", response.data.results);
                const mov = [];
                for (let i = 0; i < 3; i++) {
                    mov.push(response.data.results[i]);
                }
                console.log("Peliculas Popular", mov);
                setPopularMovies(mov);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);

    return (
    <div><PopularMoviesList movies={popularMovies} /></div>
        
    
    );
};




export default PopularMovies;