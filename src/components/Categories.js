import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="relative flex mt-4 mb-20">
      <div className="grid grid-cols-4 mx-auto gap-4">
        <div className="w-full max-w-60 flex flex-col gap-10 p-4 border rounded-lg bg-yellow-300">
          <h2 className="font-bold text-3xl">Your freshest finds</h2>
          <Link to="/product" className="p-4 border border-black rounded-full">
            Shop all categories
          </Link>
        </div>
        <div className="w-full max-w-60 flex justify-center items-center p-4 border rounded-lg bg-pink-100">
          <h3 className="font-bold text-xl">Essentials</h3>
        </div>
        <div className="w-full max-w-60 flex justify-center items-center p-4 border rounded-lg bg-pink-100">
          <h3 className="font-bold text-xl">Fresh Fruits</h3>
        </div>
        <div className="w-full max-w-60 flex justify-center items-center p-4 border rounded-lg bg-pink-100">
          <h3 className="font-bold text-xl">Leafy Vegetables</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
