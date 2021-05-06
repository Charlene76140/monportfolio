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
            <div className="colorPortfolio">
                <section id="project" className="container-fluid">
                    <h2 className="text-center py-4"><i class="fas fa-laptop"></i> Mes projets</h2>
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