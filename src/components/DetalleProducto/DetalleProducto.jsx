import './DetalleProducto.css';

import { Link } from 'react-router-dom';

//import { withRouter } from'react-router-dom';

import { useParams } from'react-router-dom';

    /* const */ function DetalleProducto({ match }) /* = () => */ {
        /* return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
            </div>
        ) */
        /*return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to="/productos">Volver a productos</Link>
            </div>
        )*/
        /* return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to={match.url + "/productos"}>Volver a productos</Link>
            </div>
        ) */
        const { id } = match.params;

        /* return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to="/productos">Volver a productos</Link>
                <p>id: {id}</p>
            </div>
        ) */
        /*  return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to={`/productos/${id}/editar`}>Editar</Link>
                <Link to={`/productos/${id}/eliminar`}>Eliminar</Link>
            </div>
        ) */
        /* return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to="/productos">Volver a productos</Link>
                <p>id: {id}</p>
                <Link to={match.url + "/editar"}>Editar</Link>
                <Link to={match.url + "/eliminar"}>Eliminar</Link>
            </div>
        ) */
        const producto = {
            id: 1,
            nombre: 'Producto ' + id,
            precio: 25.99,
            descripcion: 'Descripción del producto ' + id,
            /* imagen: 'https://picsum.photos/200/300',
            stock: 10,
            idCategoria: 1,
            nombreCategoria: 'Categoria 1',
            idMarca: 1,
            nombreMarca: 'Marca 1',
            idProveedor: 1, */
        };

        return (
            <div className="detallesProducto">
                {/* <h1>DetalleProducto</h1>
                <Link to="/productos">Volver a productos</Link>
                <p>id: {id}</p>
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: {producto.precio}</p>
                <p>Descripción: {producto.descripcion}</p> */}
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>{producto.descripcion}</p>

                <div className='acciones'>
                   {/*  <Link to={}></Link> */}
                    {/* <Link to={match.url + "/editar"}>Editar</Link> */}
                     {/* Verificar si el usuario está autenticado */}
                    <Link to="/Login">Iniciar Sesión {/* para Comprar */}</Link>
                    {/* <Link to="/productos">Volver a productos</Link>
                <Link to={`/productos/${id}/editar`}>Editar</Link>
                <Link to={`/productos/${id}/eliminar`}>Eliminar</Link>
                <Link to="/productos/nuevo">Nuevo</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link> */}
                {/* <Link to="/contacto">Contacto</Link>
                <Link to="/acercade">Acerca de</Link>
                <Link to="/productos/1">Producto 1</Link>
                <Link to="/productos/2">Producto 2</Link> */}
                </div>
            </div>
                
        );
    }

export default /* withRouter (*/DetalleProducto/*)*/;