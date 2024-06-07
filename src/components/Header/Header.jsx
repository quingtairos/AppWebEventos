import './Header.css';

import { NavLink } from 'react-router-dom';

import user-circle from "../assets/img/user-circle.png";




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
                        <li><NavLink to="/inicio">Inicio</NavLink></li>
                        <li><NavLink to={"/productos"}>Eventos</NavLink></li>
                        {/* <li><a href="/sobreNos">Acerca de</a></li>
                        <li><NavLink to={"/users"}>Usuarios</NavLink></li> */}
                        <img src={value === user-circle } alt="" />

                        <img src="../../assets/img/user-circle.png" alt="icono/imagen de perfil" />
                        <ul>
                            <li><NavLink to={"../Login/Login.jsx"}>Iniciar Sesión</NavLink></li>
                            <li><NavLink to={"../Registro/Registro.jsx"}>Registrate</NavLink></li>
                        </ul>
                        <li><NavLink to={"../GestionEventosPagina/GestionEventosPagina.jsx"}></NavLink></li>
                    </ul>
                </nav>
            </header>
        )
        {
            usuario && /*(
                <li>
                    <NavLink to={"/perfil"}>{usuario.nombre}</NavLink>
                    <NavLink to={"/logout"}>Cerrar Sesión</NavLink>
                </li>
            )*/
            <div className='profile'>
                <h1>{usuario.displayName}</h1>
                <img src="{user.photoURL}" alt="user" />
            </div>
        }
    }

export default Header;