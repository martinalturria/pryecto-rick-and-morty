import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ onSearch, logout }) => {
    return (
        <div className={styles.container}>
            <button onClick={() => onSearch(Math.ceil(Math.random() * 826))}>
                Aleatorio
            </button>
            <NavLink to="/favorites">
                <button className={styles.nav}>Favorites</button>
            </NavLink>

            <NavLink to="/home">
                <button className={styles.nav}>Home</button>
            </NavLink>

            <NavLink to="/about">
                <button className={styles.nav}>About</button>
            </NavLink>
            <button onClick={() => logout()}>Log Out</button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
