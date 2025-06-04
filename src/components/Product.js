import products from "../product.json";
import { useState } from "react";

function Product({ productRef }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    if (selectedProduct?.id === product.id) {
      setSelectedProduct(null); // close modal
    } else {
      setSelectedProduct(product); // open modal for clicked product
    }
  };

  return (
    <div ref={productRef} className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold p-7">Our Product</h1>
      <div className="flex flex-col gap-6 items-center py-16 px-6 md:px-20 w-full bg-red-50 ">
        <div className="flex sm:flex-row flex-cols flex-wrap  gap-9 sm:max-w-6xl h-full mx-auto">
          {products.map((product) => (
            <div
              onClick={() => handleProductClick(product)}
              key={product.id}
              className={
                selectedProduct?.id === product.id
                  ? "flex justify-center items-center text-center  w-full sm:w-full h-full mx-auto  relative cursor-pointer"
                  : "flex flex-col justify-center items-center text-center  cursor-pointer"
              }
            >
              <div className={selectedProduct?.id === product.id
                  ? "flex flex-col justify-center items-center text-center w-10/12 sm:w-1/2 h-full mx-auto my-auto bg-white rounded-md p-4"
                  : ""}>
                <img
                  src={require(`../images/${product.image}`)}
                  alt="product image1"
                  className={
                    selectedProduct?.id === product.id
                      ? "sm:w-72 w-72 h-60  rounded-md"
                      : "sm:w-48 sm:h-48 w-32 h-32  rounded-md"
                  }
                />
                <p className="font-bold sm:w-48 w-32">{product.name}</p>
                {selectedProduct?.id === product.id && (
                  <span className="text-red-500 font-bold">only a few left to grab and we deliver to your door step</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
