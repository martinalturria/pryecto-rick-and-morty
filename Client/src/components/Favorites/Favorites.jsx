import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import {
    removeFav,
    filterCards,
    orderCards,
    resetCard,
} from "../../redux/action";
import { useRef, useState } from "react";
import styles from "./favorites.module.css";

const Favorites = ({ myFavorites, removeFav }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const order = useRef();
    const filter = useRef();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(resetCard({ type: "RESET" }));
        filter.current.value = "";
        order.current.value = "";
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentSelect}>
                <select ref={order} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select ref={filter} onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button className={styles.btnReset} onClick={handleReset}>
                    Reset
                </button>
            </div>
            <div className={styles.containerCard}>
                {myFavorites.map((props) => {
                    return (
                        <Card
                            key={props.id}
                            id={props.id}
                            name={props.name}
                            status={props.status}
                            species={props.species}
                            gender={props.gender}
                            origin={props.origin.name}
                            image={props.image}
                            onClose={() => {
                                removeFav(props.id);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (id) => {
            dispatch(removeFav(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
