import aboutme from './aboutme.json'
import moi from '../image/moi.jpg'
import moipetit from '../image/moipetit.jpg'

function Aboutme () {
    return (
        <div className="colorAboutMe" >
            <section id="aboutme" className="container-fluid">
                <h2 className="text-center py-4"><i class="far fa-comment"></i> A propos de moi</h2>
                <hr />
                <p className="onlyIpadComputer my-2 p-2"><img src={moi}/></p>
                <p className="onlyMobile my-1"><img src={moipetit}/></p>
                <p>{aboutme.container}</p>
            </section>
        </div>
    );
}

export default Aboutme;