function Contact () {
    return (
        <div className="colorContact container-fluid d-flex flex-column" >
            <section id="contact" className="container-fluid d-flex flex-column align-items-center">
                <h2 className="text-center py-4 colorPrincipal"><i class="far fa-address-card"></i> Me contacter</h2>
                <hr className="colorPrincipal"/>

                <div className="container-fluid d-flex flex-column align-items-center py-4">
                    <h6 className="colorPrincipal">Depuis les réseaux sociaux</h6>
                    <div>
                        <a href="https://github.com/Charlene76140"><i class="fab fa-github-square colorPrincipal sizeIcon"></i></a>
                        <a href="https://twitter.com/jacqueline_tata"><i class="fab fa-twitter-square colorPrincipal sizeIcon px-4"></i></a>
                        <a href="https://www.linkedin.com/in/charl%C3%A8ne-saint-julien-a9065197/"><i class="fab fa-linkedin colorPrincipal sizeIcon"></i></a>
                    </div>
                    
                </div>
                <div className="container-fluid d-flex flex-column align-items-center py-4">
                    <h6 className="colorPrincipal">Par e-mail</h6>
                    <a href="mailto:c.saintjulien76140@gmail.com"><i class="far fa-envelope colorPrincipal sizeIcon"></i></a>
                </div>
            </section>
        </div>
    );
}

export default Contact;