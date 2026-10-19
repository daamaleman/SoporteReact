import { useState } from 'react'
import SolicitudCard from './components/SolicitudCard'

const iniciales = [
    { id: 1, titulo: 'Equipo no enciende', prioridad: 'Alta', estado: 'Pendiente' },
    { id: 2, titulo: 'Instalar software', prioridad: 'Media', estado: 'En proceso' }
]

function App() {
    const [solicitudes, setSolicitudes] = useState(iniciales)
    const [titulo, setTitulo] = useState('')
    const [prioridad, setPrioridad] = useState('Media')
    const [filtro, setFiltro] = useState('Todas')
    const [mensaje, setMensaje] = useState('')

    function resolverSolicitud(id) {
        setSolicitudes(actuales =>
            actuales.map(s =>
                s.id === id ? { ...s, estado: 'Resuelta' } : s
            )
        )
        setMensaje('Solicitud marcada como resuelta.')
    }

    function agregar(e) {
        e.preventDefault()
        if (!titulo.trim()) {
            setMensaje('Escribe una descripción de la solicitud.')
            return
        }
        const nueva = {
            id: crypto.randomUUID(),
            titulo: titulo.trim(),
            prioridad,
            estado: 'Pendiente'
        }
        setSolicitudes(actuales => [...actuales, nueva])
        setTitulo('')
        setMensaje('Solicitud agregada correctamente.')
    }

    const visibles = solicitudes.filter(s =>
        filtro === 'Todas' || s.estado === filtro
    )

    const pendientesCount = solicitudes.filter(s => s.estado === 'Pendiente').length

    return (
        <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Gestión de solicitudes</h1>
            <p>Total registradas: {solicitudes.length}</p>

            <p style={{ color: '#dc3545', fontWeight: 'bold' }}>Solicitudes Pendientes: {pendientesCount}</p>

            <form onSubmit={agregar} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <label htmlFor="titulo">Descripción</label>
                <input
                    id="titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                <label htmlFor="prioridad">Prioridad</label>
                <select
                    id="prioridad"
                    value={prioridad}
                    onChange={e => setPrioridad(e.target.value)}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                </select>

                <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Registrar
                </button>
            </form>

            <p role="status" style={{ fontWeight: 'bold', color: mensaje.includes('correctamente') || mensaje.includes('resuelta') ? 'green' : 'red' }}>
                {mensaje}
            </p>

            <div style={{ margin: '20px 0' }}>
                <label htmlFor="filtro" style={{ marginRight: '10px' }}>Filtrar por estado</label>
                <select
                    id="filtro"
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                    style={{ padding: '6px', borderRadius: '4px' }}
                >
                    <option>Todas</option>
                    <option>Pendiente</option>
                    <option>En proceso</option>
                    <option>Resuelta</option>
                </select>
            </div>

            {visibles.length === 0 ? (
                <p>No hay resultados.</p>
            ) : (
                visibles.map(s => (
                    <SolicitudCard
                        key={s.id}
                        {...s}
                        onResolver={resolverSolicitud}
                    />
                ))
            )}
        </main>
    )
}

export default App
