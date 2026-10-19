import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
      <main>
        <h1>Sistema de Soporte Técnico</h1>
        <h2>Mi primera aplicación con React</h2>
        <p>Bienvenido al sistema de solicitudes.</p>
        <button onClick={() => alert('Bienvenido a React')}>
          Comenzar
        </button>
      </main>
  )
}

export default App
