
import axios from 'axios';
import style from './Detail.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// useParams nos permite acceder a una variable, por ejemplo la del link /detail/56 (id)

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '69234e5e5465.65ccca72c23bdad6aed0';

const Detail = () => {

    const {id} = useParams(); // devuelve un objeto use Params, el id lo recibe desde app <Detail/>
    const [character, setCharacter] = useState ({}); // con esto inicia {} 
   
    useEffect(() => { // simula los ciclos de vida 
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
             alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); // useEfect depende desde id, sino se crea loop infinito


     return(
        <div className={style.detail}>
            <img src={character?.image} alt={character?.name} />
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
        </div>
    )
}


export default Detail;