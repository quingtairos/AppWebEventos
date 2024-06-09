import './BarraNavegacion.css';

import { NavLink } from 'react-router-dom';

function BarraNavegacion() {
    return (
        <div className="barraNavegacion">
            <h1>Barra de navegacion</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/carrito">Carrito</NavLink></li>
                    <li><NavLink to="/iniciarsesion">Iniciar Sesión</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default BarraNavegacion;