import './App.css';
import Nav from './layout/nav/Nav'
import Aboutme from './aboutme/Aboutme'
import Portfolio from './portfolio/Portfolio';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Portfolio />
        <Aboutme />
      </main>
    </div>
  );
}

export default App;
