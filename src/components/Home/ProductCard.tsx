import React from "react";

interface CardItem {
  title: string;
  img: string;
}

const ProductCard: React.FC<CardItem> = ({ title, img }) => {
  return (
    <div
      className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 overflow-hidden group"
    >
      <div className="w-full  bg-gray-200 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={img}
          alt="Product"
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5 text-center">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
