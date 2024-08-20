import React from "react";
import { FaRegUser, FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate the total quantity of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header className="relative z-10 mx-28 top-5 flex border bg-white shadow-md rounded-full">
      <div className="w-full p-6 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link to="/">
            <h1 className="text-3xl font-bold">Origin</h1>
          </Link>
          {/* <div className="relative border border-gray-300 rounded-full">
            <input
              type="text"
              placeholder="Search products"
              className="w-full py-2 pl-4 pr-10 text-gray-700 rounded-full focus:outline-none"
            />
          </div> */}
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-4">
            <li className="hover:bg-yellow-200 p-2 hover:border rounded-full">
              <Link to="/product">Shop all</Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <FaRegUser />
            <div className="relative">
              <FaShoppingBasket />
              <span className="z-10 absolute text-white bg-green-700 border rounded-full px-1 -top-4 -right-1 text-xs font-bold">
                {totalItems}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
