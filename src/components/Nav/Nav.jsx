import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ onSearch, logout }) => {
    return (
        <div className={styles.container}>
            <button onClick={() => onSearch(Math.ceil(Math.random() * 826))}>
                Aleatorio
            </button>
            <button>
                <NavLink className={styles.nav} to="/favorites">Favorites</NavLink>
            </button>

            <button>
                <NavLink className={styles.nav} to="/home">Home</NavLink>
            </button>

            <button>
                <NavLink className={styles.nav} to="/about">About</NavLink>
            </button>

            <button onClick={() => logout()}>Log Out</button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
