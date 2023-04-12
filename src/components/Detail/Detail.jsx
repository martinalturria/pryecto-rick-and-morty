import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
    const API_KEY = "24082eb19c0e.16314757c26be98c3340";

    let { id } = useParams();
    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            }
        );
        return setCharacter({});
    }, [id]);

    if (Object.keys(character).length) {
        return (
            <div>
                <h1>{character.name}</h1>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin.name}</p>
                <img src={character.image} />
            </div>
        );
    } 
};

export default Detail;
