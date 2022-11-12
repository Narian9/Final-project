import { Component } from "react";
import axios from "axios";
import Pokemon from "./movie";
import PokemonDetail from "./movieDetail";

const imbdIdArray = [];

class List extends Component {
 
  state = {
    movies: [],
    results:[],
    movieInfo: {},
    nameMovie: "",
    //para el segundo link
    Title:"",
    Year:"",
    Rated:"",
    Released:"",
    Runtime:"",
    Genre:"",
    Director:"",
    Writer:"",
    Actors:"",
  };

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.buscar = this.buscar.bind(this);
    this.agua = this.agua.bind(this);
    this.getmovieInfo = this.getmovieInfo.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://imdb-api.com/en/API/Title/k_bscqxgg3/tt1375666/FullActor,Posters"
      )
      .then((response) => {
        console.log(response);
        this.setState({ movies: response.data, results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //PreviousProps, PreviousState
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    console.log("prevState", prevState.nameMovie);
    console.log("actual state nameMovie", this.state.nameMovie);

    if (prevState.nameMovie !== this.state.nameMovie) {
      this.getmovieInfo();
    }
  }

  buscar(event) {
    let q = event.currentTarget.value.toLowerCase();
    let filtrados = this.state.movies.filter((movie) => {
      return movie.name.toLowerCase().includes(q);
    });
    this.setState({ results: filtrados });
    //console.log(results);
  }

  stars(event) {
    let filtrados = this.state.movies.filter((movie) => {
      return movie.type.includes("water");
    });
    this.setState({ results: filtrados });
    //console.log(results);
  }

  getmovieInfo() {
    const BASE_URL = "https://pokeapi.co/api/v2/";

    axios
      .get(`${BASE_URL}pokemon/${this.Movie}`)
      .then((response) => {
        // Esto es destructuring 👇🏽
        const { data } = response;
        // console.log("data", data);
        this.setState({ movieInfo: data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  /**
   *
   * Recuperar el nombre ✅

   * ya con el nombre consumir API 👀 ✅
   * regresa info y la guardamos en state✅
   * conditional rendering
   *
   */

  render() {
    return (
      <div className="container">
        <div className="mb-5">
          <input
            onKeyUp={this.buscar}
            type="text"
            placeholder="Buscar..."
            className="input"
          ></input>
        </div>

        <div className="columns is-multiline">
          {/* CONDITIONAL RENDERING */}
          {Object.values(this.state.movieInfo).length > 0 ? (
            <PokemonDetail
              detail={this.state.movieInfo}
              cleanPokemonDetail={() => this.setState({ movieInfo: {} })}
            />
          ) : (
            <>
              {this.state.results.length > 0 && (
                <>
                  <button onClick={this.agua} className="button is-link">
                    Ver movies AGUA
                  </button>

                  <div className="columns is-multiline">
                    {this.state.results.map((pokemon) => {
                      return (
                        <Pokemon
                          key={pokemon.id}
                          image={pokemon.ThumbnailImage}
                          name={pokemon.name}
                          getPokemon={(nameMovie) =>
                            this.setState({ nameMovie })
                          }
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default List;
