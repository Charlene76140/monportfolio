import './App.css';
import Nav from './layout/nav/Nav'
import Aboutme from './aboutme/Aboutme'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Aboutme />
      </main>
    </div>
  );
}

export default App;
