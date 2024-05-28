import './Producto.css';

import DetalleProducto from '../DetalleProducto';

    const Producto = () => {

        const productosPorPag = 5;

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