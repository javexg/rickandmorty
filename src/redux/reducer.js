import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: // acá si llega ADD FAVORITE como type, retorno algo, guardo el character en myFavorites
            return { ...state, myFavorites: [...state.myFavorites, action.playload]};
        
        case REMOVE_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter(
                (char) => char.id !== action.playload )}
                // esta parte es responsable de eliminar un personaje de la lista de favoritos si su id coincide con el valor action.playload.


        default: // por default dejo todo talcual estaba
            return { ...state}; 
    }
}

export default reducer;

// Reducer se encarga de hacer los cambios en el state / store / estado global