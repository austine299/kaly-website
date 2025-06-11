import { useParams, Link } from "react-router-dom";
import { useState, useContext } from "react";
import products from "../product.json";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "./CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  const { addToCart, cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [localQty, setLocalQty] = useState(1);

  if (!product) return <div className="p-8">Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: localQty });
  };

  return (
    <div className="p-8 flex flex-col sm:gap-6 gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link to="/" className="text-xl hover:text-blue-700 hover:underline">
            Home
          </Link>
          <span className="text-2xl">></span>
          <span className="text-xl">{product.name}</span>
        </div>
        <Link
          to="/cart"
          className="flex font-bold text-red-600 hover:underline text-xl"
        >
          <FaCartShopping />
          <span className="">{cartCount}</span>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flexflex-col justify-start">
          <img
            src={require(`/public/images/${product.image}`)}
            alt={product.name}
            className="w-80 h-80 rounded-md mb-4"
          />
          <span>{product.description}</span>
          <h1 className="text-2xl mt-4 font-bold">{product.name}</h1>

          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-7 border border-red-600 rounded-md w-fit">
              <button
                onClick={() => setLocalQty((prev) => Math.max(1, prev - 1))}
                className="px-4 py-1 bg-red-600 hover:bg-red-400 text-3xl rounded-l-md text-white"
              >
                -
              </button>
              <span className="py-1">{localQty}</span>
              <button
                onClick={() => setLocalQty((prev) => prev + 1)}
                className="px-4 py-1 bg-red-600 hover:bg-red-400 text-3xl rounded-r-md text-white"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-4 py-1 bg-red-600 hover:bg-red-400 font-bold rounded-md text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
