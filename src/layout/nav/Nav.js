

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-between">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="mt-3 ms-lg-5">Charlène Saint-Julien</h1>
                    <p>Développeuse web</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav bg-light">
                        <li className="nav-item p-1">
                        <a className="nav-link" href="#project">Mes projets</a>
                        </li>
                        <li className="nav-item p-1">
                        <a className="nav-link" href="#aboutme">A propos de moi</a>
                        </li>
                        <li className="nav-item p-1">
                        <a className="nav-link" href="#carrer">Mon parcours professionnel</a>
                        </li>
                        <li className="nav-item p-1">
                        <a className="nav-link" href="#skills">Mes compétences</a>
                        </li>
                        <li className="nav-item p-1">
                        <a className="nav-link" href="#contact">Me contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;