import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/NavBar/Navbar";

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
    <div>
      <Navbar>

      </Navbar>
      <h1>Personajes</h1>
      {/* <div className="card-container">
        {characters && characters.map((character) => (
          <div className="card" key={character.id}>
            <h2>{character.name}</h2>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        ))}
      </div> */}

      <h1>Comics</h1>
      {/* <div className="card-container">
        {comics && comics.map((comic) => (
          <div className="card" key={comic.id}>
            <h2>{comic.title}</h2>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;

