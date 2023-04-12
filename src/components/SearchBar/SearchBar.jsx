import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) { // recibo la prop onSearch
   
   const [id, setId] = useState(''); // inicia con string vacío ('')

   const handleChange = (event) => {
      setId(event.target.value) // acá indico que guarde lo que voy ingresando en el input

   }   
   return (
      <div className={style.busqueda}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={id}/>
         {/* onChange es una función que reacciona ante un cambio, cuando escribo en el input,
         lo va guardando en value (accedo con event.target.value)*/}

         <button onClick={() => {onSearch(id); setId('')}} className={style.searchButton}>Agregar</button>
      </div>
   );
}

// event es un objeto con muchísimas propiedades
// uso event.target que es otro objeto con muchas propiedades tmb
// event.target.value muestra por ej lo que se escribe en el momento el user

// value={id} como estado local debe ser igual value e id 
// value es una propiedad de input, ahí le indico que sea iguala id
// por ende, el input que ingreso, por eso busca el id al pulsar agregar


// onClick={() => {onSearch(id)}} 
// acá lo que hago es un callback, o sea que al hacer click
// una función ejecute a la función onSearch. Si fuera  onClick={onSearch(id)} le estaría pasando id
// entonces se ejecuta directamente porque recibe un parámetro, el callback evita eso y espera al click
// le agrego un paso previo para que no se ejecute al leerlo de primeras