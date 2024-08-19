import React from "react";

const ProductList = ({ data }) => {
  return (
    <div className="w-72 h-[28rem] flex flex-col gap-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-[14rem]">
        <img
          src={data.image}
          alt={`${data.name}-image`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{data.name}</h3>
        <p className="text-gray-700 text-base">{data.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col gap-1 ">
            <span>1kg</span>
            <span className="text-green-700 font-bold text-lg">
              Rs.{data.price}
            </span>
          </div>
          <button className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-4 rounded-xl">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
