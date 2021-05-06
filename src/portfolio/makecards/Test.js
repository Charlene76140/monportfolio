import img from '../../image/memory.PNG'
import portfolio from '../../data/portfolio.json'

function Test () {
    return (
        <div className="row py-4">
            {portfolio.map((project, index) => {
                return (
                    <div className="card col-12 col-lg-4 py-3">
                    <img src={img} className="card-img-top" alt="logo memory"/>
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title text-dark">{project.nom}</h5>
                        <p className="card-text text-dark">{project.shortdescription}</p>
                        <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#test2">
                            Voir le projet
                        </button>
                    </div>

                    <div class="modal fade" id="test2" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-dark" id="staticBackdropLabel">titre</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-dark">{project.description}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Test;


