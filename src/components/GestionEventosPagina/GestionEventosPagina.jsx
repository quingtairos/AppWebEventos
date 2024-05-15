import './GestionEventosPagina.css';
import {Link} from 'react-router-dom';

//import fest from './assets/img/fest.jpeg';

import * as React from 'react';

//import Producto from '../Producto/Producto';

    const GestionEventosPagina = () => {

        
    const productosDestacados = [
        { id: 1, nombre: 'Producto 1', precio: 20.99 },
        { id: 2, nombre: 'Producto 2', precio: 15.49 },
        { id: 3, nombre: 'Producto 3', precio: 10.99 },
        { id: 4, nombre: 'Producto 4', precio: 5.49 },
        { id: 5, nombre: 'Producto 5', precio: 25.99 }
    ];

    return (

        <div className='GestionEventosPagina'>

             {/* Contenido */}
             <h1>GestionEventosPagina</h1>

             <div className='descripcionTienda'>
                <h1>Bienvenido a nuestra tienda de eventos</h1>
                <p>
                Aquí encontrarás todo lo que necesitas para organizar tus eventos especiales.
                ¡Descubre nuestra selección de productos y haz que tus celebraciones sean inolvidables!
                {/* <model-viewer src="Upload model..." ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1">
                    <div class="progress-bar hide" slot="progress-bar">
                        <div class="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
                    <div id="ar-prompt">
                        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
                    </div>
                </model-viewer> */}
                </p>
                 {/*  más contenido, como mapa, enlaces, ... */}
                 
             </div>


                {/* <div className='productosDestacadosContenedor'>

                    {productosDestacados.map((producto) => (
                        <Producto
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                        />
                    ))}
            </div> */}
            <div className='productosDestacados'>
                <h2>Productos Destacados</h2>
                <div className="listaproductos">
                    {productosDestacados.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <a href={`/detalles/${producto.id}`}>Ver detalles</a>
                        {/*<Link to={`/detalles/${producto.id}`}>Ver detalles</Link> */}
                    </div>
                    ))}
                </div>
            </div>

             {/* return ( */}
          <h2>{/* Administrar */} Eventos</h2>
        {/* Contenido */}
        <div className="eventos">
              Tenemos varios tipos de eventos.
              Algunos de los más solicitados son:
            {/* <br /> */}
            <p>
              {/* <image src="../../assets/img/fest.jpeg" alt="festivales" /> */}
              <a href="../../assets/img/fest.jpeg" alt="festivales">
                {/* <img src={fest} className='fest imagen' alt="festivales" /> */}
                <img src="../../assets/img/fest.jpeg" className='fest imagen' alt="festivales" />
              </a>
              FESTIVALES
              <br />
              <small>de todo tipo</small>
                <br />
              CONCIERTOS
              <br />
              Bodas 
              <br />
              <small>y celebración de fiestas de boda</small>
              <br />
              Servicio de Catterin
            </p>
            </div>

        </div>
    )

    }

export default GestionEventosPagina;