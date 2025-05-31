import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

function Contact() {
  return (
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
        <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            required
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
          className="text-green-500 text-7xl absolute right-3 mt-72 pb-12"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contact;
