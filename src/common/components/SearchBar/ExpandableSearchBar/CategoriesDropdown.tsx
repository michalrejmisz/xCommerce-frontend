import React, { useState } from "react";
import clsx from "clsx";
import { IconCheck } from "@tabler/icons-react";

interface CategoriesDropdownProps {
  activeCategory: string | null;
  handleActiveCategory: (name: string | null) => void;
  categories: string[];
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  activeCategory,
  handleActiveCategory,
  categories,
}) => {
  return (
    <div className="shadow-custom rounded-b-lg pb-[15px] text-[14px] leading-[20px]">
      <div
        onClick={() => handleActiveCategory(null)}
        className="flex flex-row items-center justify-between h-[48px] pl-[16px] pr-[16px] bg-gray-50"
      >
        <span className={clsx({ "font-bold": activeCategory == null })}>
          Wszystkie kategorie
        </span>
        {activeCategory === null && <IconCheck size={15} stroke={2} />}
      </div>
      {categories.map((name, index) => {
        const isActive = activeCategory === name;
        return (
          <div
            key={index}
            onClick={() => handleActiveCategory(name)}
            className="flex flex-row items-center justify-between h-[48px] pl-[32px] pr-[16px] hover:bg-gray-50"
          >
            <div className="flex flex-row">
              <span className={clsx({ "font-bold": isActive })}>{name}</span>
            </div>
            {isActive && <IconCheck size={15} stroke={2} />}
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesDropdown;
