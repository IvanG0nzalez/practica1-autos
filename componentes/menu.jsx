import Link from "next/link";
export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/*<Link href="/" className="navbar-brand">Práctica Número 1</Link>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/inicio_sesion" className="nav-link active" aria-current="page">Iniciar Sesión</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Principal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}