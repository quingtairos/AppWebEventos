import './DetalleProducto.css';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import React from 'react';

import { useState } from 'react';

import { useEffect } from 'react';

//import { withRouter } from'react-router-dom';


/*const DetalleProducto = () => {*/
/* const */ function DetalleProducto(/* { match } */) {

        //const producto = match.producto;

       /*const [producto, setProducto] = match.params;
       const [productoEnCarrito, setProductoEnCarrito] = useState([]);*/

        const { id } = useParams();

        const params = useParams();

        const [objeto, setObjeto] = useState(null);

        const [loading, setLoading] = useState(true);


        // Ejemplo de useEffect para obtener y actualizar el objeto
        /* useEffect(() => {
            // Lógica para obtener el objeto, por ejemplo, una llamada a una API
            const objetoFromAPI = fetchObjetoFromAPI();
            setObjeto(objetoFromAPI);
        }, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente
        */

        useEffect(() => {
            const fetchObjetoFromAPI = async () => {
              // Lógica para obtener el objeto desde la API
              try {
                const response = await fetch('https://console.firebase.google.com/u/0/project/app-auth-web/firestore/databases/-default-/data/~2FProductos~2FdVg6eFpdqc8cFJNBCaED');
                const data = await response.json();
                setObjeto(data);
                setLoading(false);
              } catch (error) {
                console.error('Error al obtener el objeto desde la API', error);
                setLoading(false);
              }
            };

            fetchObjetoFromAPI();
        }, []);

        if (loading) {
            return <div>Cargando...</div>;
        }

        if (objeto) {
            // Utilizar la variable objeto aquí
            return <div>{/* Renderiza el objeto aquí */objeto.property}</div>;
        } else {
            // Manejar el caso en el que objeto no está definido
            //return <div>Cargando...</div>;//mostrar mensaje de carga
            return <div>No se pudo obtener el objeto.</div>;
        }


        /*if (!params) {
            // Manejar el caso en el que params no está definido
            return <div>El parámetro no está definido.</div>;
        }

        if (objeto && objeto.params) {
            // Accede a la propiedad 'params' aquí
            const parametro = objeto.params.parametroEspecifico;
            // Utiliza el parámetro específico obtenido
        } else {
            // Maneja el caso en el que el objeto o la propiedad 'params' sean 'undefined'
            // Por ejemplo, muestra un mensaje de error o redirige a otra página
            return <div>El parámetro no está definido.</div>;
        }*/

    //};

        //const { id } = match.params;

          // Obtener información del producto desde la base de datos o datos de prueba
          const producto = {
            id: id,//1,
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

            // Lógica para agregar el producto al carrito
            const agregarAlCarrito = () => {
                // Implementar lógica para agregar el producto al carrito
                console.log(`Producto ${producto.nombre} agregado al carrito.`);
            };

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

        /* return (
            <div className="detalle-producto">
                <h1>DetalleProducto</h1>
                <Link to={match.url + "/productos"}>Volver a productos</Link>
            </div>
        ) */

        return (
            <div className="detallesProducto">
                {/* <h1>DetalleProducto</h1>
            <Link to="/productos">Volver a productos</Link>
            <p>id: {id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p> */}
            {/* <img src="{producto.imagen}" alt="producto" /> */}
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>{producto.descripcion}</p>

        {/* Verificar si el usuario está autenticado */}
                <div className='acciones'>
                    {/*  <Link to={}></Link> */}
                    {/* <Link to={match.url + "/editar"}>Editar</Link> */}
                    <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
                    {/* Verificar si el usuario está autenticado */}
                    <Link to="/iniciarsesion">Iniciar Sesión {/* para Comprar */}</Link>
                    {/* <Link to="/iniciar-sesion">Iniciar Sesión para Comprar</Link> */}
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
     };

export default /* withRouter (*/DetalleProducto/*)*/;