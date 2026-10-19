export default function SolicitudCard({ id, titulo, prioridad, estado, onResolver }) {
    return (
        <article style={{ border: '1px solid #ccc', padding: '15px', margin: '12px 0', borderRadius: '6px', textAlign: 'left' }}>
            <h3>{titulo}</h3>
            <p><strong>Prioridad:</strong> {prioridad}</p>
            <p><strong>Estado:</strong> {estado}</p>

            {estado !== 'Resuelta' && (
                <button
                    onClick={() => onResolver(id)}
                    style={{ marginTop: '8px', padding: '6px 12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Resolver
                </button>
            )}
        </article>
    )
}
