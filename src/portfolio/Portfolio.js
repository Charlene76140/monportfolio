import React from "react";
import Makecards from './makecards/Makecards'
import Test from './makecards/Test'

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
                    <Makecards />
                    {/* <Test /> */}
                </section>
            </div>
        );
    }
}

export default Portfolio;