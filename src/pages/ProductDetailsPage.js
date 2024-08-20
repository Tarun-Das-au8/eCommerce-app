import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { vegetablesData } from "../utils/data";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const productData = vegetablesData.filter(
    (item) => item.id.toString() === id
  );

  const { name, price, description, about, image } = productData[0];

  return (
    <>
      <Navbar />
      {productData.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex mx-28 mt-20">
          <div className="w-full flex flex-row gap-8">
            <div className="w-2/5 h-auto border-2 border-gray-300 rounded">
              <img src={image} alt={`${name}-image`} />
            </div>
            <div className="w-3/5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-lg font-normal">{description}</p>
              </div>

              <div className="w-full max-w-60 px-4 py-1 flex items-center justify-between border rounded-lg bg-pink-100">
                <div className="flex flex-col font-medium">
                  <span>1kg</span>
                  <span>₹{price}</span>
                </div>
                <button className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-4 rounded-xl">
                  Add +
                </button>
              </div>

              <div className="flex flex-col gap-2 border rounded-lg p-2">
                <h4 className="text-xl font-medium">About</h4>
                <p className="text-lg font-normal">{about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
