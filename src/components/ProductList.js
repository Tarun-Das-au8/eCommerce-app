import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";

const ProductList = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  // Find the item in the cart
  const cartItem = cart.find((item) => item.id === data.id);

  const handleAdd = () => {
    dispatch(addToCart({ ...data, quantity: 1 }));
  };

  const handleUpdate = () => {
    dispatch(
      updateQuantity({
        id: data.id,
        quantity: cartItem.quantity + 1,
      })
    );
  };

  const handleRemove = () => {
    if (cartItem.quantity > 1) {
      dispatch(
        updateQuantity({
          id: data.id,
          quantity: cartItem.quantity - 1,
        })
      );
    } else {
      dispatch(removeFromCart({ id: data.id }));
    }
  };

  return (
    <Link to={`/product/${data.id}`}>
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
            <div className="flex items-center gap-2">
              {cartItem ? (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleRemove();
                    }}
                    className="h-8 bg-red-400 hover:bg-red-700 py-1 px-3 rounded-xl"
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleUpdate();
                    }}
                    className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-3 rounded-xl"
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleAdd();
                  }}
                  className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-4 rounded-xl"
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
