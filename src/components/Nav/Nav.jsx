import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ onSearch, logout }) => {
    return (
        <div className={styles.container}>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(Math.ceil(Math.random() * 826))}>
                Aleatorio
            </button>

            <NavLink to="/favorites">
                <button>Favorites</button>
            </NavLink>

            <button>
                <NavLink to="/home">Home</NavLink>
            </button>

            <button>
                <NavLink to="/about">About</NavLink>
            </button>

            <button onClick={() => logout()}>Log Out</button>
        </div>
    );
};

export default Nav;
