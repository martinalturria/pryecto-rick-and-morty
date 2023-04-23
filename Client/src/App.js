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

const URL_BASE = `http://localhost:3001/rickandmorty/character`;

function App() {
    let [characters, setCharacters] = useState([]);
    const { pathname } = useLocation();
    const [access, setAcces] = useState(false);
    const navigate = useNavigate();

    const onSearch = async (id) => {
        for (const character of characters) {
            if (character.id === id)
                return window.alert("El personaje ya fue Agregado!");
        }
        try {
            const response = await axios(`${URL_BASE}/${id}`);
            if (response.data.name) {
                setCharacters((oldChars) => [...oldChars, response.data]);
            } else {
                window.alert("¡No hay personajes con este ID!");
            }
        } catch (error) {
            window.alert("¡No hay personajes con este ID!");
        }
    };

    const onClose = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    };

    const login = async (userData) => {
        const { email, password } = userData;
        const URL = "http://localhost:3001/rickandmorty/login/";

        try {
            const response = await axios(
                URL + `?email=${email}&password=${password}`
            );
            const { access } = response.data;
            setAcces(response.data);
            access && navigate("/home");
            !access && window.alert("Los Datos ingresados son incorrectos");
        } catch (error) {}
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
