import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartOverlay from "./CartOverlay";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  // Calculate the total quantity of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleCartOverlay = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="relative z-10 mx-10 md:mx-28 top-5 flex border bg-white shadow-md rounded-full flex-wrap items-center">
      <div className="w-full p-4 md:p-6 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link to="/">
            <h1 className="text-xl md:text-3xl font-bold">Origin</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="flex gap-4">
            <li className="hover:bg-yellow-200 p-2 hover:border rounded-full">
              <Link to="/product">Shop all</Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <div className="relative" onClick={toggleCartOverlay}>
              <FaShoppingBasket />
              <span className="z-10 absolute text-white bg-green-700 border rounded-full px-1 -top-4 -right-1 text-xs font-bold">
                {totalItems}
              </span>
            </div>
            <CartOverlay isOpen={isCartOpen} onClose={toggleCartOverlay} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
