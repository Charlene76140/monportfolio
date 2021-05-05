import React from "react";
import Makecards from './makecards/Makecards'

class Portfolio extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="colorPortfolio">
                <section id="project">
                    <h2>Mes projets</h2>
                    <hr />
                    <Makecards />
                </section>
            </div>
        );
    }
}

export default Portfolio;