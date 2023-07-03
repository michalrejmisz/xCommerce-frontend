import
    React, {
    useState,
    useRef,
    useEffect
} from "react";
import { UnstyledButton } from "@mantine/core";
import clsx from "clsx";

import Icon from "@/common/components/UI/icons/Icon";

interface CategoryItemProps{
    name: String;
    icon?: React.ReactNode;
}

interface CategoryNavProps{
    isShow: boolean;
}

const mockupData = [
    {name: "Laptopy i komputery", icon: <Icon name="PcIcon"/>},
    {name: "Smartfony i smartwatche", icon: <Icon name="SmartphoneIcon"/>},
    {name: "Gaming i Streaming", icon: <Icon name="PadIcon"/>},
    {name: "Podzespoły komputerowe", icon: <Icon name="ProcessorIcon"/>},
    {name: "Urządzenia peryferyjne", icon: <Icon name="PrinterIcon"/>},
    {name: "TV i audio", icon: <Icon name="TvIcon"/>},
    {name: "Smarthome i lifestyle", icon: <Icon name="SmarthomeIcon"/>},
    {name: "Akcesoria", icon: <Icon name="PeripheryIcon"/>},
    {name: "Trendy, promocje i nowości", icon: <Icon name="DiscountIcon" color="#DB0054"/>},
]

const CategoryNav: React.FC<CategoryNavProps> = ({isShow}) => {
    const [showBackdrop, setShowBackdrop] = useState(false)

    const handleMouseEnter = () => {
        setShowBackdrop(true)
    }

    const handleMouseLeave = () => {
        setShowBackdrop(false)
    }

    return(
        <>
            <nav className={clsx({
                    // "bg-gray-50 shadow-md overflow-visible transition-category-nav relative z-[1000]" : true,
                    // "category-nav-show" : isShow,
                    // "category-nav-hide h-[0px]" : !isShow,
                    "bg-gray-50 shadow-md overflow-visible relative z-[1000]" : true,
                    "transition duration-300" : true,
                    "translate-y-0 scale-y-100 opacity-100" : isShow,
                    "-translate-y-1/2 scale-y-0 opacity-0 hidden" : !isShow,
                })}
            >
                <ul
                    className="container flex w-full pt-px bg-gray-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {mockupData.map((item, index) =>
                        <CategoryItem key={index} name={item.name} icon={item.icon}/>
                    )}
                </ul>
            </nav>

            {/* Hover backdrop*/}
            <div
                className={clsx({
                    "fixed top-[72px] left-0 h-[0px] w-full overflow-y-auto overflow-x-hidden outline-none bg-black/70 z-[400]" :  true,
                    "transition-opacity ease-in-out duration-500 opacity-0" : true,
                    "opacity-100 h-full": showBackdrop
                })}
            />
        </>
    );
}


const CategoryItem: React.FC<CategoryItemProps> = ({name, icon}) => {
    const itemRef = useRef(null);
    const [position, setPosition] = useState<'left' | 'right'>('left');

    // Calculate SubNavigation direction depending on screen width
    useEffect(() => {
        const windowWidth = window.innerWidth;
        const itemPositionX = itemRef.current.getBoundingClientRect().x
        const newPosition = windowWidth / 2 > itemPositionX ? 'left' : 'right';
        setPosition(newPosition)
    }, [])

    return(
        <li
            ref={itemRef}
            className="group/item flex w-full hover-button px-[12px] relative hover:overflow-visible z"
        >
          <UnstyledButton className="flex flex-row justify-center items-center h-[48px] w-min">
              <div className="max-[1200px]:hidden xxl:flex mr-[8px]">
                  {icon}
              </div>
              <div className="text-[13px] leading-[16px]">{name}</div>
          </UnstyledButton>
          <SubNavigation position={position}/>
        </li>
    )
}

interface SubNavigationProps{
    position: 'left' | 'right'
}

const SubNavigation: React.FC<SubNavigationProps> = ({position}) => {
    return(
        <div
            className={clsx({
                "absolute right-0 top-0 mt-[48px] z-[1000] w-[660px] h-[445px] hidden bg-white rounded-b-md group-hover/item:flex" : true,
                "left-0 rounded-tr-md" : position == 'left',
                "right-0 rounded-tl-md" : position == 'right',
            })}
        >
            <div className="min-w-[312px] w-full h-full bg-red-100">
                <ul>
                    <li>
                        Test
                    </li>
                </ul>
            </div>
            <div className="w-full relative overflow-visible">
                <img
                    className="max-w-none"
                    src="https://cdn.x-kom.pl/i/img/banners/normal,,51b45e8001544cd6a1586c75f42338f9.png?filters=trim"
                />
            </div>
        </div>
    )
}

export default CategoryNav;