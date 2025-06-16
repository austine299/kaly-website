import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex gap-2 items-center mb-6">
        <Link to="/" className="text-blue-600 hover:underline text-xl">
          Back to Shop
        </Link>
        <span className="font-bold">></span>
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex sm:flex-row flex-col sm:items-center gap-4 sm:justify-between border p-4 rounded-lg shadow"
          >
            <div className="flex justify-center items-center gap-4">
              <img
                src={require(`/public/images/${item.image}`)}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="font-semibold">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex justify-around items-start sm:items-center gap-7">
              <div className="flex items-center gap-7 border border-red-600 rounded-md w-fit">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-4 py-1 bg-red-600 hover:bg-red-400 text-3xl rounded-l-md text-white"
                >
                  -
                </button>
                <span className="py-1">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-4 py-1 bg-red-600 hover:bg-red-400 text-3xl rounded-r-md text-white"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="hover:bg-red-600 px-4 py-3 rounded-md font-bold hover:text-white"
              >
                Del
              </button>
            </div>
            <div className="sm:text-xl font-bold">
              clicked on checkout to send your cart to my DM
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <Link to="/checkout">
          <button className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-500">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
