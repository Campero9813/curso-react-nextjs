import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Curso React + Next.js</h1>
      <h2> Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}