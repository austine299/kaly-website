import products from "../product.json";
import { useState } from "react";
import { Link } from "react-router-dom";

function Product({ productRef }) {
  return (
    <div ref={productRef} className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold p-7">Our Product</h1>
      <div className="flex flex-col gap-6 items-center py-16 px-6 md:px-20 w-full bg-red-50 ">
        <div className="flex sm:flex-row flex-cols flex-wrap  gap-9 sm:max-w-6xl h-full mx-auto">
          {products.map((product) => (
            <div
              id={product.id}
              key={product.id}
              className="flex flex-col justify-center items-center text-center "
            >
              <div
                id={product.id}
                className="hover:shadow-2xl transition duration-300 rounded-md"
              >
                <Link to={`product/${product.id}`}>
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="sm:w-48 sm:h-48 w-32 h-32  rounded-md"
                  />
                </Link>
                <p className="font-bold sm:w-48 w-32 mt-2">{product.name}</p>
              </div>
              <Link
                to={`product/${product.id}`}
                className="bg-red-600 hover:bg-red-400 text-white font-bold px-2 py-1 rounded-md mt-3"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
