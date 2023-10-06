"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector((state) => state.items);

  return (
    <section className="max-container text-white">
      <h2 className="text-white font-khand text-4xl tracking-[0.1rem] mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="w-[50%] max-sm:w-full  m-auto flex flex-row max-sm:flex-row-reverse justify-evenly items-center font-hind">
          <div className="w-full">
            <Image
              src="/Assets/emptyCart.svg"
              alt="Empty Cart"
              width={300}
              height={300}
            />
          </div>
          <p className="w-full text-white text-2xl text-center">
            Your cart is <br />
            <span className="text-[#C8F169] capitalize font-bold ">empty</span>
          </p>
        </div>
      ) : (
        <Table className="w-[70%] max-sm:w-full m-auto">
          <TableHeader>
            <TableRow className="text-xl max-sm:text-[19px]">
              <TableHead className="w-[35%] max-sm:w-auto">
                <p className="font-khand text-white tracking-[0.14rem]">
                  Name of Item
                </p>
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
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </section>
  );
};

export default CartItems;
