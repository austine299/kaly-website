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

function Product({ productRef }) {
  return (
    <div ref={productRef} className="flex flex-col gap-6 items-center">
        <h1 className="text-2xl font-bold p-7" >
          Our Product
        </h1>
      <div
        
        className="flex flex-col gap-6 items-center py-16 px-6 md:px-20 w-full bg-red-50 "
      >
        <div className="grid sm:grid-cols-5 grid-cols-3 gap-9 sm:max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center mx-auto  text-center">
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
    </div>
  );
}

export default Product;
