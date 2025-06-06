import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { useState } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import { data } from "react-router-dom";

function Contact({ contactRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section ref={contactRef} className="bg-red-50 py-16 px-6 md:px-20">
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
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            required
            value={formData.message}
            onChange={handleChange}
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
  );
}

export default Contact;
