import Menu_admin from "@/componentes/menu_admin";
import { obtener } from "@/hooks/Conexion";
export default async function Page() {
    const noticias = await obtener('index.php');

    return (
        <div className="row">
            <Menu_admin></Menu_admin>
            <h1>Añadir Auto</h1>
            
        </div>
    );
}