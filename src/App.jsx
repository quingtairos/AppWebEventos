import './App.css';
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header';
//import { productos } from './data/productos';
//import Producto from './components/Producto';
import Footer from './components/Footer/Footer';
import Producto from './components/Producto/Producto';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';

//import user-circle from './images/user-circle.png';
import fest from './assets/img/fest.jpeg';

//import { useState } from 'react';


import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
); */

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

const App = () => {
  //const productos, setProductos = React.useState([]);
  //const productos, setProductos = useState([]);

  return <BrowserRouter>

    <div className="App">
      <Header />
      <Routes>
        <Route path="">
          {/* <Navigate to="/" /> */}
          <Route path='/' element={<Navigate to="./components/Inicio/Inicio.jsx"/>} />{/* </Route> */}
          {/*  <Route path="/inicio" element={<Inicio productos={productos.slice(0, 5)} />} />*/}
         {/*  <Route path="/productos" element={<Producto productos={productos} />} /> */}
          <Route path='/inicio' element={Inicio}></Route>
          <Route path='/productos' element={Producto/*  productos={productos} */}></Route>


        </Route>
      </Routes>
      <Inicio />
      <Footer />
      
    </div> 

    </BrowserRouter>
}

export default App;
