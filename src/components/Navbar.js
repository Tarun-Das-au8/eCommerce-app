import React from "react";
import { FaRegUser, FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="relative z-10 mx-28 top-5 flex border bg-white shadow-md rounded-full">
      <div className="w-full p-6 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-3xl font-bold">Origin</h1>
          <div className="relative border border-gray-300 rounded-full">
            <input
              type="text"
              placeholder="Search products"
              className="w-full py-2 pl-4 pr-10 text-gray-700 rounded-full focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-4">
            <li className="hover:bg-yellow-200 p-2 hover:border rounded-full">
              Shop all
            </li>
            <li className="hover:bg-yellow-200 p-2 hover:border rounded-full">
              About us
            </li>
            <li className="hover:bg-yellow-200 p-2 hover:border rounded-full">
              Stores
            </li>
          </ul>
          <div className="flex gap-4">
            <FaRegUser />
            <FaShoppingBasket />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
