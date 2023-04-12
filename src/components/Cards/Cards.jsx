import Card from '../Card/Card';
import style from './Cards.module.css'


export default function Cards({characters, onClose}) {
   return(
      <div className={style.conteinerCards}>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return(
                  <Card 
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose} 
                  // este lo traigo directo desde APP porque no es un componente que importé com Card
                  />
               )
            })
         }
      </div>
   )
}

// Por parámetro NO llegan funciones, sí objetos

// Arrow function es: function(){} === "() =>{}" 

// .map() recibe como parámetro una function y un index, para sumarle un key (recomend de react)

// se diferencia de forEach que solo recorre y no retorna 