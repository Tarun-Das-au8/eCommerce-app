import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaArchive } from "react-icons/fa";

const CartOverlay = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDecrease = (id, quantity) => {
    if (quantity === 1) {
      dispatch(removeFromCart({ id }));
    } else {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleIncrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalValue = calculateTotal();

  const handleOrder = () => {
    localStorage.setItem("orderSummary", JSON.stringify(cartItems));
    dispatch(clearCart());
    navigate("/success");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <div
        className={`absolute top-0 right-0 w-96 max-w-full bg-white shadow-lg h-full overflow-y-auto transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold p-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="p-4">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2 md:gap-4 p-2 md:p-4 border-b border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-12 md:w-16 h-12 md:h-16 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.quantity}kg</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrease(item.id, item.quantity)}
                        className="text-lg font-bold px-2 py-1 bg-yellow-400 hover:bg-yellow-700 rounded"
                      >
                        &minus;
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id, item.quantity)}
                        className="text-lg font-bold px-2 py-1 bg-yellow-400 hover:bg-yellow-700 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-lg">
                      Rs.{item.price * item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    <FaArchive />
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-4 flex justify-between border-t border-gray-200 mt-4">
              <span className="font-bold text-xl">Total:</span>
              <span className="font-bold text-xl">
                Rs.{totalValue.toFixed(2)}
              </span>
            </div>
            <div className="p-4">
              <button
                className="w-full block p-4 text-center font-semibold bg-yellow-300 rounded-full hover:bg-yellow-400"
                onClick={handleOrder}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
