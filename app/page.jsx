import { ListaMarcas } from "@/componentes/marcas/listaMarcas"
import Menu from "@/componentes/menu"
export default async function Home() {
  return (
    <div>
      <Menu></Menu>
      <p className="h1">Marcas</p>
      <ListaMarcas></ListaMarcas>
    </div>
  )
}
