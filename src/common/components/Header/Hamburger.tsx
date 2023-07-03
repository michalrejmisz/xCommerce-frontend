import clsx from "clsx";
import Icon from "@/common/components/UI/icons/Icon";
import React from "react";

const Hamburger: React.FC = () => {
    return(
        <>
            {/*<div*/}
            {/*    className={clsx({*/}
            {/*        "group/hamburger" : true,*/}
            {/*        "h-[56px] cursor-pointer absolute top-0 left-0 items-center hover:shadow-specific hover:outline-2 hover:rounded-lg " : true,*/}
            {/*        "transition-opacity transition-transform duration-500" : true,*/}
            {/*        "scale-100 opacity-100" : !isOnTop,*/}
            {/*        "scale-0 opacity-0" : isOnTop,*/}
            {/*    })}*/}
            {/*>*/}
            {/*    <div className="flex items-center h-full min-w-[88px]">*/}
            {/*        <div className="group-hover/hamburger:bg-white bg-gray-50 rounded-lg py-[4px] px-[12px]">*/}
            {/*            <Icon name="HamburgerMenuIcon" size={32}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="flex flex-col xl:hidden cursor-pointer items-center justify-center">
                <div className="md:px-[44px] h-[30px]">
                    <Icon name="HamburgerMenuIcon" size={32}/>
                </div>
                <span className="text-[11px] leading-[12px]">Menu</span>
            </div>
        </>

    )
}

export default Hamburger;