import  './Header.css';
import { NavLink } from 'react-router-dom';

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
                        <li><NavLink to="../Inicio/Inicio.jsx">Inicio</NavLink></li>
                        <li><NavLink to={"/productos"}>Eventos</NavLink></li>
                        {/* <li><a href="/sobreNos">Acerca de</a></li>
                        <li><NavLink to={"/users"}>Usuarios</NavLink></li> */}
                        <img src="../../assets/img/user-circle.png" alt="" />
                        <ul>
                            <li><NavLink to={"../Login/Login.jsx"}>Iniciar Sesión</NavLink></li>
                            <li><NavLink to={"../Registro/Registro.jsx"}></NavLink></li>
                        </ul>
                        <li><NavLink to={"../GestionEventosPagina/GestionEventosPagina.jsx"}></NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }

export default Header;