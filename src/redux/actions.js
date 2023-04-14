import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from './actions-types';



export const addFavorite = (character) => { // recibo el personaje que quiero agregar a favs
    return { type: ADD_FAVORITE, payload: character }; // acá estoy despachando esta función addFavorite
}

export const removeFavorite = (id) => { // recibo id, especifico el id del personaje que deseo quitar de favs
    return { type: REMOVE_FAVORITE, payload: id }; // despacho el id a quitar de favs
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
}