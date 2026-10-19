export default function SolicitudCard({ titulo, prioridad, estado }) {
    return (
        <article style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>{titulo}</h3>
            <p>Prioridad: {prioridad}</p>
            <p>Estado: {estado}</p>
        </article>
    )
}