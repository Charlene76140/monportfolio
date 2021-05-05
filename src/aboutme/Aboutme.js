import aboutme from '../data/aboutme.json'
import moi from '../image/moi.jpg'
import moipetit from '../image/moipetit.jpg'

function Aboutme () {

    return (
        <div className="colorAboutMe" >
            <section id="aboutme" className="container-fluid">
                <h2 className="text-center py-4"><i class="far fa-comment"></i> A propos de moi</h2>
                <hr />
                <div className="onlyMobile my-4"><img className ="float-start my-2 mx-3" src={moipetit}/><div className="pb-4">{aboutme.container}</div></div>
                <div className="onlyIpadComputer my-5"><img className ="float-start my-3 mx-4" src={moi}/><div className="pb-5">{aboutme.container}</div></div>
            </section>
        </div>
    );
}

export default Aboutme;