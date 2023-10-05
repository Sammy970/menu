"use client";

import { Card, CardContent } from "./ui/card";

export const MenuBackCard = ({ category, setCategorySelected }) => {
  return (
    <Card
      id={category}
      onClick={() => setCategorySelected(category)}
      className="cursor-pointer bg-[#043F2E] text-white"
    >
      <CardContent className="p-3">
        <p className="flex flex-1 justify-center items-center w-full h-full">
          {category}
        </p>
      </CardContent>
    </Card>
  );
};

const MenuCard = ({ category, setCategorySelected }) => {
  const cardClickHanlder = (e) => {
    // console.log(e.target.textContent);
    setCategorySelected(e.target.textContent);
  };

  return (
    <Card
      id={category}
      onClick={cardClickHanlder}
      className="cursor-pointer rounded-lg ring-0 border-0 shadow-md bg-[#EEF2E3] hover:bg-[#C8F169]"
    >
      <CardContent className="p-3">
        <p className="flex flex-1 justify-center items-center w-full h-full font-hind leading-normal text-[19px] tracking-[0.15rem] font-semibold">
          {category}
        </p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
