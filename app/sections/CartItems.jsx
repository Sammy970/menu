"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "@/redux/features/cartSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const CartItems = () => {
  const searchParams = useSearchParams();

  const tableNumber = searchParams.get("table");

  const [send, setSend] = useState(false);

  const cart = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const item = cart.find((item) => item.id === id);
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDecrement = (id) => {
    const item = cart.find((item) => item.id === id);
    const newQuantity = item.quantity - 1;
    if (newQuantity === 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleOrder = () => {
    console.log("Your Order: ", cart);
    setSend(true);
  };

  const sendOrder = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ cart, tableNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    // console.log(data);
  };

  useEffect(() => {
    if (send === true) {
      sendOrder();
      setSend(false);
    }
  }, [send]);

  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <section className="max-container text-white">
      <h2 className="text-white font-khand text-4xl tracking-[0.1rem] mb-4">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="w-[55%] max-sm:w-full  m-auto flex flex-row max-sm:flex-row-reverse justify-evenly items-center font-hind">
          <div className="w-full">
            <Image
              src="/Assets/emptyCart.svg"
              alt="Empty Cart"
              width={400}
              height={400}
            />
          </div>
          <p className="w-full text-white text-4xl leading-normal max-sm:text-2xl text-center">
            Your cart is <br />
            <span className="text-[#C8F169] capitalize font-bold min-xl:text-6xl text-5xl max-sm:text-3xl tracking-[0.14rem] ">
              empty
            </span>
          </p>
        </div>
      ) : (
        <Table className="w-[70%] max-sm:w-full m-auto">
          <TableHeader>
            <TableRow className="text-xl max-sm:text-[19px]">
              <TableHead className="w-[35%] max-sm:w-auto">
                <p className="font-khand text-white tracking-[0.14rem]">Name</p>
              </TableHead>
              <TableHead>
                <p className="font-khand text-white text-center tracking-[0.14rem]">
                  Quantity
                </p>
              </TableHead>
              <TableHead className="text-right">
                <p className="font-khand text-white tracking-[0.14rem]">
                  Amount
                </p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.length > 0 &&
              cart.map((item) => {
                const price = item.quantity * item.price;
                return (
                  <TableRow key={item.id} className="text-lg font-hind">
                    <TableCell className="font-medium text-left">
                      {item.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="bg-[#C8F169] w-10 h-10 max-sm:w-7 max-sm:h-7 flex items-center justify-center rounded-full font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 p-2.5"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <p className=" font-hind text-[#C8F169] tracking-[0.06rem] font-bold ring-0 border-0 p-2.5">
                          {item.quantity}
                        </p>
                        <button
                          className=" bg-[#C8F169] w-10 h-10 max-sm:w-7 max-sm:h-7 flex items-center justify-center rounded-full font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 p-2.5"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">₹ {price}</TableCell>
                  </TableRow>
                );
              })}
            <TableRow className="bg-[#C8F169] hover:bg-[#C8F169] text-lg text-black font-hind">
              <TableCell className="font-bold text-left">Total</TableCell>
              <TableCell></TableCell>
              <TableCell className="font-bold text-right">
                ₹ {totalCost}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}

      {cart.length > 0 && (
        <div className="w-full m-auto flex items-center justify-center mt-10">
          <button
            onClick={handleOrder}
            className="bg-[#C8F169] hover:bg-[#a1c254] rounded-lg text-black font-khand tracking-[0.15rem] text-xl py-2 px-5"
          >
            Order
          </button>
        </div>
      )}
    </section>
  );
};

export default CartItems;
