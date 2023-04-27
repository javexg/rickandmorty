import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';
import style from './Nav.module.css'


const Nav = ({onSearch}) => { // acá llega la prop y hago destructuring
    return(
        <div className={style.bar}>
            <button className={style.home} >
                <Link to='/home'>HOME</Link>
            </button>

            <button>
            <Link to='/favorites'>FAVORITES</Link>
            </button>

            <button className={style.about} >
                <Link to='/about'>ABOUT</Link>    
            </button>


            
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;



// prop onSearch nació en app, la pasé a nav y luego a searchbar
// al ejecutarse con click, hace el recorrido inverso, de searchbar => nav => app