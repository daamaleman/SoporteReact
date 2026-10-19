import { useEffect, useState } from 'react'
import { api } from './services/api'
import SolicitudCard from './components/SolicitudCard'

function App() {
  const [solicitudes, setSolicitudes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Inicializa el controlador para poder cancelar la petición HTTP si el componente se desmonta
    const controller = new AbortController()

    async function cargar() {
      try {
        setCargando(true)
        setError('')
        
        // Consumimos el endpoint usando nuestra instancia centralizada de Axios
        const respuesta = await api.get('/solicitudes', {
          signal: controller.signal // Vincula la señal de aborto a esta petición
        })
        setSolicitudes(respuesta.data)
      } catch (err) {
        // Si el error fue provocado por nosotros al cancelar la petición, lo ignoramos de forma segura
        if (err.code !== 'ERR_CANCELED') {
          setError('No fue posible consultar las solicitudes.')
        }
      } finally {
        // Cambia el estado visual de carga únicamente si el proceso no fue interrumpido abruptamente
        if (!controller.signal.aborted) setCargando(false)
      }
    }

    cargar()
    
    // Función de limpieza (cleanup function) que aborta la llamada de red al desmontar el componente
    return () => controller.abort()
  }, [])

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Solicitudes desde Spring Boot</h1>
      
      {/* Estado visual de carga */}
      {cargando && <p role="status" style={{ color: '#007bff', fontWeight: 'bold' }}>Cargando solicitudes...</p>}
      
      {/* Estado visual de error */}
      {error && <p role="alert" style={{ color: '#dc3545', fontWeight: 'bold' }}>{error}</p>}
      
      {/* Estado cuando la colección está vacía */}
      {!cargando && !error && solicitudes.length === 0 && (
        <p>No hay solicitudes registradas.</p>
      )}
      
      {/* Renderizado reactivo de las tarjetas */}
      {!cargando && !error && solicitudes.map(s => (
        <SolicitudCard key={s.id} {...s} />
      ))}
    </main>
  )
}

export default App
