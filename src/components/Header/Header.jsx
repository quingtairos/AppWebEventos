import  './Header.css';
import { Link } from 'react-router-dom';

    const Header = () => {
        /* return (
            <header>
                <h1>Eventos</h1>
            </header>
        ) */

        return (
            <header>
                <nav>
                    <ul>
                        <li><a href="/inicio">Inicio</a></li>
                        <li><a href="/productos">Eventos</a></li>
                        {/* <li><a href="/sobreNos">Acerca de</a></li>
                        <li><NavLink to={"/users"}>Usuarios</NavLink></li> */}
                    </ul>
                </nav>
            </header>
        )
    }

export default Header;