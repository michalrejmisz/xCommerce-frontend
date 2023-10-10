import clsx from "clsx";
import Icon from "@/common/components/UI/icons/Icon";
import HamburgerMenuContent from "./HamburgerMenuContent";
import React, { useState } from "react";

const DUMB_ARRAY = [
    {
        name: "Smartphones and Smartwatches",
        subcategories: [
            {
                name: "Smartphones",
                subcategories: [
                    {
                        name: "Apple",
                        subcategories: [
                            { name: "iPhone 13", subcategories: [] },
                            { name: "iPhone 13 Pro", subcategories: [] },
                            { name: "iPhone SE", subcategories: [] },
                        ],
                    },
                    {
                        name: "Samsung",
                        subcategories: [
                            { name: "Galaxy S21", subcategories: [] },
                            { name: "Galaxy Note 20", subcategories: [] },
                            { name: "Galaxy A52", subcategories: [] },
                        ],
                    },
                    {
                        name: "Google",
                        subcategories: [
                            { name: "Pixel 6", subcategories: [] },
                            { name: "Pixel 5a", subcategories: [] },
                        ],
                    },
                ],
            },
            {
                name: "Smartwatches",
                subcategories: [
                    {
                        name: "Apple Watch",
                        subcategories: [
                            { name: "Series 7", subcategories: [] },
                            { name: "SE", subcategories: [] },
                        ],
                    },
                    {
                        name: "Samsung Galaxy Watch",
                        subcategories: [
                            { name: "Watch 4", subcategories: [] },
                            { name: "Watch Active 2", subcategories: [] },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Laptops and Desktops",
        subcategories: [
            {
                name: "Laptops",
                subcategories: [
                    {
                        name: "Apple",
                        subcategories: [
                            { name: "MacBook Pro", subcategories: [] },
                            { name: "MacBook Air", subcategories: [] },
                        ],
                    },
                    {
                        name: "Dell",
                        subcategories: [
                            { name: "XPS 15", subcategories: [] },
                            { name: "Inspiron 14", subcategories: [] },
                        ],
                    },
                    {
                        name: "HP",
                        subcategories: [
                            { name: "Spectre x360", subcategories: [] },
                            { name: "ENVY 13", subcategories: [] },
                        ],
                    },
                ],
            },
            {
                name: "Desktops",
                subcategories: [
                    {
                        name: "Custom Built",
                        subcategories: [],
                    },
                    {
                        name: "Dell",
                        subcategories: [
                            { name: "XPS Tower", subcategories: [] },
                            { name: "Inspiron Desktop", subcategories: [] },
                        ],
                    },
                    {
                        name: "HP",
                        subcategories: [
                            { name: "Pavilion", subcategories: [] },
                        ],
                    },
                ],
            },
        ],
    },
];

interface HamburgerProps {
    windowWidth: number;
    isOnTop: boolean;
    className?: string;
}

const HamburgerMenu: React.FC<HamburgerProps> = ({
    windowWidth,
    isOnTop,
    className,
}) => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    const handleMouseEnter = () => {
        setShowBackdrop(true);
    };

    const handleMouseLeave = () => {
        setShowBackdrop(true);
    };

    return (
        <>
            {windowWidth >= 1080 && (
                <>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={clsx(
                            "group/hamburger",
                            "hover:shadow-specific absolute left-0 top-0 hidden h-[56px] cursor-pointer items-center hover:rounded-lg hover:outline-2 xl:block",
                            "transition-opacity transition-transform duration-500",
                            className,
                            {
                                "scale-100 opacity-100": !isOnTop,
                                "scale-0 opacity-0": isOnTop,
                            },
                        )}
                    >
                        <div className="flex h-full min-w-[88px] items-center">
                            <div className="rounded-lg bg-gray-50 px-[12px] py-[4px] group-hover/hamburger:bg-white">
                                <Icon name="HamburgerMenuIcon" size={32} />
                            </div>
                        </div>
                    </div>
                    {/* Hover backdrop*/}
                    <div
                        className={clsx({
                            "fixed left-0 top-[56px] z-[400] h-[0px] w-full overflow-y-auto overflow-x-hidden bg-black/70 outline-none":
                                true,
                            "opacity-0 transition-opacity duration-500 ease-in-out":
                                true,
                            "h-full opacity-100": showBackdrop,
                        })}
                    />

                    {showBackdrop && (
                        <HamburgerMenuContent
                            handleMenuMouseEnter={handleMouseEnter}
                            handleMenuMouseLeave={handleMouseLeave}
                        />
                    )}
                </>
            )}

            {windowWidth < 1080 && (
                <div
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className={clsx(
                        "z-[1000] flex cursor-pointer flex-col items-center justify-center xl:hidden",
                        className,
                    )}
                >
                    <div className="flex h-[24px] w-[24px] items-center justify-center px-[32px] md:h-[32px] md:w-[32px] md:px-[44px]">
                        <span className="inline-flex h-[24px] w-[24px] items-center justify-center md:h-[32px] md:w-[32px]">
                            <Icon
                                name="HamburgerMenuIcon"
                                size={32}
                                className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                            />
                        </span>
                    </div>
                    <span className="text-[10px] leading-[12px] md:text-[11px]">
                        Menu
                    </span>
                </div>
            )}

            {/* Hover backdrop*/}
            {/*<div*/}
            {/*    className={clsx({*/}
            {/*        "fixed top-[72px] left-0 h-[0px] w-full overflow-y-auto overflow-x-hidden outline-none bg-black/70 z-[400]" :  true,*/}
            {/*        "transition-opacity ease-in-out duration-500 opacity-0" : true,*/}
            {/*        "opacity-100 h-full": showBackdrop*/}
            {/*    })}*/}
            {/*/> */}
        </>
    );
};

// interface HamburgerNavProps{
//     handleMenuMouseEnter: () => void;
//     handleMenuMouseLeave: () => void;
// }

// const HamburgerNav:React.FC<HamburgerNavProps> = ({handleMenuMouseEnter, handleMenuMouseLeave}) => {
//     DUMB_ARRAY.map((item) => console.log(item))
//     return(
//         <div
//             onMouseEnter={handleMenuMouseEnter}
//             onMouseLeave={handleMenuMouseLeave}
//             className="absolute flex flex-row min-h-[200px] top-[56px] left-0 z-[1200] bg-white rounded-md shadow-specific"
//         >
//             <div className="flex flex-col w-auto pb-[12px] mt-[15px] w-[290px]">
//             {/* <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px] w-[275px]"> */}
//                 <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250 pl-[24px] pb-[10px]">
//                     Kategorie
//                 </div>
//                 {/* {Object.keys(DUMB_DATA.categories).map((item) => (
//                     console.log(item)))
//                 }   */}
//                 <div className="min-w-full">
//                     <ul>
//                         {DUMB_ARRAY.map((item, index) => (
//                               <li key={index} className="flex flex-row items-center justify-between h-[30px] w-full hover:bg-gray-100 pl-[24px] pr-[10px]">
//                                   <Icon name="TvIcon" className="grow-0 mr-[14px]" />
//                                   <div className="flex grow justify-start">
//                                       {item.name}
//                                   </div>
//                                   <div className="flex justify-end">
//                                       <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
//                                   </div>
//                               </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex flex-col">
//                 <HamburgerSubNav />
//             </div>
//         </div>
//     )
// }

// const HamburgerSubNav:React.FC = () => {
//     const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//     return(
//         <div className="h-[400px] w-[665px] flex flex-col">
//             <div className="flex flex-col w-auto pb-[12px] mt-[15px] w-[290px]">
//             {/* <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px] w-[275px]"> */}
//                 <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250 pl-[24px] pb-[10px]">
//                     Kategorie
//                 </div>
//                 <ul>
//                     <li className="flex flex-row items-center justify-between h-[30px] w-[290px] pl-[24px] w-full hover:bg-gray-100">
//                         <div className="flex grow justify-start">
//                             Laptopy i komputery
//                         </div>
//                         <div className="flex justify-end">
//                             <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//             <div className="flex-grow">

//             </div>
//         </div>
//     )
// }

export default HamburgerMenu;
