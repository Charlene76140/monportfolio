import Listprofessionnal from './listprofessionnal/Listprofessionnal'

function Professionnal () {

    return (
        <div className="colorProfessionnal container-fluid d-flex flex-column py-4" >
            <section id="carrer" className="container-fluid">
                <h2 className="text-center py-4"><i class="fas fa-briefcase"></i> Mon parcours professionnel</h2>
                <hr />
                <Listprofessionnal />
            </section>
        </div>
    );
}

export default Professionnal;