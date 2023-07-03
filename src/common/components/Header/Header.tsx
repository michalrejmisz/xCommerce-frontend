import CategoryNav from "@/common/components/CategoryNav/CategoryNav";
import {Button} from "@mantine/core"
import SearchBar from "@/common/components/SearchBar/SearchBar";
import Logo from "@/common/components/UI/Logo";
import HeaderActionButtons from "@/common/components/HeaderActionButtons/HeaderActionButtons";
import Icon from "@/common/components/UI/icons/Icon"
import React, {useState, useEffect, useLayoutEffect} from "react";
import clsx from "clsx";
import Hamburger from "@/common/components/Header/Hamburger";
import { useViewportSize } from '@mantine/hooks';


export default function Header(){

    const [showHeader, setShowHeader] = useState(true);
    const [showIconTitles, setShowIconTitles] = useState(true);
    const [isOnTop, setIsOnTop] = useState(true);
    const [windowWidth, setWindowWidth] = useState<number|null>(null);

    const { height, width } = useViewportSize();

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        handleWidth();
    }, [])



    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsOnTop(scrollTop === 0)
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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <header
            className={clsx({
                "sticky top-0 mb-[15px] z-[1000] bg-white " : true,
                "shadow-md" : !isOnTop,
                // 'flex' : showHeader,
                // 'hidden' : !showHeader,
            })}
        >
            <div
                className={clsx({
                        "container relative flex flex-row items-center" : true,
                        "transition-[height] duration-300" : true,
                        "h-[72px]" : isOnTop,
                        "h-[56px]" : !isOnTop,
                    })}
            >
                {/*{}*/}
                {windowWidth >= 1080 && (
                    <div
                        className={clsx({
                            "group/hamburger" : true,
                            "h-[56px] cursor-pointer absolute top-0 left-0 items-center hover:shadow-specific hover:outline-2 hover:rounded-lg hidden xl:block" : true,
                            "transition-opacity transition-transform duration-500" : true,
                            "scale-100 opacity-100" : !isOnTop,
                            "scale-0 opacity-0" : isOnTop,
                        })}
                    >
                        <div className="flex items-center h-full min-w-[88px]">
                            <div className="group-hover/hamburger:bg-white bg-gray-50 rounded-lg py-[4px] px-[12px]">
                                <Icon name="HamburgerMenuIcon" size={32}/>
                            </div>
                        </div>
                    </div>
                )}
                {windowWidth < 1080 && <Hamburger /> }
                <Logo
                    className={clsx({
                        "xl:pl-[16px] h-[40px]" : true,
                        "transition-all duration-300": true,
                        "translate-y-0 transform-logo-unwrap" : isOnTop,
                        "translate-x-[14px] scale-[80%] transform-logo-wrap" : !isOnTop,
                    })}
                />

                <SearchBar/>
                <HeaderActionButtons showTitles={isOnTop} />
            </div>
            {windowWidth >= 1080 && <CategoryNav isShow={isOnTop}/>}
            {/*<CategoryNav isShow={isOnTop}/>*/}
        </header>
    )
}

