import React from "react";
import { IconHeadset, IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { UnstyledButton } from "@mantine/core";
import Icon from "@/common/components/UI/icons/Icon";

interface CategoryItemProps{
    name: String;
    icon?: React.ReactNode;
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

const CategoryItem: React.FC<CategoryItemProps> = ({name, icon}) => {
    return(
        <li className="flex w-full hover-button px-[12px]">
          <UnstyledButton className="flex flex-row justify-center items-center h-[48px] w-min">
              <div className="max-[1200px]:hidden xxl:flex mr-[8px]">
                  {icon}
              </div>
              <div className="text-[13px] leading-[16px]">{name}</div>
          </UnstyledButton>
        </li>
    )
}

export default function CategoryNav(){
    return(
        <nav className="bg-gray-50 shadow-md">
            {/* TODO - add gray bars that overflow main wrapper */}
            {/*<div className="bg-gray-50 h-12 absolute -top-1/2 -left-1/2 w-[200%] z-[-1]">*/}
            <ul className="container flex w-full pt-px">
                {/*<div className="container">*/}
                {mockupData.map((item, index) =>
                    <CategoryItem key={index} name={item.name} icon={item.icon}/>
                )}
                {/*</div>*/}
            </ul>
        </nav>
    );
}