
import { Link } from "react-router-dom";

import style from "./Card.module.css"

 // llega objeto, puedo hacer destructuring! {}

 export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
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
   );
}

// Card es mi estructura/plantilla para mostrar un personaje

// onClick={() => {onClose(id)}} acá le paso el id que voy a cerrar al pulsar X