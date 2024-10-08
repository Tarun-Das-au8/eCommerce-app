import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { vegetablesData } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productData = vegetablesData.find((item) => item.id === parseInt(id));
  const { name, price, description, about, image } = productData;

  const cart = useSelector((state) => state.cart.items);
  const cartItem = cart.find((item) => item.id === parseInt(id));

  const handleAdd = () => {
    dispatch(addToCart({ ...productData, quantity: 1 }));
  };

  const handleUpdate = () => {
    dispatch(
      updateQuantity({
        id: productData.id,
        quantity: cartItem.quantity + 1,
      })
    );
  };

  const handleRemove = () => {
    if (cartItem.quantity > 1) {
      dispatch(
        updateQuantity({
          id: productData.id,
          quantity: cartItem.quantity - 1,
        })
      );
    } else {
      dispatch(removeFromCart({ id: productData.id }));
    }
  };

  return (
    <>
      <Navbar />
      {productData.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex mx-10 md:mx-28 mt-14 md:mt-20 mb-4">
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/5 h-auto">
              <img src={image} alt={`${name}-image`} className="object-cover" />
            </div>
            <div className="w-full md:w-3/5 flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-lg font-normal">{description}</p>
              </div>

              <div className="w-full md:max-w-60 px-4 py-1 flex items-center justify-between border rounded-lg bg-pink-100">
                <div className="flex flex-col font-medium">
                  <span>1kg</span>
                  <span>₹{price}</span>
                </div>
                <div className="flex items-center gap-2">
                  {cartItem ? (
                    <>
                      <button
                        onClick={() => handleRemove()}
                        className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-3 rounded-xl"
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        onClick={() => handleUpdate()}
                        className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-3 rounded-xl"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleAdd()}
                      className="h-8 bg-yellow-400 hover:bg-yellow-700 py-1 px-4 rounded-xl"
                    >
                      Add +
                    </button>
                  )}
                </div>
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
