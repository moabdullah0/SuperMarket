import React from "react";

interface CardItem {
  title: string;
  img: string;
}

const ProductCard: React.FC<CardItem> = ({ title, img }) => {
  

  return (
    <div
  
      className="max-w-sm bg-white  border hover:bg-custom-color border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 overflow-hidden group"
    >
      <a href="#">
        <img
          className=" px-1 rounded-tlr-xl max-w-sm "
          src={img}
          alt="Product"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5 text-center">
            {title}
          </h5>
        </a>
      </div>

      
    </div>
  );
};

export default ProductCard;
