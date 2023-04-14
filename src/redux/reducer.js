import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: [] // esto es para guardar una copia de los favoritos
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE: // acá si llega ADD FAVORITE como type, retorno algo, guardo el character en myFavorites
            return { 
                ...state, 
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload] // en allcharacters tengo una copia
            };
        
        case REMOVE_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter(
                (char) => char.id !== payload )}
                // esta parte es responsable de eliminar un personaje de la lista de favoritos si su id coincide con el valor action.playload.

        case FILTER:
            const allCharactersFiltered  = state.allCharactersFav.filter( // filtro la copia de favs que hice
                character => character.gender === payload)
            return{
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ?[...state.allCharactersFav] // esto para el PI
                : allCharactersFiltered
                }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav] // hago otra copia para ordenar ya que el filter crea un nuevo array
            return{
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id) 
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id) 
                    // sort para ordenar de menor a mayor (o viceversa) según su ID 
                }


        default: // por default dejo todo talcual estaba
            return { ...state}; 
    }
}

export default reducer;

// Reducer se encarga de hacer los cambios en el state / store / estado global