import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


function Footer({footerRef}) {
  return (
    <footer ref={footerRef} className="bg-gray-800 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div>
            <img src="/images/logo.jpg" className="w-16 sm:w-20 rounded-full" alt="Logo"/>
          </div>
          <p className="mt-4 text-gray-300">
            Supplying quality grains and household essentials across the world.
            Trusted. Fresh. Affordable.
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
              <FaFacebookF />
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
  );
}

export default Footer;
