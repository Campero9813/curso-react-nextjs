import Link from "next/link";
import Contador from "@/components/Contador";
import Formulario from "@/components/Formulario";
import ListaUsuarios from "@/components/ListaUsuarios";

export default function Home() {
  return (
    <div style={{  textAlign: "center", marginTop: "100px" }}>
      <h1>Curso React + Next.js</h1>

    <nav style={{ marginBottom: "20px" }}>
      <Link href="/acerca">Ir A Acerca</Link>
    </nav>


      <Formulario titulo="Formulario de saludo"/>
      <Contador />
      <ListaUsuarios />

    </div>
  );
}