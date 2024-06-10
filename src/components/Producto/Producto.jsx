import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetalleProducto from '../DetalleProducto';
import './Producto.css';

function Producto() {
    const productosPorPag = 5;
    const [productos, setProductos] = useState([]); 
    const [pagina, setPagina] = useState(1); 
    const [cargando, setCargando] = useState(false);
    const [filtroCategoria, setFiltroCategoria] = useState(''); 
    const [filtroPrecio, setFiltroPrecio] = useState(''); 
    const [busqueda, setBusqueda] = useState('');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductosDesdeBaseDeDatos = async (pagina) => {
        // Simula la obtención de datos desde una base de datos
        return [
            // Aquí deberías implementar la lógica para obtener los productos desde la base de datos
        ];
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        setCargando(true);
        try {
            const nuevosProductos = await obtenerProductosDesdeBaseDeDatos(pagina);
            setProductos(prevProductos => [...prevProductos, ...nuevosProductos]);
            setPagina(prevPagina => prevPagina + 1);
            setCargando(false);
        } catch (error) {
            console.error('Error al cargar productos:', error);
            setCargando(false);
        }
    };

    const productosFiltrados = productos
        .filter(producto => producto.categoria.includes(filtroCategoria))
        .filter(producto => filtroPrecio === '' || producto.precio <= parseInt(filtroPrecio))
        .filter(producto => busqueda === '' || producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || producto.descripcion.toLowerCase().includes(busqueda.toLowerCase()));

    const productosPorPagina = 5;
    const [paginaActual, setPaginaActual] = useState(1);
    const indiceInicial = (paginaActual - 1) * productosPorPagina;
    const indiceFinal = indiceInicial + productosPorPagina;
    const productosPaginados = productosFiltrados.slice(indiceInicial, indiceFinal);

    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    return (
        <div className="productos">
            <div className='busqueda'>
                <input 
                    type='text' 
                    placeholder='Buscar producto' 
                    value={busqueda} 
                    onChange={(e) => setBusqueda(e.target.value)} 
                />
                <select 
                    value={filtroCategoria} 
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                >
                    <option value=''>Todas las categorías</option>
                    <option value='categoria1'>Categoría 1</option>
                    <option value='categoria2'>Categoría 2</option>
                    {/* Añade más categorías según sea necesario */}
                </select>
                <input 
                    type='number' 
                    placeholder='Precio máximo' 
                    value={filtroPrecio} 
                    onChange={(e) => setFiltroPrecio(e.target.value)} 
                />
                <button onClick={() => cargarProductos()}>Buscar</button>
            </div>

            <div className="listaproductos">
                {productosPaginados.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Descripción: {producto.descripcion}</p>
                        <Link to={`/detalles/${producto.id}`} onClick={() => setProductoSeleccionado(producto)}>Ver detalles</Link>
                    </div>
                ))}
            </div>

            {cargando && <p>Cargando más productos...</p>}

            {productoSeleccionado && <DetalleProducto producto={productoSeleccionado} />}

            <div className="paginacion">
                {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => cambiarPagina(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Producto;
