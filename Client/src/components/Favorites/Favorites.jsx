import Card from "../Card/Card";
import { connect } from 'react-redux'
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    
    const handleOrder = (event) => { // importante poner event
        dispatch(orderCards(event.target.value)); 
        setAux(true);
        // la ejecuto con() según seleccione A o D 
    }

    const handleFilter = (event) => { // importante poner event
        dispatch(filterCards(event.target.value)); 
        // la ejecuto con() según seleccione male,female,genderless,unknown
    }

    return (
        <div className={style.conteinerFavs}>
        
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Gendeerless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All characters</option>
            </select>


            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(
    mapStateToProps,
    null
)(Favorites);