import img from '../../image/chifoumi.jpg'
import portfolio from '../../data/chifoumi.json'

function Chifoumi () {
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
            {portfolio.map((project) => {
                return (
                    <div className="card py-3">
                        <div className="d-flex justify-content-center"><img src={img} className="card-img-top" alt="logo memory"/></div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-dark text-center text-decoration-underline mt-2">{project.title}</h5>
                            <p className="card-text text-dark pt-1 text-center">{project.shortdescription}</p>
                            <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#pierre">
                                Voir le projet
                            </button>
                        </div>

                        <div class="modal fade" id="pierre" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="staticBackdropLabel">{project.title}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <div className="row">
                                            <div className="col-lg-4 modal-left">
                                            <div className="d-flex justify-content-center"><img src={img} className="imgmodal" alt="logo pierre"/></div>
                                            </div>
                                            <div className="col-lg-8 modal-rigth">
                                                <h6 className="card-header">Sites</h6>
                                                <p>
                                                    <a href ="https://github.com/Charlene76140/Chifoumi">{project.lienGithub}</a><br />
                                                    <a href ="https://charlene76140.github.io/Chifoumi/">{project.lienSite}</a>
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

export default Chifoumi;


