import logo from './logo.svg';
import './App.css';
import '../src/styles/common.css';
import Nav from './components/Nav';
import Contents from './components/Contents';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Nav />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
