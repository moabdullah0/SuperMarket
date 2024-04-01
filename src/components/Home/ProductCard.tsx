import React, { useState } from "react";

interface CardItem {
  title: string;
  img: string;
  price: string;
}

const ProductCard: React.FC<CardItem> = ({ title, img, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-sm bg-white border hover:bg-custom-color border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 overflow-hidden group"
    >
      <a href="#">
        <img className="p-8 rounded-t-lg" src={img} alt="Product" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {price}
          </h5>
        </a>
      </div>

      <div
        className={`flex justify-center items-center px-5 hover:bg-custom-color py-2 bg-gray-100 dark:bg-gray-700 transition-opacity duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full transition-all duration-300 ease-in-out"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
