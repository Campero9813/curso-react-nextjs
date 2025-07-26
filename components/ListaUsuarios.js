import { useState } from "react";
import UsuarioCard from "./UsuarioCard";


export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Arlett", edad: 20},
        { id: 2, nombre: "Robert", edad: 27},
        { id: 3, nombre: "Luis", edad: 45}
    ]);
    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevaEdad, setNuevaEdad] = useState("")

    const agregarUsuario = (e) => {
        e.preventDefault();
        if (nuevoNombre.trim() === "" || nuevaEdad.trim() === "") return;

        const nuevoUsuario = {
            id: Date.now(), //Genera un id unico usando un timestamp
            nombre: nuevoNombre,
            edad: parseInt(nuevaEdad),
        }
        setUsuarios([...usuarios, nuevoUsuario]);
        setNuevoNombre("");
        setNuevaEdad("");
    }

    const eliminarUsuario = (id) => {
        const nuevosUsuarios = usuarios.filter(u => u.id !== id);
        setUsuarios(nuevosUsuarios);
    }
    
    const editarUsuario = (id, nuevoNombre, nuevaEdad) => {
        const usuariosActualizados = usuarios.map((u) => 
            u.id === id ? {...u, nombre: nuevoNombre, edad: nuevaEdad} : u
        );
        setUsuarios(usuariosActualizados);
    }

    return (
        <div>
            <h2>Lista de Usuarios</h2>

            {/* Formulario para agregar nuevo usuario*/}
            <form onSubmit={agregarUsuario} style={{ marginBottom: "20px" }}>
                <input 
                    type="text"
                    placeholder="Nombre"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Edad"
                    value={nuevaEdad}
                    onChange={(e) => setNuevaEdad(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                <button type="submit" style={{ marginLeft: "10px" }}>Agregar</button>
            </form>



            {/* Mostrar Usuarios*/}
            {usuarios.map((u) => (
                <UsuarioCard key={u.id} usuario={u} onEliminar={eliminarUsuario} onEditar={editarUsuario}/>
            ))}
            {usuarios.length === 0 && <p>No hay usuarios.</p>}
        </div>
    );
}