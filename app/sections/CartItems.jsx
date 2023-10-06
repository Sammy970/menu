"use client";

import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector((state) => state.items);

  return (
    <section className="max-container text-white">
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div key={item.id} className="flex flex-1 items-center gap-5">
              <p>Name: {item.name}</p> |<p>Price: {item.price}</p> |
              <p>Quantity: {item.quantity}</p> |
            </div>
          );
        })}
    </section>
  );
};

export default CartItems;
