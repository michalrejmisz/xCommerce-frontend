import { useState, useRef, useEffect } from "react";
import { IconSearch } from "@tabler/icons-react";
import clsx from "clsx";

import useClickOutside from "@/common/hooks/useClickOutside";
import SearchBarInput from "../SearchBarInput";
import CategoriesDropdown from "./CategoriesDropdown";
import { SearchViewEnum as SearchView } from "../SearchViewEnum";
import Icon from "../../UI/icons/Icon";

interface HeaderSearchBarProps {
  categories: string[];
  activeCategory: string | null;
  isSearchSuggestions?: boolean;
  searchText: string;
  searchView: SearchView;
  inputBarRef: React.Ref<HTMLInputElement>;
  isInputFocus: boolean;
  toggleView: (view: SearchView) => void;
  handleSearchText: (text: string) => void;
  handleFocusInputBar: () => void;
  handleBlurInputBar: () => void;
  handleActiveCategory: (name: string | null) => void;
}

const HeaderSearchBar: React.FC<HeaderSearchBarProps> = ({
  categories,
  activeCategory,
  searchText,
  searchView,
  inputBarRef,
  isInputFocus,
  toggleView,
  handleSearchText,
  handleFocusInputBar,
  handleBlurInputBar,
  handleActiveCategory,
}) => {
  const handleSearchBarView = (view?: SearchView) => {
    if (view) return toggleView(view);
    toggleView(SearchView.Default);
    // const newView =
    //   searchView === SearchView.CategoriesDropdown
    //     ? SearchView.Default
    //     : SearchView.CategoriesDropdown;

    // toggleView(newView);
  };

  return (
    <div
      className={clsx(
        "flex items-center xl:pr-[8px] xl:pl-[32px] lg:h-full lg:pr-[13px] lg:pl-[24px] w-full"
      )}
    >
      <div
        className={clsx(
          "flex flex-row justify-between items-center rounded-full border border-gray-200 bg-white w-full h-[30px] xl:h-[40px] transition-shadow duration-300 leading-[10px]",
          { "xl:shadow-hover-box": isInputFocus }
        )}
      >
        <IconSearch className="xl:hidden w-6 h-6 ml-[15px]  stroke-1 stroke-gray-scale-400" />
        <SearchBarInput
          ref={inputBarRef}
          searchText={searchText}
          handleSearchText={handleSearchText}
          onFocus={handleFocusInputBar}
          onBlur={handleBlurInputBar}
        />
        <div
          role="separator"
          className="hidden xl:block w-px h-6 bg-gray-200 mx-1"
        />

        <CategoriesDropdown
          searchView={searchView}
          activeCategory={activeCategory}
          categories={categories}
          handleActiveCategory={handleActiveCategory}
          handleSearchBarView={handleSearchBarView}
        />
        <div className="hidden xl:flex justify-center items-center bg-gray-450 rounded-full border-none hover:bg-black min-w-[64px] max-w-[64px] h-full cursor-pointer">
          <IconSearch className="w-6 h-6 stroke-white" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
