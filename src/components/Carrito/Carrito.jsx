import './Carrito.css';

import * as React from 'react';

    const Carrito = () => {
        //function carrito() { 
       /*  return (
            <div className="carrito">
                <h1>Carrito</h1>
            </div>
        ) */

        // Lógica para obtener los productos del carrito
        const productosEnCarrito = [
            { id: 1, nombre: 'Producto 1', precio: 20.99 },
            { id: 2, nombre: 'Producto 2', precio: 15.49 },
            { id: 3, nombre: 'Producto 3', precio: 10.99 },
            { id: 4, nombre: 'Producto 4', precio: 5.49 },
            { id: 5, nombre: 'Producto 5', precio: 25.99 }
        ];

        // Lógica para eliminar un producto del carrito (puedes ajustarlo según tu aplicación)
        const eliminarDelCarrito = (id) => {
            // Implementar la lógica para eliminar el producto del carrito
            console.log(`Producto con ID ${id} eliminado del carrito.`);
        };

        return (
            <div className="Carrito">
                <h2>Carrito de Compras</h2>
                {productosEnCarrito.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <>
                    <div className="listaproductos">
                        {productosEnCarrito.map((producto) => (
                            <div key={producto.id} className="productoEncarrito">
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                {/* Botón para eliminar el producto del carrito */}
                                <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                    {/*  solo los usuarios logueados  */}
                    <p>PrecioTotal: ${calcularPrecioTotal()}</p>

                    </>
                )}
            </div>
        );


    }

export default Carrito;