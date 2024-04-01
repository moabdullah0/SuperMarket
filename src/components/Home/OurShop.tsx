import React from "react";
import { ButtonShob, CardItemShop } from "../../data/Shopitems";
import ProductCard from "./ProductCard";


const OurShop: React.FC = () => {
  return (
    <div className="bg-custom-color">
      <h1 className="text-4xl font-serif text-center text-gray-500 pt-10">
        Our Shop
      </h1>
      <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
        long established fact...
      </p>
      <div className="flex justify-center flex-wrap gap-4 pt-10">
        {ButtonShob.map((button, index) => (
          <button
            key={index}
            className="text-gray-900 uppercase border border-green-300 hover:bg-green-600 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors duration-300"
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 pt-10">
        {CardItemShop.map((card, index) => (
          <ProductCard key={index} title={card.title} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
