import React, { useState, useEffect, useRef } from "react";
import { useViewportSize } from "@mantine/hooks";

import ExpandableSearchBar from "./ExpandableSearchBar/ExpandableSearchBar";
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";
import { SearchViewEnum } from "./SearchViewEnum";
import useClickOutside from "@/common/hooks/useClickOutside";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const { width } = useViewportSize();
  const searchBarRef = useRef(null);
  const inputBarRef = useRef<HTMLInputElement | null>(null);
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [isExpandableSearchBar, setIsExpandadbleSearchBar] = useState<boolean>(
    false
  );
  const [searchView, setSearchView] = useState<SearchViewEnum>(
    SearchViewEnum.Default
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const CATEGORIES = [
    "Laptopy i komputery",
    "Smartfony i smartwtche",
    "Gaming i Streaming",
    "Podzespoły komputerowe",
    "Urządzenia peryferyjne",
    "TV i audio",
    "Smarthome i Lifestyle",
    "Akcesoria",
  ];

  const handleFocusInputBar = () => {
    if (inputBarRef.current) {
      inputBarRef.current.focus();
    }
    setIsInputFocus(true);
  };

  const handleBlurInputBar = () => {
    if (inputBarRef.current) {
      inputBarRef.current.blur();
    }
    setIsInputFocus(false);
  };

  const toggleView = (view: SearchViewEnum) => {
    setSearchView((currentView) =>
      currentView === view ? SearchViewEnum.Default : view
    );
    // setSearchView(view);
  };

  const handleActiveCategory = (name: string | null) => {
    setActiveCategory(name);
    handleFocusInputBar();
    toggleView(SearchViewEnum.Default);
    console.log("Active catgory");
  };

  const handleInputFocus = () => {
    setIsInputFocus(true);
    // toggleView(SearchView.SearchSuggestions);
  };

  const handleInputBlur = () => {
    setIsInputFocus(false);
    // toggleView(SearchView.Default);
  };
  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  const handleExpandableSearchBar = (isShow: boolean) => {
    setIsExpandadbleSearchBar(isShow);
  };

  // const handleSearchBarView = (view?: SearchView) => {
  //   if (view) return toggleView(view);
  //   toggleView(SearchView.Default);
  //   // const newView =
  //   //   searchView === SearchView.CategoriesDropdown
  //   //     ? SearchView.Default
  //   //     : SearchView.CategoriesDropdown;

  //   // toggleView(newView);
  // };

  // const handleDropdownView = () => {
  //   const newView =
  //     searchView === SearchView.CategoriesDropdown
  //       ? SearchView.Default
  //       : SearchView.CategoriesDropdown;
  //   toggleView(newView);
  //   // focusInputBar();
  // };

  useEffect(() => {
    if (width >= 1080 && isExpandableSearchBar) {
      setIsExpandadbleSearchBar(false);
    }

    if (width < 1080 && !isExpandableSearchBar) {
      if (isInputFocus) {
        setIsExpandadbleSearchBar(true);
      }
    }
  }, [width, searchText, isInputFocus]);

  const handleSearchBarView = (view?: SearchViewEnum) => {
    // if (view) return toggleView(view);
    // toggleView(SearchView.Default);
    const newView =
      searchView === SearchViewEnum.CategoriesDropdown
        ? SearchViewEnum.Default
        : SearchViewEnum.CategoriesDropdown;

    toggleView(newView);
  };

  // useClickOutside({
  //   ref: searchBarRef,
  //   callback: () => setSearchView(SearchViewEnum.Default),
  // });

  return (
    <div ref={searchBarRef}>
      {isExpandableSearchBar && (
        <ExpandableSearchBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          searchView={searchView}
          searchText={searchText}
          inputBarRef={inputBarRef}
          handleActiveCategory={handleActiveCategory}
          setSearchView={setSearchView}
          handleSearchText={handleSearchText}
          setIsShow={handleExpandableSearchBar}
          handleSearchBarView={handleSearchBarView}
          handleBlurInputBar={handleBlurInputBar}
        />
      )}
      <HeaderSearchBar
        categories={CATEGORIES}
        activeCategory={activeCategory}
        searchText={searchText}
        searchView={searchView}
        inputBarRef={inputBarRef}
        isInputFocus={isInputFocus}
        toggleView={toggleView}
        handleActiveCategory={handleActiveCategory}
        handleSearchText={handleSearchText}
        handleBlurInputBar={handleBlurInputBar}
        handleFocusInputBar={handleFocusInputBar}
      />
    </div>
  );
};

export default SearchBar;
