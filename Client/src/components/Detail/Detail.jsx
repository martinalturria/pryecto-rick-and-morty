import axios from "axios";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
    const URL_BASE = "https://rickandmortyapi.com/api/character";

    let { id } = useParams();
    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        });
        return setCharacter({});
    }, [id]);

    if (Object.keys(character).length) {
        return (
            <div className={styles.center}>
                <div className={styles.container}>
                    <img src={character.image} alt={character.name} />
                    <h1>{character.name}</h1>
                    <p>STATUS: {character.status}</p>
                    <p>SPECIES: {character.species}</p>
                    <p>GENDER: {character.gender}</p>
                    <p>ORIGIN: {character.origin.name}</p>
                </div>
            </div>
        );
    }
};

export default Detail;
