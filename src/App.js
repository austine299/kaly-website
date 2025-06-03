
import './App.css';
import {Helmet} from "react-helmet";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Helmet>
        <title>Kaly's Grain n More</title>
        <meta name="description" content="Welcome to Kaly's Grain n More. Your one-stop shop for all things grocery and more!" />
      </Helmet>
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
