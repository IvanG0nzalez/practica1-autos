"use client"
import ListaAutos from "@/componentes/autos/listaAutos";
import Menu_admin from "@/componentes/menu_admin";
export default function Page() {
    return (
        <div className="row">
            <Menu_admin></Menu_admin>
            <ListaAutos></ListaAutos>
        </div>
    );
}