import memory from '../../image/memory.PNG'

function Makecards () {
    return (
        <div className="row py-4">
            <div className="card col-12 col-lg-4 py-3">
                <img src={memory} className="card-img-top" alt="logo memory"/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-dark">Card title</h5>
                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#test">
                        Voir le projet
                    </button>
                </div>
                <div class="modal fade" id="test" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-dark" id="staticBackdropLabel">titre</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-dark">bla bla bla bla </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Makecards;