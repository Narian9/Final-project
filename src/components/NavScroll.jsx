import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import SingleCard from '../pages/SingleCard'

function NavScroll() {
  const [search, setSearch ] = useState("");
  const [movies, setMovies ] = useState([]);
  const [selection, setSelection ] = useState("Todo");
  const [wordApiLink, setwordApiLink ] = useState("popular");
  

  const DifineSelection = ( option = "" ) =>{       
  return (
    (option === "buttonTodo")            ?"Todo":
    (option === "buttonTitulos")         ?"Títulos":
    (option === "buttonCompanias")       ?"Compañías":
    (option === "buttonCelebrities")     ?"Celebrities":
    (option === "buttonEpisodiosTV")     ? "Episodios de TV":
    (option === "buttonBusquedaAvanzada")?"Búsqueda avanzada":"Todo" )}

  const selectApiLink = (option) => {
    let ApiLink = "";
    (option === "Todo")             ? "popular":
    (option === "Títulos")          ? "popular":
    (option === "Compañías")        ? "popular":
    (option === "Celebrities")      ? "popular":
    (option === "Episodios de TV")  ? "popular":
    (option === "Búsqueda avanzada")? "popular":"popular"

  }

  const getData = async () => {
    
    setwordApiLink(selectApiLink(selection));
    
    await axios.get(
                `https://api.themoviedb.org/3/movie/${wordApiLink}?api_key=8073710897a371d7b3a80d7c8055cb29`
            )
            .then((response) => {
                console.log("getDAta", response.data.results);
           
                // response.data.results.map(result => movies.push(result));                
                // console.log("Peliculas Popular", movies);
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log("Error", error);
            });

  }
  /*Funcion para definir la busqueda si es todo, celebrities, etc*/
  const selectionSearch = (e) =>{
    let selectOption = e.target.id;
    setSelection(DifineSelection(selectOption));  
  }

  const searchData = (e) =>{
    setSearch( e.target.value);    
    console.log(search.toLowerCase());
    movies.filter(element => {
      (movie) => { 
        (search === movie)?console.log("true"):console.log("false")
        return movies.title.toLowerCase()};
  })}



  return (
    <Navbar id="navbar" variant="dark" className="container-fluid">
    <Container fluid>

<Navbar.Brand href="#"  > 
<img id='logo-imbd' 
src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
alt="logo-imbd" width="15%" height="auto"/> 
</Navbar.Brand>

{/*<Navbar.Toggle aria-controls="navbarScroll" >
</Navbar.Toggle>*/}

<Navbar.Collapse id="navbarScroll" >
<OffCanvas placement={"top"} name={"top"}  />
<Form className="input-group mb-3 bg-light" >
<DropdownButton id="dropdown-item-button" title={selection} onClick={selectionSearch} variant="false" className="btn btn-outline-secondary dropdown-toggle">
<Dropdown.ItemText></Dropdown.ItemText>
<Dropdown.Item as="button" id="buttonSeleccion" >Selección</Dropdown.Item>
<Dropdown.Item as="button" id="buttonTodo" >Todo</Dropdown.Item>
<Dropdown.Item as="button" id="buttonTitulos" >Títulos</Dropdown.Item>
<Dropdown.Item as="button" id="buttonEpisodiosTV" >Episodios de TV</Dropdown.Item>
<Dropdown.Item as="button" id="buttonCelebrities" >Celebrities</Dropdown.Item>
<Dropdown.Item as="button" id="buttonCompanias" >Compañías</Dropdown.Item>
<Dropdown.Item as="button" id="buttonBusquedaAvanzada" >Búsqueda avanzada</Dropdown.Item>
<Dropdown.Divider />
<Dropdown.Item as="button">Palabras clave</Dropdown.Item>
</DropdownButton>

  <Form.Control
    type="search"
    placeholder="Search"
    className="input-group-prepend"
    aria-label="Search"
    value={search}
    onChange={searchData}
  />
  <Button  variant="light"  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
  </Button>
</Form>
<Nav
  className="me-auto my-2 my-lg-0"
  style={{ maxHeight: '100px' }}
  NavScroll  
>
  <Nav.Link href="#action1"><span>IMDbPro</span></Nav.Link>
  <Nav.Link href="#action2"><span>Lista de seguimiento</span></Nav.Link>
  <Nav.Link href="#action2"><span>Iniciar sesión</span></Nav.Link>
  <NavDropdown title={"Es"} id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action3">Español</NavDropdown.Item>
    <NavDropdown.Item href="#action4">Inglés</NavDropdown.Item>

  </NavDropdown>
</Nav>

</Navbar.Collapse>
    </Container>
  </Navbar>);
}
function OffCanvas({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow} className="me-2" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          Menú
        </Button>
        <Offcanvas id="offCanvas" className="container-fluid bg-dark" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HorizontalStack/>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
export default NavScroll;

function NavDropdownItemTags() {
    return (

      <DropdownButton id="dropdown-item-button" title="Todo" variant="light" className="input-group-prepend">
 
        <Dropdown.ItemText></Dropdown.ItemText>
        <Dropdown.Item as="button">Todo</Dropdown.Item>
        <Dropdown.Item as="button">Títulos</Dropdown.Item>
        <Dropdown.Item as="button">Episodios de TV</Dropdown.Item>
        <Dropdown.Item as="button">Celebrities</Dropdown.Item>
        <Dropdown.Item as="button">Compañías</Dropdown.Item>
        <Dropdown.Item as="button">Búsqueda avanzada</Dropdown.Item>
        <Dropdown.Item as="button">Palabras clave</Dropdown.Item>

      </DropdownButton>
    );
  }


function HorizontalStack() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-dark " >
         <strong className="me-auto yellow" ><h2 variant="s">Películas</h2></strong>
      <ul>
        <li><a href="#"><span>Calendario de lanzamientos</span></a></li>
        <li><a href="#"><span>Las 250 películas mejor valoradas</span></a></li>
        <li><a href="#"><span>Películas más populares</span></a></li>
        <li><a href="#"><span>Explorar películas por género</span></a></li>
        <li><a href="#"><span>Películas más taquilleras</span></a></li>
        <li><a href="#"><span>Horarios y entradas</span></a></li>
        <li><a href="#"><span>Noticias sobre películas</span></a></li>
      </ul> </div>
      <div className="bg-dark "> <h2>Series</h2>
      <ul>
        <li><a href="#"><span>Qué hay en la TV y en streaming</span></a></li>
        <li><a href="#"><span>Las 250 series mejor valoradas</span></a></li>
        <li><a href="#"><span></span></a></li>
        <li><a href="#"><span></span></a></li>
        <li><a href="#"><span></span></a></li>

      </ul> </div>
      <div className="bg-dark "> <h2>Premios y eventos</h2>
      <ul>
        <li><a href="#"><span>Premios Óscar</span></a></li>
        <li><a href="#"><span>Ganadores a la mejor película</span></a></li>
        <li><a href="#"><span>Emmy</span></a></li>
        <li><a href="#"><span>Premios STARmeter</span></a></li>
        <li><a href="#"><span>Comic-Con San Diego</span></a></li>

      </ul> </div>

      
    </Stack>
  );
}



