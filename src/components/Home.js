import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Product from "./Product";
import About from './About'
import Contact from './Contact'
import Footer from "./Footer";


function Home(){
    const [showNavbar, setShowNavbar] = useState(false);

    return(
        <div>
            <Navbar showNavbar = {showNavbar} setShowNavbar= {setShowNavbar}/>
            <Header/>
            <Product/>
            <About/>
            <Contact/>
            <Footer/>
            
        </div>
    )
}

export default Home;