import logo from './logo.svg';
import './App.css';
import "./styles/reset.css"
import '../src/styles/common.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';
import { useState } from 'react';


function App() {

  const [checkHome, setCheckHome] = useState(false);

  return (
    <div className="App">
      <Nav checkHome={checkHome} />
      <AppRouter checkHome={checkHome} setCheckHome={setCheckHome} />
    </div>
  );
}

export default App;
