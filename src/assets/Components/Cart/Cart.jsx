import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Root/Root";
import CartItem from "../CartItem/CartItem";
import { Link, useNavigate } from "react-router";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setPrice(total);
  }, [cart]);

  const navigate = useNavigate();
  const handlePurchase = ()=> {
    setCart([]);
    navigate("/")
}

  return (
    <div>
      <div className="flex text-sm sm:text-xl font-bold p-4 justify-between items-center">
        <h1 className="">Cart</h1>
        <h1>Total: {price}</h1>
          <button onClick={handlePurchase} className="btn rounded-2xl text-white bg-purple-500">
            Purchase
          </button>
      </div>
      <div className="my-4 h-screen max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {cart.map((item, idx) => (
            <CartItem key={idx} item={item}></CartItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
