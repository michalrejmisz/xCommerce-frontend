import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import {
  IconChevronLeft,
  IconChevronDown,
  IconChevronUp,
  IconCircleXFilled,
  IconX,
} from "@tabler/icons-react";

import SearchBarInput from "../SearchBarInput";
import SearchSuggestions from "../SearchSuggestions";
import { SearchViewEnum } from "../SearchViewEnum";
import CategoriesDropdown from "./CategoriesDropdown";
import useClickOutside from "@/common/hooks/useClickOutside";

interface ExpandableSearchBarProps {
  categories: string[];
  activeCategory: string | null;
  searchView: SearchViewEnum;
  searchText: string;
  inputBarRef: React.Ref<HTMLInputElement>;
  setSearchView: (view: SearchViewEnum) => void;
  handleActiveCategory: (name: string | null) => void;
  handleSearchText: (text: string) => void;
  handleSearchBarView: (view?: SearchViewEnum) => void;
  setIsShow: (isShow: boolean) => void;
  handleBlurInputBar: () => void;
}

const ExpandableSearchBar: React.FC<ExpandableSearchBarProps> = ({
  categories,
  setSearchView,
  handleActiveCategory,
  handleSearchBarView,
  inputBarRef,
  activeCategory,
  searchView,
  handleSearchText,
  setIsShow,
  searchText,
  handleBlurInputBar,
}) => {
  const expendableSearchBarRef = useRef<HTMLDivElement>(null);

  const handleCloseExpendableSearchBar = () => {
    setIsShow(false);
    handleBlurInputBar();
  };

  const handleClearSearchText = () => {
    handleSearchText("");
  };

  const handleResetActiveCategory = () => {
    if (activeCategory != null) {
      handleActiveCategory(null);
    }
  };

  const handleToggleDropdownCategory = () => {
    setSearchView(
      searchView === SearchViewEnum.CategoriesDropdown
        ? SearchViewEnum.Default
        : SearchViewEnum.CategoriesDropdown
    );
  };
  // const handleDropdownView = () => {
  //   console.log("Handle dropdodwn debug");
  //   const newView =
  //     searchView === SearchView.CategoriesDropdown
  //       ? SearchView.Default
  //       : SearchView.CategoriesDropdown;
  //   console.log("debug", newView);
  //   toggleView(newView);
  // };

  // const handleDropdownView = (view?: SearchView) => {
  //   if (view) return toggleView(view);
  //   toggleView(SearchView.Default);
  //   // const newView =
  //   //   searchView === SearchView.CategoriesDropdown
  //   //     ? SearchView.Default
  //   //     : SearchView.CategoriesDropdown;

  //   // toggleView(newView);
  // };

  // const handleToggleDropdownCategory = () => {
  //   setSearchView((prevState: SearchViewEnum) =>
  //     prevState === SearchViewEnum.CategoriesDropdown
  //       ? SearchViewEnum.Default
  //       : SearchViewEnum.CategoriesDropdown
  //   );
  // };

  useClickOutside({
    ref: expendableSearchBarRef,
    callback: handleCloseExpendableSearchBar,
  });

  return (
    <div
      ref={expendableSearchBarRef}
      className={clsx(
        "fixed top-0 left-0 flex flex-col w-full z-[1100] bg-white",
        { "max-xl:h-screen": searchView === SearchViewEnum.SearchSuggestions }
      )}
    >
      <div className="flex flex-row h-[56px] w-full items-center justify-between px-[10px] ">
        <div className="flex items-start items-center w-full">
          <IconChevronLeft
            size={35}
            stroke={1.2}
            onClick={handleCloseExpendableSearchBar}
            className="cursor-pointer"
          />
          <SearchBarInput
            ref={inputBarRef}
            handleSearchText={handleSearchText}
            searchText={searchText}
          />
        </div>
        {searchText && (
          <IconCircleXFilled
            size={20}
            className="cursor-pointer"
            color="red-200"
            fill="red"
            onClick={handleClearSearchText}
          />
        )}
      </div>
      <div
        onClick={handleToggleDropdownCategory}
        className="flex flex-row h-[56px] w-full items-center justify-between shadow-custom px-[16px]"
      >
        <div className="flex flex-row items-center">
          <div className="text-gray-250 mr-[8px]">Szukaj w:</div>
          <div
            onClick={handleResetActiveCategory}
            className={clsx({
              "flex flex-row items-center border solid px-[12px] py-[5px] rounded-full text-[13px] leading-[16px]": true,
              "hover:border-black": activeCategory != null,
            })}
          >
            {activeCategory === null ? "Wszystkie kategorie" : activeCategory}
            {activeCategory != null && <IconX size={15} className="ml-[4px]" />}
          </div>
        </div>
        {searchView === SearchViewEnum.CategoriesDropdown ? (
          <IconChevronUp size={35} stroke={1.2} />
        ) : (
          <IconChevronDown size={35} stroke={1.2} />
        )}
      </div>
      {searchView === SearchViewEnum.SearchSuggestions && <SearchSuggestions />}
      {searchView === SearchViewEnum.CategoriesDropdown && (
        <CategoriesDropdown
          categories={categories}
          activeCategory={activeCategory}
          handleActiveCategory={handleActiveCategory}
        />
      )}
    </div>
  );
};

export default ExpandableSearchBar;
