import  './Header.css';

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
                    </ul>
                </nav>
            </header>
        )
    }

export default Header;