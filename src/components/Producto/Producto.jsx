import './Producto.css';

import * as React from 'react';

import { useEffect, useState } from 'react';



import DetalleProducto from '../DetalleProducto';

    //const Producto = () => {
    function Producto() {

        //const productosPorPag = 5;

        const [productos, setProductos] = useState([]); // Estado para almacenar los productos
        //const [productosPorPagina, setProductosPorPagina] = useState(productosPorPag);

        const [filtroCategoria, setFiltroCategoria] = useState(''); // Estado para el filtro de categoría
        const [filtroPrecio, setFiltroPrecio] = useState(''); // Estado para el filtro de precio
        //const [busquedaTexto, setBusquedaTexto] = useState(''); // Estado para el campo de búsqueda*/
        const [busqueda, setBusqueda] = useState('');

        // Lógica para obtener productos desde la base de datos o datos de prueba
        useEffect(() => {
            // Realiza la llamada a la base de datos o utiliza datos de prueba
            // Actualiza el estado de 'productos' con los datos obtenidos
            const datosProductos = obtenerProductosDesdeBaseDeDatos(); // Implementa esta función
            setProductos(datosProductos);
          }, []); // Se ejecuta solo al montar el componente

          // Lógica para aplicar filtros y búsqueda
            const productosFiltrados = productos
            .filter(producto => producto.categoria.includes(filtroCategoria))
            .filter(producto => filtroPrecio === '' || producto.precio <= parseInt(filtroPrecio))
            .filter(producto => busquedaTexto === '' || producto.nombre.toLowerCase().includes(busquedaTexto.toLowerCase()) || producto.descripcion.toLowerCase().includes(busquedaTexto.toLowerCase()));

            // Actualiza el estado de 'productosFiltrados' con los datos obtenidos
            //setProductosFiltrados(productosFiltrados);

            // Paginación: Mostrar 5 productos por página
            const productosPorPagina = 5;
            const [paginaActual, setPaginaActual] = useState(1);
            const indiceInicial = (paginaActual - 1) * productosPorPagina;
            const indiceFinal = indiceInicial + productosPorPagina;
            const productosPaginados = productosFiltrados.slice(indiceInicial, indiceFinal);

             // Lógica para cambiar de página
            const cambiarPagina = (numeroPagina) => {
                setPaginaActual(numeroPagina);
                // agregar lógica adicional aquí, como desplazarse(scroll) hacia arriba de la página
            };


        return (
            <div className="producto">
                {/* <h1>Producto</h1> */}
                 {/* Barra de filtros y búsqueda */}
                <div className='busqueda'>
                    {/* Agregar controles de filtro y búsqueda */}
                    <input type='text' placeholder='Buscar producto' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                     {/* Agregar mas controles de filtro y búsqueda */}
                </div>

                 {/* Lista de productos */}
                <div className="listaproductos">
                    {productosPaginados.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Descripción: {producto.descripcion}</p>
                        <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
                    </div>
                    ))}
                </div>
                <button onClick={() => detalleProducto()}>Ver detalle</button>
                <DetalleProducto />
            </div>
        )

        /*  const detalleProducto = () => {
            return <DetalleProducto />
        } */
        /* return (
            <div className="producto">
                <h1>Producto</h1>
            </div>
        ) */
    }

export default Producto;