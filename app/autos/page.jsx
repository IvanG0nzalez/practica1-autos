import Menu_admin from "@/componentes/menu_admin";
import { obtener } from "@/hooks/Conexion";
import { url_api } from "@/hooks/Conexion";
import Link from "next/link";
export default async function Page() {
    const noticias = await obtener('index.php?funcion=listar_auto_user&external=<external_user>');

    return (
        <div className="row">
            <Menu_admin></Menu_admin>
            <h1>Administrar Autos</h1>
            {/*<div className="container-fluid">
                <div className="col-4">
                    <Link href="/noticias/nuevo" className="btn btn-success">NUEVO</Link>
                </div>
                <table className="table table-hoover">
                    <thead>
                        <tr>
                            <th>Nro</th>
                            <th>Noticia</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noticias.map((dato, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{dato.texto}</td>
                                <td><img src={url_api() + dato.imagen} className="card-img-top" alt="..."></img></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                        </div>*/}
        </div>
    );
}