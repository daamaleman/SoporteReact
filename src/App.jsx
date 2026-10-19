import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function SolicitudCard({ titulo, prioridad, estado }) {
    return (
        <article style={{ border: '1px solid #ccc', padding: '12px', margin: '12px 0', borderRadius: '6px', textAlign: 'left' }}>
            <h3>{titulo}</h3>
            <p><strong>Prioridad:</strong> {prioridad}</p>
            <p><strong>Estado:</strong> {estado}</p>
        </article>
    )
}

function App() {
    const nombreAsignatura = "Sistemas Informáticos"
    const componentesRed = ["Hardware", "Software", "Redes"]

    const mostrarNuevaAlerta = () => {
        alert(`Estás cursando: ${nombreAsignatura}. ¡Mucho éxito!`)
    }

    return (
        <main>
            <h1>Sistema de Soporte Técnico</h1>
            <h2>Mi primera aplicación con React</h2>
            <p>Bienvenido al sistema de solicitudes.</p>

            {/* Microreto A: Información de la Asignatura */}
            <section style={{ marginBottom: '25px', borderBottom: '1px dashed #555', paddingBottom: '20px' }}>
                <h3>Asignatura: {nombreAsignatura}</h3>

                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                    {componentesRed.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div style={{ marginTop: '15px' }}>
                    <button onClick={() => alert('Bienvenido a React')}>
                        Comenzar
                    </button>

                    <button onClick={mostrarNuevaAlerta} style={{ marginLeft: '10px' }}>
                        Ver Info Asignatura
                    </button>
                </div>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h2>Solicitudes de soporte</h2>

                <SolicitudCard
                    titulo="Equipo no enciende"
                    prioridad="Alta"
                    estado="Pendiente"
                />

                <SolicitudCard
                    titulo="Instalar software"
                    prioridad="Media"
                    estado="En proceso"
                />
            </section>
        </main>
    )
}

export default App
