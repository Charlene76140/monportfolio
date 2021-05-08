//I import the JSON file
import portfolio from '../../data/professionnal.json'


function Listprofessionnal () {
    return (
        <div>
            {/* I browse the JSON array and for each object found I create a section */}
            {portfolio.map((data) => {
                return (
                    <div className="row d-flex justify-content-center align-items-center my-5">
                        <div className="col-6 text-center dates mb-2 me-lg-3">
                            <h6 className="p-3">{data.de}<br/> {data.à}</h6>
                        </div>
                        <div className="col-6 text-center parcours text-dark">
                            <h6>{data.poste}</h6>
                            <p>{data.description} <strong>{data.entreprise}</strong></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Listprofessionnal;
               