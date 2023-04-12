import style from './Form.module.css'
import { useState } from 'react';

import validation from '../Validation/Validation';

const Form = ({login}) => {

    const [errors, setErrors] = useState ({})

    const [userData, setUserData] = useState({
        email:'', 
        password:''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData, // copia de lo previo
            [event.target.name]: event.target.value // .name para llamar a email o password según corresponda
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // evita que se recargue la web
        login(userData);
    }

    

    return(
        <form onSubmit={handleSubmit} className={style.formCaja} >
            <label htmlFor="email">Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color:"red", fontSize:"11pt"}}>{errors.email}</p>}
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color:"red", fontSize:"11pt"}}>{errors.password}</p>}


            <button>Submit</button>
        </form>
    )
}

export default Form; 


// onChange queda atento a los cambios que hace el usuario en los inputs (email/contraseña) y le avisa a handleChange
// en handleChange tengo el State donde voy a hacer cambio del estado para que coindida con lo que ingresa el usuario

// los estados NO se importan, se pueden pasar como parámetro 