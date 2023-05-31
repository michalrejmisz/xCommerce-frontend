import React from "react";
import HoverCard from "@/common/components/UI/HoverCard";
import Icon from "@/common/components/UI/icons/Icon";
import { UnstyledButton } from "@mantine/core";

// TODO
// Change ShoppingCartIcon color from hardcoded #hex to global color from tailwind.config
// Fix Icon color


const ProductCard: React.FC = () => {
    return(
        <div className="group/item flex min-w-[100px] min-h-[100px] mb-[22px] xxl:mb-[32px] px-[8px] ">
            <HoverCard className="flex flex-col justify-center align-center p-[12px]">
                <div className="flex flex-row justify-between w-full h-[20px] mb-[5px]">
                    <span className="rounded-[512px] border-solid border-[1px] border-gray-border py-[2px] px-[8px] truncate text-gray-banner-font text-[11px] leading-[12px] inline-block align-baseline">
                        Promocja
                    </span>
                    <UnstyledButton className="opacity-0 group-hover/item:transition-hover flex justify-center items-center w-[32px] h-[32px] rounded-full hover:bg-gray-banner-hover-button z-0" >
                        <span className="w-[20px] h-[20px] flex justify-center items-center">
                            <Icon name="HeartIcon" className="z-1" size={24}/>
                        </span>
                    </UnstyledButton>
                </div>
                <div className="mt-[5px]">
                    <span>
                        <img
                            src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_20_13_36_11_611_00.jpg"
                            loading="lazy" alt="Smartfon / Telefon Samsung Galaxy M13 4/64GB Green"
                            className="w-full h-full object-contain"
                        />
                    </span>
                </div>
                <div className="mt-[5px]">
                    <h3 className="max-h-[40px]">
                        <span className="line-clamp-2 text-ellipsis">
                            Lenovo Legion 5‑17 Ryzen 7 5800H/16GB/512/Win11 RTX3060 144Hz
                        </span>
                    </h3>
                </div>
                <div className="flex items-end h-[36px]">
                    <div className="flex flex-row justify-between w-full">
                        <span className="text-left">
                            799,00 zł
                        </span>
                        <UnstyledButton className="w-[32px] h-[32px] flex items-center justify-center invisible border-[1px] border-green-cart border-solid rounded-full group-hover/item:visible  hover:bg-green-cart z-0 group/cart">
                            <span className="w-[20px] h-[20px]">
                                <Icon name="ShoppingCartPlusIcon" size={20} className={"text-[#119E00FF] group-hover/cart:text-[#FFFFFF]"}/>
                                {/*<Icon name="ShoppingCartPlusIcon" size={20}  color="#119E00FF" className={"text-[#119E00FF] group-hover/cart:text-[#FFFFFF]"}/>*/}
                                {/*<Icon name="ShoppingCartPlusIcon" size={20} color="#119E00FF" hoverColor="#ffffff"/>*/}
                            </span>
                            {/*<Icon name="ShoppingCartPlusIcon" size={20} color="#119E00FF" className="hover:text-red"/>*/}
                        </UnstyledButton>
                    </div>
                </div>
            </HoverCard>
        </div>
    )
}

export default ProductCard;