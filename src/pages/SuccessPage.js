import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const storedOrderSummary = localStorage.getItem("orderSummary");
    if (storedOrderSummary) {
      const items = JSON.parse(storedOrderSummary);
      setOrderItems(items);
      const total = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalValue(total);
      localStorage.removeItem("orderSummary");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Thank you for your order!
        </h1>
        <p className="text-lg text-center mb-6">
          We have received your order and will process it shortly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {orderItems?.length === 0 ? (
          <p className="text-center">No items were ordered.</p>
        ) : (
          <ul className="mb-6">
            {orderItems?.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}kg</p>
                  </div>
                </div>
                <p className="font-bold text-lg">
                  Rs.{item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center justify-between font-bold text-xl">
          <span>Total:</span>
          <span>Rs.{totalValue.toFixed(2)}</span>
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="p-4 bg-yellow-300 rounded-full hover:bg-yellow-400"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
