import './Producto.css';

import * as React from 'react';

import { useState } from 'react';

import DetalleProducto from '../DetalleProducto';

    //const Producto = () => {
    function Producto() {

        const productosPorPag = 5;

        const [productos, setProductos] = useState([]); // Estado para almacenar los productos
        /*const [filtroCategoria, setFiltroCategoria] = useState(''); // Estado para el filtro de categoría
        const [filtroPrecio, setFiltroPrecio] = useState(''); // Estado para el filtro de precio
        const [busquedaTexto, setBusquedaTexto] = useState(''); // Estado para el campo de búsqueda*/
        const [busqueda, setBusqueda] = useState('');



        return (
            <div className="producto">
                {/* <h1>Producto</h1> */}
                <div className='busqueda'>
                    <input placeholder='Buscar producto'/>
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