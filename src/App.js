// I import all the components created to be able to display them
import './App.css';
import Nav from './layout/nav/Nav'
import Aboutme from './aboutme/Aboutme'
import Portfolio from './portfolio/Portfolio';
import Professionnal from './professionnal/Professionnal';
import Competences from './competences/Competences';
import Contact from './contact/Contact';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Portfolio />
        <Aboutme />
        <Professionnal />
        <Competences />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
