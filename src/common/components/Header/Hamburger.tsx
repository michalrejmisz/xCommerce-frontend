import clsx from "clsx";
import Icon from "@/common/components/UI/icons/Icon";
import React, {useState} from "react";

interface HamburgerProps{
    windowWidth: number;
    isOnTop: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({windowWidth, isOnTop}) => {
    const [showBackdrop, setShowBackdrop] = useState(false)

    const handleMouseEnter = () => {
        setShowBackdrop(true)
    }

    const handleMouseLeave = () => {
        setShowBackdrop(false)
    }


    return(
        <>
            {windowWidth >= 1080 && (
                <>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
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
                    {/* Hover backdrop*/}
                    <div
                        className={clsx({
                            "fixed top-[56px] left-0 h-[0px] w-full overflow-y-auto overflow-x-hidden outline-none bg-black/70 z-[400]" :  true,
                            "transition-opacity ease-in-out duration-500 opacity-0" : true,
                            "opacity-100 h-full": showBackdrop
                        })}
                    />

                    {showBackdrop && <HamburgerNav handleMenuMouseEnter={handleMouseEnter} handleMenuMouseLeave={handleMouseLeave}/>}
                </>
            )}

            {windowWidth < 1080 && (
                <div
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="flex flex-col xl:hidden cursor-pointer items-center justify-center z-[1000]"
                >
                    <div className="md:px-[44px] h-[30px]">
                        <Icon name="HamburgerMenuIcon" size={32}/>
                    </div>
                    <span className="text-[11px] leading-[12px]">Menu</span>
                </div>
            )}

            {/* Hover backdrop*/}
            {/*<div*/}
            {/*    className={clsx({*/}
            {/*        "fixed top-[72px] left-0 h-[0px] w-full overflow-y-auto overflow-x-hidden outline-none bg-black/70 z-[400]" :  true,*/}
            {/*        "transition-opacity ease-in-out duration-500 opacity-0" : true,*/}
            {/*        "opacity-100 h-full": showBackdrop*/}
            {/*    })}*/}
            {/*/>*/}
        </>

    )
}

interface HamburgerNavProps{
    handleMenuMouseEnter: () => void;
    handleMenuMouseLeave: () => void;
}

const HamburgerNav:React.FC<HamburgerNavProps> = ({handleMenuMouseEnter, handleMenuMouseLeave}) => {
    return(
        <div
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            className="absolute w-[275px] h-[200px] top-[56px] left-0 z-[1200] bg-red-200 rounded-md shadow-specific"
        >
            <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px]">
                <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250">
                    Kategorie
                </div>
                <div>
                    <ul>
                        <li className="flex flex-row items-center justify-between h-[48px] w-full">
                            <Icon name="TvIcon" className="grow-0 mr-[14px]" />
                            <div className="flex grow justify-start">
                                Laptopy i komputery
                            </div>
                            <div className="flex justify-end">
                                <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const HamburgerSubNav:React.FC = () => {
    return(
        <div>
            Test
        </div>
    )
}

export default Hamburger;