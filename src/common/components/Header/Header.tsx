import React, { useState, useEffect, useLayoutEffect } from "react";
import clsx from "clsx";
import { Button } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import CategoryNav from "@/common/components/CategoryNav/CategoryNav";
import SearchBar from "@/common/components/SearchBar/SearchBar";
import Logo from "@/common/components/UI/Logo";
import HeaderActionButtons from "@/common/components/HeaderActionButtons/HeaderActionButtons";
import HamburgerMenu from "@/common/components/Header/HamburgerMenu/HamburgerMenu";
import ExpendableSearchBar from "../SearchBar/ExpandableSearchBar/ExpandableSearchBar";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [showIconTitles, setShowIconTitles] = useState(true);
    const [isOnTop, setIsOnTop] = useState(true);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    const { height, width } = useViewportSize();

    useLayoutEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        handleWidth();
    }, []);

    const [showBackdrop, setShowBackdrop] = useState(false);

    const handleMouseEnter = () => {
        setShowBackdrop(true);
    };

    const handleMouseLeave = () => {
        setShowBackdrop(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setIsOnTop(scrollTop === 0);
            // Show/hide header on scroll based on viewport width
            if (window.innerWidth < 900) {
                setShowHeader(scrollTop < lastScrollTop || scrollTop == 0);
            } else if (window.innerWidth >= 900 && window.innerWidth < 1080) {
                setShowHeader(false);
            } else {
                setShowHeader(scrollTop <= 0 || scrollTop < lastScrollTop);
                setShowIconTitles(scrollTop <= 0);
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        let lastScrollTop = 0;
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx({
                "relative top-0 z-[1000] mb-[15px] w-full bg-white lg:sticky":
                    true,
                "shadow-md": true,
                // "shadow-md": !isOnTop,
                // 'flex' : showHeader,
                // 'hidden' : !showHeader,
            })}
        >
            <div
                className={clsx(
                    "relative flex flex-row items-center transition-[height] duration-300 xl:container max-lg:ml-auto max-lg:h-full max-lg:flex-wrap max-lg:justify-between md:max-lg:w-[calc(100%-24px)] lg:h-[72px]",
                    {
                        "h-[72px]": isOnTop,
                        "xl:h-[56px]": !isOnTop,
                    },
                )}
            >
                {width > 900 && (
                    <HamburgerMenu isOnTop={isOnTop} windowWidth={width} />
                )}
                {/* {windowWidth < 1080 && <SideCategoryNav /> } */}

                {/* <Logo
                    className={clsx(
                        "h-[40px] shrink-0 transition-all duration-300 max-xl:hidden xl:pl-[16px]",
                        {
                            "transform-logo-unwrap translate-y-0":
                                isOnTop && width >= 1080,
                            "scale-80 transform-logo-wrap h-[32px] translate-x-[14px]":
                                !isOnTop || width < 1080,
                        },
                    )}
                /> */}

                <div
                    className={clsx(
                        "pointer  max-w-none shrink-0 transition-all duration-300 max-xl:hidden xl:pl-[16px]",
                        {
                            "transform-logo-unwrap h-[40px] translate-y-0":
                                isOnTop && width >= 1080,
                            "scale-80 transform-logo-wrap h-[32px] translate-x-[14px]":
                                !isOnTop || width < 1080,
                        },
                    )}
                >
                    <img src="logo.svg" className="h-full w-auto" alt="Logo" />
                </div>

                <div className="h-[28px] md:h-[32px] lg:pl-[8px] xl:hidden">
                    <img
                        src="small_logo.svg"
                        className="h-auto max-h-full w-auto max-w-full"
                        alt="Logo"
                    />
                </div>

                {width < 900 ? (
                    <div className="order-3 flex basis-full flex-row">
                        <HamburgerMenu isOnTop={isOnTop} windowWidth={width} />
                        <SearchBar />
                    </div>
                ) : (
                    <SearchBar />
                )}

                {/* <div className="flex w-full"> */}
                {/* <SearchBar /> */}
                {/* </div> */}
                <HeaderActionButtons showTitles={isOnTop} />
            </div>
            {/* {windowWidth >= 1080 && <CategoryNav isShow={isOnTop} />} */}
            {/*<CategoryNav isShow={isOnTop}/>*/}
        </header>
    );
}
