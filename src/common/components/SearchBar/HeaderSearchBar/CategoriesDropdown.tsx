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
    searchView === SearchViewEnum.CategoriesDropdown,
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
      className="relative hidden h-[34px] cursor-pointer hover:rounded-full hover:bg-gray-50 xl:flex"
    >
      <div
        onClick={() => handleSearchBarView(SearchView.CategoriesDropdown)}
        // onClick={toggleCategoriesDropdown}
        className="flex items-center justify-center whitespace-nowrap pb-[8px] pl-[12px] pr-[9px] pt-[8px]"
      >
        <span>{activeCategory === null ? "Wszędzie" : activeCategory}</span>
        <IconTriangleInvertedFilled className="ml-1 h-2 w-2" />
      </div>
      {isDropdownShow && (
        <div className="shadow-hover-box absolute right-0 top-full z-[1100] mt-[4px] rounded-b-md bg-white">
          <ul className="my-[5px] whitespace-nowrap">
            <li
              key="all"
              onClick={() => handleActiveCategory(null)}
              className={clsx(
                "flex h-[44px] flex-row items-center bg-gray-50 pr-[16px]",
                {
                  "pl-[32px]": activeCategory != null,
                  "pl-[8px] font-bold": activeCategory === null,
                },
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
                    "flex h-[44px] flex-row items-center pr-[16px] hover:bg-gray-50",
                    {
                      "pl-[32px]": !isActive,
                      "pl-[8px] font-bold": isActive,
                    },
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
