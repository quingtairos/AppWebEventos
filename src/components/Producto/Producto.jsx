import './Producto.css';

import * as React from 'react';

import { useEffect, useState } from 'react';



import DetalleProducto from '../DetalleProducto';

    //const Producto = () => {
    function Producto() {

        //const productosPorPag = 5;

        const [productos, setProductos] = useState([]); // Estado para almacenar los productos
        const [pagina, setPagina] = useState(1); // Estado para almacenar la página actual
        const [cargando, setCargando] = useState(false);
        //const [productosPorPagina, setProductosPorPagina] = useState(productosPorPag);

        const [filtroCategoria, setFiltroCategoria] = useState(''); // Estado para el filtro de categoría
        const [filtroPrecio, setFiltroPrecio] = useState(''); // Estado para el filtro de precio
        //const [busquedaTexto, setBusquedaTexto] = useState(''); // Estado para el campo de búsqueda*/
        const [busqueda, setBusqueda] = useState('');
        const obtenerProductosDesdeBaseDeDatos = () => {
                // lógica para obtener los productos desde la base de datos
                // ejemplo, llamada a una API o a una base de datos
                // Devuelve los datos obtenidos
                return [/* tus datos de productos */];
            };


        // Lógica para obtener productos desde la base de datos o datos de prueba
        useEffect(() => {
            cargarProductos();
            // Realiza la llamada a la base de datos o utiliza datos de prueba
            // Actualiza el estado de 'productos' con los datos obtenidos
            const datosProductos = obtenerProductosDesdeBaseDeDatos(); // Implementa esta función
            setProductos(datosProductos);
          }, []); // Se ejecuta solo al montar el componente

          const cargarProductos = async () => {
            // Lógica para obtener los productos desde la base de datos
            try {
                // Simula una llamada a la base de datos o API para obtener productos
                const nuevosProductos = await obtenerProductosDesdeBaseDeDatos(pagina);
                setProductos(prevProductos => [...prevProductos, ...nuevosProductos]);
                setPagina(prevPagina => prevPagina + 1);
                setCargando(false);
                } catch (error) {
                console.error('Error al cargar productos:', error);
                }
            };

          // Lógica para aplicar filtros y búsqueda
            const productosFiltrados = productos
            .filter(producto => producto.categoria.includes(filtroCategoria))
            .filter(producto => filtroPrecio === '' || producto.precio <= parseInt(filtroPrecio))
            .filter(producto => busqueda === '' || producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || producto.descripcion.toLowerCase().includes(busqueda.toLowerCase()));

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
            <div className="productos">
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
                    //{productos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Descripción: {producto.descripcion}</p>
                        <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
                    </div>
                    ))}
                </div>

                  {/* Mensaje de carga */}
                    {cargando && <p>Cargando más productos...</p>}
                   {/*  {!cargando && productos.length === 0 && <p>No hay productos para mostrar</p>} */}
                <button onClick={() => detalleProducto()}>Ver detalle</button>
                <DetalleProducto />

                {/* Paginación */}
                {/* <div className="paginacion">
                    {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, index) => (
                    <button key={index + 1} onClick={() => cambiarPagina(index + 1)}>{index + 1}</button>
                    ))}
                </div> */}
            </div>
        );

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