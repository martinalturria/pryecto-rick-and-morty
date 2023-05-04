import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: {},
            };

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, errors: {} };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(
                    (charachter) => charachter.gender === action.payload
                ),
            };

        case ORDER:
            let orderFav;
            if (action.payload === "A") {
                orderFav = state.myFavorites.sort((a, b) =>
                    a.id > b.id ? 1 : -1
                );
            } else {
                orderFav = state.myFavorites.sort((a, b) =>
                    a.id < b.id ? 1 : -1
                );
            }
            return {
                ...state,
                myFavorites: [...orderFav],
            };

        case "RESET":
            return {
                ...state,
                myFavorites: state.allCharacters,
            };

        case "ERROR": {
            return {
                ...state,
                errors: action.payload,
            };
        }

        default:
            return state;
    }
};

export default reducer;