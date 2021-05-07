import './App.css';
import Nav from './layout/nav/Nav'
import Aboutme from './aboutme/Aboutme'
import Portfolio from './portfolio/Portfolio';
import Professionnal from './professionnal/Professionnal';

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
      </main>
    </div>
  );
}

export default App;
