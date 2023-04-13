import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./card.module.css"

function Card(props) {
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            props.removeFav(props.id);
        } else if (!isFav) {
            setIsFav(true);
            props.addFav(props);
        }
    };

    useEffect(() => {
        props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [props.myFavorites]);

    return (
        <div className={styles.container}>
            <button className={styles.btnClose} onClick={() => props.onClose(props.id)}>X</button>

            {isFav ? (
                <button className={styles.btnFav} onClick={handleFavorite}>❤️</button>
            ) : (
                <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>
            )}

            <NavLink className={styles.navLink} to={`/detail/${props.id}`}>
                <h2 className={styles.name}>{props.name}</h2>
            </NavLink>

            <img className={styles.imgCard} src={props.image} alt="" />
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h4>CLICK EN EL NOMBRE PARA DETALLES</h4>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (personaje) => {
            dispatch(addFav(personaje));
        },
        removeFav: (id) => {
            dispatch(removeFav(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
