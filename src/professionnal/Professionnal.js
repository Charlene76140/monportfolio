import Listprofessionnal from './listprofessionnal/Listprofessionnal'

function Professionnal () {

    return (
        <div className="colorProfessionnal container-fluid d-flex flex-column" >
            <section id="carrer" className="container-fluid">
                <h2 className="text-center py-4"><i class="fas fa-briefcase"></i> Mon parcours professionnel</h2>
                <hr />
                <Listprofessionnal />
                <p className="text-center"><a href="#project" className="text-light" title="Haut de page"><i class="fas fa-angle-up"></i></a></p>
            </section>
        </div>
    );
}

export default Professionnal;