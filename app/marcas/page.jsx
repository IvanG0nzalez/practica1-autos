"use client"
import { ListaMarcas } from "@/componentes/marcas/listaMarcas";
import Menu_admin from "@/componentes/menu_admin";
import React, { useState } from 'react';

export default function Page() {
    const [marcas, setMarcas] = useState([]);

    return (
        <div className="row">
            <Menu_admin></Menu_admin>
            <ListaMarcas setMarcas={setMarcas}></ListaMarcas>
            {/**<div className="container-fluid">
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