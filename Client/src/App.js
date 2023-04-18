import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";
import Error404 from "./components/Error 404/Erorr404";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

const URL_BASE = `http://localhost:3001/rickandmorty/character/`;
const API_KEY = "24082eb19c0e.16314757c26be98c3340";

function App() {
    let [characters, setCharacters] = useState([]);
    const { pathname } = useLocation();
    const [access, setAcces] = useState(false);
    const EMAIL = "martinalturria@hotmail.com";
    const PASSWORD = "Martin87";
    const navigate = useNavigate();

    const onSearch = (id) => {
        for (const character of characters) {
            if (character.id === id)
                return window.alert("El personaje ya fue Agregado!");
        }
        axios(`${URL_BASE}/${id}`)
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
        setCharacters(characters.filter((character) => character.id !== id));
    };

    const login = (userData) => {
        if (userData.email === EMAIL && userData.password === PASSWORD) {
            setAcces(true);
            navigate("/home");
        } else {
            navigate("/");
            alert("Datos de usuario y contraseña incorrectos");
        }
    };

    useEffect(() => {
        !access && navigate("/");
        !access && setCharacters([]);
    }, [access, navigate]);

    const logOut = () => {
        setAcces(false);
        navigate("/");
    };

    return (
        <div className="App">
            {pathname !== "/" && pathname !== "/*" && (
                <Nav setAcces={setAcces} onSearch={onSearch} logout={logOut} />
            )}
            <Routes>
                <Route path="/" element={<Form login={login} />}></Route>
                <Route
                    className=".home"
                    path="/home"
                    element={
                        <Cards onClose={onClose} characters={characters} />
                    }
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path={"/detail/:id"} element={<Detail />}></Route>
                <Route path="/*" element={<Error404 />}></Route>
                <Route
                    path="/favorites"
                    element={<Favorites onClose={onClose} />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;