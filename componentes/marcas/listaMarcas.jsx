import { obtener, url_api } from "@/hooks/Conexion";
import "./marcas.css"
export async function ListaMarcas() {
    const marcas = await obtener('index.php?funcion=marcas');
    console.log(marcas);
    return (
        <div className="container-fluid">
            <div className="row">
                {marcas.datos.map((marca, i) => (
                    <div className="col-md-3" key={i}>
                        <div className="card mb-2">
                            <div className="card-body">
                                <h5 className="card-title">{i + 1}. Marca {marca.nombre}</h5>
                                <p className="card-text">Estado: {marca.estado}</p>
                                <p className="card-text">ID: {marca.external_id}</p>
                                <a href="#" className="btn btn-primary">Detalles</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}