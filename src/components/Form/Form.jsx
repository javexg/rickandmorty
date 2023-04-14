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

            <h2>Welcome!</h2>

            <input className={style.inputUser} type="text" name='email' placeholder='Email: admin@admin.com' value={userData.email} onChange={handleChange}/>
            {errors.email && <p className={style.pUser}>{errors.email}</p>}
            
            <input className={style.inputClave} type="password" placeholder='Clave: admin123' name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p className={style.pClave}>{errors.password}</p>}

            <br />
            <button>Ingresar</button>

            <img className={style.image} src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186" alt="" />

        </form>
    )
}

export default Form; 


// onChange queda atento a los cambios que hace el usuario en los inputs (email/contraseña) y le avisa a handleChange
// en handleChange tengo el State donde voy a hacer cambio del estado para que coindida con lo que ingresa el usuario

// los estados NO se importan, se pueden pasar como parámetro 