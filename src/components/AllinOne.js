import { useState } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import Footer from "./Footer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import BannerImg from "../images/18.jpg";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/6.jpg";
import img17 from "../images/17.jpg";
import img19 from "../images/19.jpg";
import img20 from "../images/20.webp";
import img21 from "../images/21.webp";
import img22 from "../images/22.jpg";
import img23 from "../images/23.jpg";
import img24 from "../images/24.jpg";

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handlMassage = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbxkmkzs43CWQeHh_zteByPX3U2Qv9k4etjB65gmjB6um1URLOS3xn3vyfYa4D3P5m4ztA/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div id="navbar" className="flex flex-col">
        <div className="flex items-start justify-between p-8">
          <div>
            <a href="#"><img src={Logo} className="w-16 sm:w-20 rounded-full" /></a>
          </div>

          <div className="hidden sm:flex sm:flex-row flex-col gap-5">
            <a
              href="#"
              className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
            >
              HOME
            </a>
            <a
              href="#product"
              className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
            >
              PRODUCT
            </a>
            <a
              href="#about"
              className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
            >
              <FaSearch />
            </a>
          </div>

          <button className="sm:hidden" onClick={handleNavbar}>
            {showNavbar ? (
              <X className="w-6 h-6 mr-5" />
            ) : (
              <Menu className="w-10 h-10 mr-5" />
            )}
          </button>
        </div>
        {showNavbar && (
          <div className="flex justify-end w-full absolute top-16">
            <div className="sm:hidden flex  flex-col gap-5 bg-white p-5">
              <a
                href="#"
                className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
              >
                HOME
              </a>
              <a
                href="#"
                className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
              >
                PRODUCT
              </a>
              <a
                href="#"
                className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
              >
                CONTACT
              </a>
              <a
                href="#"
                className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white"
              >
                <FaSearch />
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        id="banner"
        className="h-80 flex flex-col items-center justify-center gap-3 bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <h2 className="text-3xl sm:text-5xl hover:rotate-6 text-white font-bold">
          Kaly Grains & More
        </h2>
        <span className="text-white">Healthy food for your lifestyle</span>

        <button className="mt-5 bg-red-500 text-white px-5 py-3 rounded-md hover:bg-red-400">
          Contact Us
        </button>
      </div>
      <div id="product" className="flex flex-col gap-6 items-center mt-6 ">
        <h1 className="text-2xl font-bold" id="product">
          Our Product
        </h1>
        <div className="flex flex-wrap gap-8 justify-center p-4 bg-red-50">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img1}
              alt="product image1"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Garri</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img2}
              alt="product image2"
              className="sm:w-48 sm:h-48 w-32 h-32 rounded-md"
            />
            <span className="font-bold">Grains</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img3}
              alt="product image3"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Grains</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img4}
              alt="product image4"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Grains</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img5}
              alt="product image2"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Full Package</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img6}
              alt="product image3"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Bag of rice</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img7}
              alt="product image4"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Bag of rice</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img8}
              alt="product image5"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Full bag of con</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img9}
              alt="product image9"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Spaghettini</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img10}
              alt="product image10"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Seasoning cubes</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img11}
              alt="product image11"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Chicken seasoning</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img12}
              alt="product image12"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Spaghettini</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img13}
              alt="product image13"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Chicken flavour</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img14}
              alt="product imag6"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Red pepe</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img15}
              alt="product imag7"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Black pepe</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img16}
              alt="product image8"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Half bag of rice</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img17}
              alt="product image9"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Semolina</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img19}
              alt="product image19"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Provision/Grains</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img20}
              alt="product image20"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Beans</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img21}
              alt="product image21"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Grains</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img22}
              alt="product image10"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Rice</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img23}
              alt="product image11"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Wheat</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={img24}
              alt="product image12"
              className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
            />
            <span className="font-bold">Garri</span>
          </div>
        </div>
      </div>
      <div id="about" className="flex flex-col gap-3 sm:w-2/3 p-8">
        <h1 className="text-2xl font-bold ">About Us</h1>
        <p className="mt-5 ">
          Kaly'S Grains N More is your trusted marketplace for premium grains,
          foodstuffs, and everyday groceries—offered at both wholesale and
          retail prices. Based in Eputu London, Ajah–Lagos, we are proudly
          committed to delivering quality, affordability, and convenience to
          homes and businesses across Nigeria and beyond.
        </p>
        <p className="">
          We specialize in unprocessed and carefully selected staples like long,
          medium & short grain rice, honey beans, Ijebu garri, yellow garri,
          crayfish, dry catfish, stockfish, ogbono, provisions, and more.
          Whether you're shopping for your family, your food business, or to
          export to loved ones abroad, we are the go-to store for fresh, clean,
          and authentic Nigerian food items.
        </p>
        <p className="">
          At Kaly'S Grains N More, customer satisfaction is our top priority. We
          pay attention to every detail—from sourcing to packaging—to ensure
          that you get nothing but the best. Our services are fast, friendly,
          and reliable, making your shopping experience easy and enjoyable.
        </p>
        <p className="">
          Come shop with us today and discover why our customers call us “the
          market near you.”
        </p>
      </div>
      <section id="contact" className="bg-red-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 text-gray-600">
              We’d love to hear from you! Fill out the form or reach us through
              the details below.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>📧Email:</strong> kalysgrainsnmore@gmail.com
              </li>
              <li>
                <strong>📞Phone:</strong> +2347061016098
              </li>
              <li>
                <strong>📍Address</strong>Location: Dee Tawak Gas Station,
                Olumakun Street, Eputu London, Ibeju-Lekki, Lagos
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/18yg5dFmXp/"
                  className="flex gap-3 items-center font-bold text-blue-600 hover:underline"
                >
                  Facebook <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+2347061016098"
                  className="flex gap-3 items-center font-bold text-blue-600 hover:underline"
                >
                  Whatsapp me Here <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/KalyGrains?t=ME2mnDm7u5Jdc8dQ8BGN5g&s=09"
                  className="flex gap-3 items-center font-bold text-blue-600 hover:underline"
                >
                  Twitter <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kalysgrainsnmore01?igsh=OXE4azNma3FpMHBw"
                  className="flex gap-3 items-center font-bold text-blue-600 hover:underline"
                >
                  Instagram <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Form */}
          <form
            onSubmit={handlMassage}
            className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
              required
              name="email"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded"
              required
              name="message"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          <a
            href="https://wa.me/+2347061016098"
            className="text-green-500 hover:text-green-700 text-7xl bottom-20 right-6 fixed z-50"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
      <footer id="footer" className="bg-gray-800 text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <div>
              <img src={Logo} className="w-16 sm:w-20 rounded-full" />
            </div>
            <p className="mt-4 text-gray-300">
              Supplying quality grains and household essentials across the
              world. Trusted. Fresh. Affordable.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">Phone: +2347061016098</p>
            <p className="text-gray-300 mb-4">
              Email: kalysgrainsnmore@gmail.com
            </p>

            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.facebook.com/share/18yg5dFmXp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/kalysgrainsnmore01?igsh=OXE4azNma3FpMHBw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+2347061016098"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Kaly Grains & More. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
