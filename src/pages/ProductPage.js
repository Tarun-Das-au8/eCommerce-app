import React from "react";
import Navbar from "../components/Navbar";
import { vegetablesData } from "../utils/data";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <h1 className="text-center font-semibold text-3xl mt-20">
        List of Products
      </h1>
      <div className="mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
          {vegetablesData?.map((item) => (
            <ProductList key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
