
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/product' element ={<Product/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
