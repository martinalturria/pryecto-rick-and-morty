import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./type";

export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    };
};

export const resetCard = () => {
    return {
        type: RESET,
    };
};
