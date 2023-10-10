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
                "flex w-[20%] grow-[2] items-center lg:ml-[24px] lg:h-full lg:pr-[13px] xl:ml-[32px] xl:pr-[8px]",
                // "flex w-full items-center lg:ml-[24px] lg:h-full lg:pr-[13px] xl:ml-[32px] xl:max-w-[480px] xl:pr-[8px]",
            )}
        >
            <div
                className={clsx(
                    "flex h-[30px] w-full flex-row  items-center justify-between rounded-full border border-gray-200 leading-[10px] transition-shadow duration-300 xl:h-[40px] xl:max-w-[480px] xxl:max-w-[775px]",
                    { "xl:shadow-hover-box": isInputFocus },
                )}
            >
                <IconSearch className="stroke-gray-scale-400 ml-[15px] h-6 w-6  stroke-1 xl:hidden" />
                <SearchBarInput
                    ref={inputBarRef}
                    searchText={searchText}
                    handleSearchText={handleSearchText}
                    onFocus={handleFocusInputBar}
                    onBlur={handleBlurInputBar}
                />
                <div
                    role="separator"
                    className="mx-1 hidden h-6 w-px bg-gray-200 xl:block"
                />

                <CategoriesDropdown
                    searchView={searchView}
                    activeCategory={activeCategory}
                    categories={categories}
                    handleActiveCategory={handleActiveCategory}
                    handleSearchBarView={handleSearchBarView}
                />
                <div className="hidden h-full min-w-[64px] max-w-[64px] cursor-pointer items-center justify-center rounded-full border-none bg-gray-450 hover:bg-black xl:flex">
                    <IconSearch className="h-6 w-6 stroke-white" />
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBar;
