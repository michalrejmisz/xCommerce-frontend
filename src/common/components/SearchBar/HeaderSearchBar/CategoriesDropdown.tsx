import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { IconCheck, IconTriangleInvertedFilled } from "@tabler/icons-react";

import {
  SearchViewEnum as SearchView,
  SearchViewEnum,
} from "../SearchViewEnum";
import useClickOutside from "@/common/hooks/useClickOutside";

interface CategoriesDropdownProps {
  categories: string[];
  // isDropdownShow: boolean;
  activeCategory: string | null;
  searchView: SearchView;
  handleSearchBarView: (view?: SearchView) => void;
  handleActiveCategory: (name: string | null) => void;
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  categories,
  searchView,
  activeCategory,
  handleSearchBarView,
  handleActiveCategory,
}) => {
  const categoriesDropDownRef = useRef<HTMLDivElement>(null);
  const [isDropdownShow, setIsDropdownShow] = useState(
    searchView === SearchViewEnum.CategoriesDropdown
  );

  useEffect(() => {
    setIsDropdownShow(searchView === SearchViewEnum.CategoriesDropdown);
  }, [searchView]);

  const handleCloseDropdown = () => {
    if (isDropdownShow) {
      handleSearchBarView(SearchView.Default);
    }
  };

  // useClickOutside({
  //   ref: categoriesDropDownRef,
  //   callback: handleCloseDropdown,
  // });

  return (
    <div
      ref={categoriesDropDownRef}
      className="hidden xl:flex relative h-[34px] hover:bg-gray-50 hover:rounded-full cursor-pointer"
    >
      <div
        onClick={() => handleSearchBarView(SearchView.CategoriesDropdown)}
        // onClick={toggleCategoriesDropdown}
        className="flex items-center justify-center pt-[8px] pr-[9px] pb-[8px] pl-[12px] whitespace-nowrap"
      >
        <span>{activeCategory === null ? "Wszędzie" : activeCategory}</span>
        <IconTriangleInvertedFilled className="ml-1 w-2 h-2" />
      </div>
      {isDropdownShow && (
        <div className="absolute top-full right-0 bg-white z-[1100] mt-[4px] shadow-hover-box rounded-b-md">
          <ul className="whitespace-nowrap my-[5px]">
            <li
              key="all"
              onClick={() => handleActiveCategory(null)}
              className={clsx(
                "bg-gray-50 h-[44px] flex flex-row items-center pr-[16px]",
                {
                  "pl-[32px]": activeCategory != null,
                  "font-bold pl-[8px]": activeCategory === null,
                }
              )}
            >
              {activeCategory === null && (
                <IconCheck size={15} stroke={2} className="mr-[8px]" />
              )}
              Wszędzie
            </li>
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <li
                  key={index}
                  onClick={() => handleActiveCategory(category)}
                  className={clsx(
                    "hover:bg-gray-50 flex flex-row items-center h-[44px] pr-[16px]",
                    {
                      "pl-[32px]": !isActive,
                      "font-bold pl-[8px]": isActive,
                    }
                  )}
                >
                  {isActive && (
                    <IconCheck size={15} stroke={2} className="mr-[8px]" />
                  )}
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
