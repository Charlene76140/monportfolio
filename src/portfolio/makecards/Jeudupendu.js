// I import the image of the card
import img from '../../image/pendu.png'
// I import the JSON file that corresponds to this project and I complete it with the information from the file
import portfolio from '../../data/jeudupendu.json'

function Jeudupendu () {
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
            {/* the .map function allows me to browse my JSON array */}
            {portfolio.map((project) => {
                return (
                    <div>
                        <div className="card py-3">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-center">
                                    <img src={img} className="card-img-top" alt="logo pendu"/>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-dark text-center text-decoration-underline my-3">{project.title}</h5>
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#pendu">
                                        Voir le projet <i class="fas fa-search-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="pendu" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="staticBackdropLabel">{project.title}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <div className="row">
                                            <div className="col-lg-4 modal-left">
                                            <div className="d-flex justify-content-center"><img src={img} className="imgmodal" alt="logo pendu"/></div>
                                            </div>
                                            <div className="col-lg-8 modal-rigth">
                                                <h6 className="card-header">Sites</h6>
                                                <p>
                                                    <a className ="colorLink" href ="https://github.com/Charlene76140/jeudupendu">{project.lienGithub}</a><br />
                                                    <a className ="colorLink" href ="https://charlene76140.github.io/jeudupendu/">{project.lienSite}</a>
                                                </p>
                                                <h6 className="card-header">Outils utilisés</h6>
                                                <p>{project.outils}</p>
                                                <h6 className="card-header">Description</h6>
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Jeudupendu;


