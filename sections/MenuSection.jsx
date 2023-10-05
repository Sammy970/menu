"use client";

import MenuCard, { MenuBackCard } from "@/components/MenuCard";
import { itemMenu } from "@/constants";
import React, { useState } from "react";

const MenuSection = () => {
  const [categoryStack, setCategoryStack] = useState([]);
  const currentCategory = categoryStack[categoryStack.length - 1];

  const handleCategoryClick = (category) => {
    setCategoryStack([...categoryStack, category]);
  };

  const handleBackClick = () => {
    setCategoryStack(categoryStack.slice(0, -1));
  };

  let selectedData = itemMenu;

  for (const category of categoryStack) {
    selectedData = selectedData.find(
      (item) => Object.keys(item)[0] === category
    )[category];
  }

  return (
    <>
      <div className="max-container">
        <h1 className="text-white font-khand text-4xl">Explore our menu</h1>
        <p className="text-gray-300">Dining out just got better</p>

        <div className="grid grid-cols-4 gap-3 mb-10 mt-6">
          {categoryStack.length > 0 && (
            <MenuBackCard
              key="back"
              category="Back"
              setCategorySelected={handleBackClick}
            />
          )}
        </div>

        <div className="grid grid-cols-1 gap-3">
          {selectedData.map((item) => {
            console.log(item);

            if (!item.name) {
              return (
                <MenuCard
                  key={Object.keys(item)[0]}
                  category={Object.keys(item)[0]}
                  setCategorySelected={handleCategoryClick}
                />
              );
            }
          })}

          {currentCategory && (
            <div className="grid grid-cols-4 gap-3 mt-4">
              {selectedData.map((item) => {
                if (currentCategory in item && item.name) {
                  return item[currentCategory].map((subItem) => (
                    <MenuCard
                      key={Object.keys(subItem)[0]}
                      category={Object.keys(subItem)[0]}
                      setCategorySelected={handleCategoryClick}
                    />
                  ));
                } else if (item.name) {
                  return (
                    <React.Fragment key={item.name}>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{item.desc}</p>
                    </React.Fragment>
                  );
                }
                // return null;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuSection;
