import './App.css';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Producto from './components/Producto/Producto';

//import user-circle from './images/user-circle.png';

import { useEffect, useState } from 'react';

import GestionEventosPagina from './components/GestionEventosPagina/GestionEventosPagina';

import Login from './components/Login/Login';

import Carrito from './components/Carrito/Carrito';

import Registro from './components/Registro/Registro';

import app from './firebase';
import { getAuth /*, onAuthStateChanged*/ } from './firebase/auth';

//import { useAuthState } from'react-firebase-hooks/auth';

const auth = getAuth(app);


//import React from 'react';
//import logo from './logo.png'; // Tell webpack this JS file uses this image

/* import fest from './assets/img/fest.png';

console.log(fest); */ // /logo.84287d09.png


//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

/* import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'; */

import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';

//import * as ReactDOM from'react-dom';



/* ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
); */


const App = () => {
  //const productos, setProductos = React.useState([]);

  const [productos, setProductos] = useState([]);

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioAuth) => {
    if (usuarioAuth) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const uid = user.uid;
      setUsuario(usuarioAuth);
    }
    else
    {
      setUsuario(null);
    }
  })
  
  useEffect(() => {
    fetch('https://console.firebase.google.com/u/0/project/app-auth-web/firestore/databases/-default-/data/~2FProductos').
    then(response => response.json()).
    then(data => setProductos(data));
})


  // Import result is the URL of your image
  //return <img src={fest} alt="fest" />;

  //return <BrowserRouter>
  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="" element={<Header />}>
          <Route path='/' element={<Inicio />}/>
          <Route path='/productos' element={<Producto />}/>
          <Route path='/detalles/:productoId' element={<DetalleProducto />}/>
        </Route>
      </Routes>
    </BrowserRouter>*/
    

    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="">
            {/* <Navigate to="/" /> */}
            <Route path='/' element={<Navigate to="/inicio"/>} />{/* </Route> */}
            {/* <Route path="/" element={<Inicio />} /> */}
            
            <Route path="/inicio" element={<Inicio productos={productos.slice(0, 5)} />} />
            <Route path='/inicio' element={<Inicio />} />{/* </Route> */}
            {/* <Route path='/inicio' component={Inicio} />

            <Route path="/detalles/:id" component={DetalleProducto} /> */}
            {/* <Route path='/productos' element={Producto/*  productos={productos} */}{/* ></Route> */}
            <Route path="/productos" element={<Producto />} />
            <Route path="/productos" element={<Producto productos={productos} />} />
            <Route path='/detalles/:productoId' element={<DetalleProducto />} />
           {/*  <Route path='/detalles2/:productoId' element={<DetalleProducto productos={productos} />} /> */}
            {/* <Route path='/detalles/:id' element={<DetalleProducto />} /> */}
            <Route path="/gestionEventos" element={<GestionEventosPagina/>} />
           {/*  <Route path="/carrito" component={Carrito} /> */}
           <Route path="/carrito" element={<Carrito />} />
            {/* <Route path='/gestionEventos' element={GestionEventosPagina} /> */}


            <Route path="/iniciarsesion" element={<Login />} />
            <Route path='/registrarse' element={<Registro />}/>
            {/* <Route path="/registro" element={<Registro />} /> */}

            <Route path="/footer" element={<Footer />} />


          </Route>
        </Routes>
        {/* <Inicio /> */}
        <Footer />
        
      </div> 

      <div>
     {/* { usuario? <h1>Bienvenido/a {usuario.email}</h1> : <h1>No estas logueado</h1>} */}
     {usuario ? <GestionEventosPagina correoUsuario = {usuario.email}  /> : <Login /> }
    </div>

    </BrowserRouter>

     
    
    
  );

    
}

export default App;
