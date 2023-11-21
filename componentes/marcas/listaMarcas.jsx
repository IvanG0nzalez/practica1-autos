"use client"
import { obtener } from "@/hooks/Conexion";
import "./marcas.css"
import { useEffect, useState } from "react";
export function ListaMarcas({setMarcas}) {
    const [marcas, setLocalMarcas] = useState([]);
    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const response = await obtener('index.php?funcion=marcas');
                const nuevasMarcas = response.datos || [];
                setLocalMarcas(nuevasMarcas);
                setMarcas(nuevasMarcas);
            } catch (error) {
                console.error("Error obteniendo las marcas", error);
            }
        };

        fetchMarcas();
    }, [setMarcas]);

    console.log(marcas);
    return (
        <div className="container-fluid">
            <div className="row">
                {marcas.map((marca, i) => (
                    <div className="col-md-3" key={i}>
                        <div className="card mb-2">
                            <div className="card-body">
                                <h5 className="card-title">{i + 1}. {marca.nombre}</h5>
                                <p className="card-text">Estado: {marca.estado}</p>
                                <p className="card-text">ID: {marca.external_id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}