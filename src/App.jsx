import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    const nombreAsignatura = "Sistemas Informaticos"
    const componentesRed = ["Hardware", "Software", "Redes"]

    const mostrarNuevaAlerta = () => {
       alert(`Estas cursando: ${nombreAsignatura}) Mucho exito!`)
    }

  return (
      <main>
        <h1>Sistema de Soporte Técnico</h1>
        <h2>Mi primera aplicación con React</h2>
        <p>Bienvenido al sistema de solicitudes.</p>
          <h3>Asignatura: {nombreAsignatura}</h3>

          <uL style={{ textAlign: 'left', display: 'inline-block' }}>
              {componentesRed.map((item, index) => (<li key={index}>{item}</li>
              ))}
          </uL>

          <div style={{ marginTop: '15px' }}>
              <button onClick={() => alert('Bienvenido a React')}>
                  Comenzar
              </button>

              <button onClick={mostrarNuevaAlerta} style={{
                  marginLeft: '10px' }}>
                  Ver Info Asignatura
              </button>
          </div>
      </main>
  )
}

export default App
