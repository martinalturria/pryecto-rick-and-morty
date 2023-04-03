import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    let [characters, setCharacters] = useState([]);

    const onSearch = (id) => {
        for (const character of characters) {
            if (character.id === parseInt(id))
                return window.alert("El personaje ya fue Agregado!");
        }
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert("¡No hay personajes con este ID!");
                }
            })
            .catch(() => window.alert("¡No hay personajes con este ID!"));
    };

    const onClose = (id) => {
        setCharacters(
            characters.filter((character) => character.id !== parseInt(id))
        );
    };

    return (
        <div className="App">
            {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
            <Nav onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose} />
        </div>
    );
}

export default App;
