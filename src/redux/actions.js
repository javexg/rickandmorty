

export const ADD_FAVORITE = "ADD_FAVORITE"; 
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// esto se hace para prevenir errorres de tipeo, cuando escribo la constante me va a avisar
// si fuera solo el string, lo escribo mal y no me avisaría, simplemente no andaría

export const addFavorite = (character) => { // recibo el personaje que quiero agregar a favs
    return { type: ADD_FAVORITE, playload: character}; // acá estoy despachando esta función addFavorite
}

export const removeFavorite = (id) => { // recibo id, especifico el id del personaje que deseo quitar de favs
    return { type: REMOVE_FAVORITE, playload: id}; // despacho el id a quitar de favs
}