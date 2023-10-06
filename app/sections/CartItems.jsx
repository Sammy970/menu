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

import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector((state) => state.items);

  return (
    <section className="max-container text-white">
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
              <p className="font-khand text-white tracking-[0.14rem]">Amount</p>
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
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      {/* {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div key={item.id} className="flex flex-1 items-center gap-5">
              <p>Name: {item.name}</p> |<p>Price: {item.price}</p> |
              <p>Quantity: {item.quantity}</p> |
            </div>
          );
        })} */}
    </section>
  );
};

export default CartItems;
