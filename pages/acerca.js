import Link from "next/link";

export default function Acerca(){
    return (
        <div style={{ textAlign: "center", marginTo: "50px" }}>
            <h1>Pagina Acerca de</h1>
            <p> Este es un curso básico de React y Next.js</p>
            <Link href="/">Volver al inicio</Link>
        </div>
    );
}