import './Login.css';

import Footer from '../Footer';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* const Login = () => { */
    function Login() {
          // Lógica de inicio de sesión

    /* return (
        <div className="login">
            <h1>Login</h1>
        </div>
    ) */

    const[formState, setFormState] = useState({

      nombre: '',
      contraseña: '',
      contraseñausuario: '',
     });
     const [contraseñausuario, setContraseñausuario] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState('');

    
<h2>Inicia Sesión Aquí</h2>

const SIGN_IN_WITH_GOOGLE = /* async */ () => {
    signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
   // Acciones después del inicio de sesión exitoso
    /*const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken; */
  // The signed-in user info.
  const user = result.user;

   console.log("user >>>", user);
   setUsuario(user);
  // IdP data available using getAdditionalUserInfo(result)
  // ...
}).catch((error) => {
  // Handle Errors here. // Manejo de errores
  const errorCode = error.code;
  alert(errorCode);
  /* const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ... */
});

};

    

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (evento) => {
      evento.preventDefault();
      
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Contraseña:", contraseña);
  }

    return (
        <div className="IniciarSesion">
          <h2>Iniciar Sesión</h2>
          {/* Formulario de inicio de sesión */}
          <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name='nombre' id='nombre' value={nombre} /* required */ onChange={(evento) => setNombre(evento.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" /* name='password' */ value={contraseña} onChange={(evento) => setContraseña(evento.target.value)} />
            </div>
                <button type="submit">Iniciar Sesión</button>
                {/* <a href="../Registro/Registro.jsx">Registrate aquí</a> */}
                <NavLink to={"../Registro/Registro.jsx"}>Registrate aquí</NavLink>
                <button onClick={SIGN_IN_WITH_GOOGLE} className='google'>
                Iniciar Sesión con Google
            </button>
        </form>

          {/* ... */}
          
        </div>
      );

      <Footer />  
      //include <Footer /> in the render method;

} 

export default Login;