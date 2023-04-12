import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';

import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Form from './components/Form/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '69234e5e5465.65ccca72c23bdad6aed0';

const email = 'admin@admin.com';
const password = 'admin123';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])
   
   const [acces, setAcces] = useState(false); // para acceder con mail-clave
   const login = (userData) => {
      
      if (userData.email === email && userData.password === password){
         setAcces(true);
         navigate('/home');
      }
   }

   useEffect(()=> {
      !acces && navigate ('/') // si acces está en false me deja en "/"
   }, [acces]) // sino me manda a home definido en el if previo
   
   
   const onSearch = (id) => { // id llega desde searchbar (lo que escribe user en input)
   axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== id) // 
         setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>

         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/> /* nav lo voy a mostrar en todas las rutas */
            : null    /* ? y : actuan como if else */
         }

         
         
         <Routes>
            <Route path='/' element={ <Form login={login}/> } />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={ <About/>} />
            <Route path='/detail/:id' element={ <Detail/> } />       
         </Routes>         
      </div>
   );
}

export default App;
