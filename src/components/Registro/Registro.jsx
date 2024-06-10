import './Registro.css';

import * as React from 'react';

import { auth } from '../../firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';

const Registro = () => {
    /* return (
        <div className="registro">
            <h1>Registro</h1>
        </div>
    ) */
    <h2>Registrate</h2>

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log('Usuario registrado:', userCredential.user);
          })
          .catch((error) => {
            console.error('Error al registrar:', error);
          });
      };

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      );
    
}

export default Registro;