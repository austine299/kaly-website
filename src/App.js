
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <Helmet>
        <title>Kaly's Grain n More</title>
        <meta name="description" content="Welcome to Kaly's Grain n More. Your one-stop shop for all things grocery and more!" />
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>

    </CartProvider>
  );
}

export default App;
