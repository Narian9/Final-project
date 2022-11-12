
  const [searchInput, setSearchInput] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [movieStars, setMovieStars] = useState("");

  const fetchData = () => {
    Axios.get("https://imdb-api.com/en/API/Title/k_bscqxgg3/tt1375666/FullActor,Posters")
    .then((res)=> {
      // setMovieTitle(res.data.title);
      // setMovieImage(res.data.image);
      // setMovieStars(res.data.stars);
      console.log(res);
      // console.log(res.data.title);
      // console.log(res.data.image);
      // console.log(res.data.stars);
    });
  };

  fetchData();

  function shuffle(array) {
    var j, x, i;
    //Recorremos el array del final hacia delante
    for (i = array.length - 1; i > 0; i--) {
      //Generamos una posicion comprendida entre los valores de nuestro array
      j = Math.floor(Math.random() * (i + 1));
      // Asignamos el valor de la posición actual a una variable
      x = array[i];
      //Intercambiamos los valores de las dos posiciones
      array[i] = array[j];
      array[j] = x;
    }
  }

  const searchData = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };


  