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
                : SearchViewEnum.CategoriesDropdown,
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
                "fixed left-0 top-0 z-[1100] flex w-full flex-col bg-white",
                {
                    "max-xl:h-screen":
                        searchView === SearchViewEnum.SearchSuggestions,
                },
            )}
        >
            <div className="flex h-[56px] w-full flex-row items-center justify-between px-[10px] ">
                <div className="flex w-full items-start items-center">
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
                className="shadow-custom flex h-[56px] w-full flex-row items-center justify-between px-[16px]"
            >
                <div className="flex flex-row items-center">
                    <div className="mr-[8px] text-gray-250">Szukaj w:</div>
                    <div
                        onClick={handleResetActiveCategory}
                        className={clsx({
                            "solid flex flex-row items-center rounded-full border px-[12px] py-[5px] text-[13px] leading-[16px]":
                                true,
                            "hover:border-black": activeCategory != null,
                        })}
                    >
                        {activeCategory === null
                            ? "Wszystkie kategorie"
                            : activeCategory}
                        {activeCategory != null && (
                            <IconX size={15} className="ml-[4px]" />
                        )}
                    </div>
                </div>
                {searchView === SearchViewEnum.CategoriesDropdown ? (
                    <IconChevronUp size={35} stroke={1.2} />
                ) : (
                    <IconChevronDown size={35} stroke={1.2} />
                )}
            </div>
            {searchView === SearchViewEnum.SearchSuggestions && (
                <SearchSuggestions />
            )}
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
