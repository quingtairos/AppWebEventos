import './Registro.css';

import * as React from 'react';

import { auth } from '../../firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Registro = () => {
    /* return (
        <div className="registro">
            <h1>Registro</h1>
        </div>
    ) */
    <h2>Registrate</h2>

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    //const [contrasena, setContrasena] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState(''); 
    const [email, setEmail] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    //const [sexo, setSexo] = useState('');
    //otros campos
    //const [edad, setEdad] = useState(['fechaNacimiento']);
    const [error, setError] = useState('');
    //console.log(nombre, email, constraseña);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        createUserWithEmailAndPassword(auth, email, contraseña)
          .then((userCredential) => {
            console.log('Usuario registrado:', userCredential.user);
          })
          .catch((error) => {
            console.error('Error al registrar:', error);
          });

          console.log("Nombre:", nombre);
          console.log("Email:", email);
          console.log("Contraseña:", contraseña);
          console.log("Fecha de Nacimiento:", fechaNacimiento);
          console.log("Usuario:", usuario);
          console.log("Contraseña:", contraseña);

          const validarFechaNacimiento = (/* fechaNacimiento */) => {
            const fechaNacimientoDate = new Date(fechaNacimiento) /* fechaNacimiento.split('-'); */
            /*const edad= new Date(/* edad *///)/* .getFullYear; */ /* edadesNacimiento.split('-'); */
            /* return edad.getFullYear() - fechaNacimientoDate.getFullYear(); */
            const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
            return edad >= 18;
           /*  const dia = fechaNacimiento[2];
            const mes = fechaNacimiento[1];
            const año = fechaNacimiento[0]; */
        };

        //validaciones
        if (!usuario || !contraseña || !nombre || !apellidos || !email || !fechaNacimiento) {
            setError('Todos los campos son obligatorios');
            return;
        }

       /*  if (contraseña!== contraseñaConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        } */

        if (!validarFechaNacimiento(fechaNacimiento)) {
            setError('Debes ser mayor de edad');
            return;
        }

        registrarUsuario();
      };

      /*auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Usuario registrado correctamente
  })
  .catch((error) => {
    // Manejo de errores
  });*/


      return (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Registrarse</button>
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
            <div>
                <label>Usuario:</label>
                <input type="text" name='usuario' value={usuario} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <div>
                <label>Apellidos:</label>
                <input type="text" name='apellidos' value={apellidos} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <div>
                <label>Fecha Nacimiento:</label>
                <input type="date" name='fechaNacimiento' value={fechaNacimiento} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>
            <button type="submit">Registrate</button>
                {/* <a href="../Registro/Registro.jsx">Registrate aquí</a> */}
                <NavLink to={"/iniciarsesion"}>Inicia sesión aquí</NavLink>
        </form>
      );
    
}

export default Registro;