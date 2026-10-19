export default function SolicitudCard({ titulo, prioridad, estado }) {
    return (
        <article style={{ border: '1px solid #ccc', padding: '12px', margin: '12px 0', borderRadius: '6px', textAlign: 'left' }}>
            <h3>{titulo}</h3>
            <p><strong>Prioridad:</strong> {prioridad}</p>
            <p><strong>Estado:</strong> {estado}</p>
        </article>
    )
}
