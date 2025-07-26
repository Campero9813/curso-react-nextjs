import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); //Evitar recargar la pagina
    setSaludo(`Hola ${nombre}`);
  }

  return(
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Formulario React + Next.js</h1>

      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          placeholder="Escribe tu numbre"
        />
        <button type="submit" style={{ marginLeft: "20px"}}>
          Saludar
        </button>
      </form>
      {saludo && <h2 style={{ marginTop: "20px"}}>{saludo}</h2>}

    </div>
  );
}