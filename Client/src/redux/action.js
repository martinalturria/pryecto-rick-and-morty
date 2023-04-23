import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./type";
import axios from "axios";

export const addFav = (character) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character);
            return dispatch({ type: ADD_FAV, payload: response.data });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            });
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data,
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            });
        }
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
