import React from "react";
import Memofruits from "./makecards/Memofruits";
import CR from "./makecards/CR";
import Terre2geek from "./makecards/Terre2geek";
import Norimmo from "./makecards/Norimmo";
import Jeudupendu from "./makecards/Jeudupendu";
import Chifoumi from "./makecards/Chifoumi";


class Portfolio extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="colorPortfolio container-fluid d-flex flex-column py-4" id="topPage">
                <section id="project" className="container-fluid">
                    <h2 className="text-center py-4"><i class="fas fa-book"></i> Mes projets</h2>
                    <hr />
                    <div className="row py-4">
                        <Memofruits />
                        <CR />
                        <Terre2geek />
                        <Norimmo />
                        <Jeudupendu />
                        <Chifoumi />
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;