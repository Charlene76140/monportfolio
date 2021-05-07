function Competences () {
    return (
        <div className="colorCompetences container-fluid d-flex flex-column" >
            <section id="competences" className="container-fluid">
                <h2 className="text-center py-4"><i class="fas fa-laptop"></i> Mes Compétences</h2>
                <hr />
                <div className="row my-5 py-5 bg-light">
                    <div className="col-12 col-sm-6 text-dark text-center">
                        <h6 className="mb-4"><i class="fa fa-code"></i> Compétences techniques</h6>
                        <div className="mb-4 px-2">
                            <p className="badge rounded-pill py-2 mx-1">Javascript</p>
                            <p className="badge rounded-pill py-2 mx-1">HTML</p>
                            <p className="badge rounded-pill py-2 mx-1">CSS</p>
                            <p className="badge rounded-pill py-2 mx-1">Bootstrap</p>
                            <p className="badge rounded-pill py-2 mx-1">PHP</p>
                            <p className="badge rounded-pill py-2 mx-1">MySQL</p>
                            <p className="badge rounded-pill py-2 mx-1">API-DOM</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 text-dark text-center">
                        <h6 className="mb-4"><i class="fas fa-tools"></i> Outils</h6>
                        <p className="badge rounded-pill py-2 mx-1">Github</p>
                        <p className="badge rounded-pill py-2 mx-1">Framework : REACT, Symphony </p>
                    </div>
                    <div className="col-12 col-sm-6 text-dark text-center">
                        <h6 className="mb-4"><i class="fas fa-globe-europe"></i> Langues</h6>
                        <div className="mb-4 px-2">
                            <p className="badge rounded-pill py-2 mx-1">Francais : langue maternelle</p>
                            <p className="badge rounded-pill py-2 mx-1">Anglais : bon</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 text-dark text-center">
                        <h6 className="mb-4"><i class="fas fa-user-circle"></i> Savoir être</h6>
                        <p className="badge rounded-pill py-2 mx-1">Rigoureuse</p>
                        <p className="badge rounded-pill py-2 mx-1">Organisée</p>
                        <p className="badge rounded-pill py-2 mx-1">Apte au télé-travail</p>
                    </div>
                    
                </div>
                <p className="text-center py-5" ><a href="#project" className="text-light" title="Haut de page"><i class="fas fa-angle-up"></i></a></p>
            </section>
        </div>
    );
}

export default Competences;