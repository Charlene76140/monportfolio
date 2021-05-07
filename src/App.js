import './App.css';
import Nav from './layout/nav/Nav'
import Aboutme from './aboutme/Aboutme'
import Portfolio from './portfolio/Portfolio';
import Professionnal from './professionnal/Professionnal';
import Competences from './competences/Competences';

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
      </main>
    </div>
  );
}

export default App;
