import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/NavBar/Navbar";
import './App.css';
import { BrowserRouter as Router,
Routes,Route} from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
    .then(response => {
        setComics(response.data.data.results);
    })
    .catch(error => {
        console.log(error);
    });
}, []);


  return (
    <Router>
      <Navbar />
    <div className="App">
    <Routes>
      {/* se utiliza el element y no un exact para traer el componente directo, ya que me tira error */}
        <Route path ="/comics" element ={
              <div className="card-container col-md-4 ">
              {comics && comics.map((comic) => (
                  <div className="card" key={comic.id}>
                    <h2>{comic.title}</h2>
                    <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title} />
                  </div>
        ))}
              </div>
        }>
        </Route>
        <Route path ="/characters" element ={
              <div className="card-container col-md-4">
              {characters && characters.map((character) => (
                  <div className="card" key={character.id}>
                      <h2>{character.name}</h2>
                      <img
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt={character.name} />
                  </div>
              ))}
          </div>
        }>

        </Route>
      </Routes>
    <div className="container col-md-8">
      <div className="card" >
      <h2>COMICS</h2>
        <img src="https://www.tebeosfera.com/T3content/img/T3_numeros/a/n/mmspidermanv1_038_09_pan.jpg" alt="/"/>
      </div>
      <div className="card">
        <h2>CHARACTERS</h2>
        <img src="https://tajmahalcomics.com/wp-content/uploads/2023/04/2188776_xl.jpg" alt="/" />
      </div>
    </div>
  </div>
  </Router>
);
};

export default Home;

