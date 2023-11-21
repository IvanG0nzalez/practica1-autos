"use client"
import { obtener_autos } from "@/hooks/Conexion";
import { getExternalUser, getToken } from "@/hooks/SessionUtil";
import { useEffect, useState } from "react";

const obtenerAutosSimulados = () => {
    return Promise.resolve({
        datos: [
            {
                external_id: "1",
                descripcion: "RS 5 Coupé Azul",
                placa: "PBA-2541",
                chasis: "Aluminio",
                foto: "https://es.digitaltrends.com/wp-content/uploads/2021/12/audi-rs5_coupe-2020-1280-08.jpeg?p=1",
                marca: "Audi",
                subtotal: 1600,
                iva: 1920,
                descuento: 0,
                total: 17920
                // Agrega más atributos simulados según sea necesario
            },
        ],
    });
};

const ListaAutos = () => {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        const fetchAutos = async () => {
            try {
                //console.log("Obteniendo autos para el usuario:", externalUser);
                //const result = await obtener_autos(externalUser);
                //console.log("Datos de autos obtenidos:", result);
                //console.log("result.datos",result.datos);
                //setAutos(result.datos);
                const token = getToken();
                const externalUser = getExternalUser();
                //const response = await obtener_autos('index.php?funcion=obtener_auto&external='+externalUser, token);
                const response = await obtenerAutosSimulados();

                console.log("en listaAutos",response);
                setAutos(response.datos);
            } catch (error) {
                console.error("Error obteniendo los autos", error);
            }
        };

        fetchAutos();
    }, []);

    //console.log(autos.map);
    //console.log(setAutos);
    return (
        <div className="container-fluid">
            <h2>Listado de Autos</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Descripción</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Chasis</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">IVA</th>
                        <th scope="col">Descuento</th>
                        <th scope="col">Total</th>
                        {/* Agrega más encabezados según sea necesario */}
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto) => (
                        <tr key={auto.external_id}>
                            <td>{auto.descripcion}</td>
                            <td>{auto.placa}</td>
                            <td>{auto.chasis}</td>
                            <td>
                                <img src={auto.foto} alt={auto.descripcion} style={{ maxWidth: "100px", maxHeight: "100px" }} />
                            </td>
                            <td>{auto.marca}</td>
                            <td>{auto.subtotal}</td>
                            <td>{auto.iva}</td>
                            <td>{auto.descuento}</td>
                            <td>{auto.total}</td>
                            {/* Agrega más celdas según sea necesario */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaAutos;