
import { Link } from "react-router-dom";

import style from "./Card.module.css"
import {connect} from "react-redux"

import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

 // llega objeto, puedo hacer destructuring! {}

  function Card({id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
            onClose,
            addFavorite,
            removeFavorite,
            myFavorites,
         })
      } 
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.container}>
      {
      isFav ? (
      <button onClick={handleFavorite} className={style.likeButton}>❤️</button>
          ) : (
      <button onClick={handleFavorite} className={style.dislikeButton}>🤍</button>
         )
      }

         <button onClick={() => {onClose(id)}} className={style.closeButton}>X</button>

         <Link to={`/detail/${id}`} >
         <h3>{name}</h3>       
         </Link>

         <img src={image} alt='' />
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{status}</h3>
         <h3>{origin}</h3>
      </div>
   )
}

   const mapDispatchToProps = (dispatch) => { // magia de connect 
      return {
         addFavorite: (character) => {
            dispatch(addFavorite(character));
      },
         removeFavorite: (id) => {
            dispatch(removeFavorite(id));
         }, 
   }
} // acá los mando a PROPS del componente Card

   const mapStateToProps = (state) => {
      return{
         myFavorites: state.myFavorites,
      }
   }


export default connect (mapStateToProps, mapDispatchToProps)(Card)

// Card es mi estructura/plantilla para mostrar un personaje

// onClick={() => {onClose(id)}} acá le paso el id que voy a cerrar al pulsar X