"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useDispatch, useSelector } from "react-redux";

import {
  addItem,
  removeItem,
  updateQuantity,
} from "../redux/features/cartSlice";

import { useState } from "react";

const MenuItemCard = ({ id, name, price, desc }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items);
  const item = cart.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(item ? item.quantity : 0);

  const addToCart = () => {
    dispatch(addItem({ id, name, price }));
  };

  const removeFromCart = () => {
    dispatch(removeItem(id));
  };

  const updateItemQuantity = (newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    if (quantity === 0) {
      addToCart();
    } else {
      updateItemQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart();
    } else {
      updateItemQuantity(quantity - 1);
    }
    setQuantity(quantity - 1);
  };

  return (
    <Card className="h-auto rounded-lg ring-0 border-0 shadow-md bg-[#EEF2E3] selection">
      <CardHeader className="p-4 pb-1">
        <CardTitle>
          <p className="font-khand text-xl leading-5 tracking-[0.15rem]">
            {name}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex flex-1 flex-row gap-3 text-lg max-sm:text-sm font-semibold text-gray-800">
        <p className="font-hind text-gray-800 tracking-[0.06rem]">{desc}</p>
      </CardContent>
      <div className="flex flex-1 items-start justify-between">
        <p className="bg-red-300 rounded-tr-lg font-bold p-2.5 font-hind text-gray-900 tracking-[0.06rem]">
          ₹ {price}
        </p>
        {quantity === 0 ? (
          <button
            className="rounded-tl-lg bg-[#C8F169] font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 border-0 p-2.5"
            onClick={handleIncrement}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center">
            <button
              className="rounded-tl-lg bg-[#C8F169] font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 border-0 p-2.5"
              onClick={handleDecrement}
            >
              -
            </button>
            <p className="bg-[#C8F169] font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 border-0 p-2.5">
              {quantity}
            </p>
            <button
              className=" bg-[#C8F169] font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 border-0 p-2.5"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MenuItemCard;
