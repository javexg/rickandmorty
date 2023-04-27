

const validation = (userData) => { // acá recibe lo que va ingresando el user

    const errors = {}; // acá solo creo una propiedad si se confirma algún error de los enumerados

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){ // no es un email? xxx @ zzz . yyy 
        errors.email = "El email ingresado no es válido pa"
        }
    if (!userData.email){ // uuserData.email.length === '' (pregunta si está vacío)
        errors.email = "Debés ingresar un email"
    }    
    if (userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres"
    }

    if (!/.*\d+.*/.test(userData.password)){
        errors.password = "La contraseña debe tener al menos un número"
    }
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}


export default validation; 