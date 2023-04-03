import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ onSearch }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(Math.ceil(Math.random() * 826))}>
                Aleatorio
            </button>
        </div>
    );
};

export default Nav;
