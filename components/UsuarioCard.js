import { useState } from "react";

export default function UsuarioCard({ usuario, onEliminar, onEditar }) {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [nombreEditado, setNombreEditado] = useState(usuario.nombre);
    const [edadEditada, setEdadEditada] = useState(usuario.edad);

    const guardarCambios = () => {
        onEditar(usuario.id, nombreEditado, edadEditada);
        setModoEdicion(false);
    }


    return (
        <div style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px"
        }}>
            {modoEdicion ? (
                <div>
                    <input
                        type="text"
                        value={nombreEditado}
                        onChange={(e) => setNombreEditado(e.target.value)}
                    />
                    <input
                        type="number"
                        value={edadEditada}
                        onChange={(e) => setEdadEditada(parseInt(e.target.value))}
                        style={{ marginLeft: "10px" }}
                    />
                    <button onClick={guardarCambios} style={{ marginLeft: "10px" }}>
                        Guardar
                    </button>
                    <button onClick={() => setModoEdicion(false)} style={{ marginLeft: "5px" }}>
                        Cancelar
                    </button>
                </div>
            ) : (
                <div>
                    <h3>{usuario.nombre}</h3>
                    <p>Edad: {usuario.edad}</p>
                    <button onClick={() => onEliminar(usuario.id)}>Eliminar</button>
                    <button onClick={() => setModoEdicion(true)} style={{ marginLeft: "10px" }}>
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
}