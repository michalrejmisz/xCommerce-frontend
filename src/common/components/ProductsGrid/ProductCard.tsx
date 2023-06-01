import React from "react";
import HoverCard from "@/common/components/UI/HoverCard";
import Icon from "@/common/components/UI/icons/Icon";
import { UnstyledButton } from "@mantine/core";

// TODO
// Change ShoppingCartIcon color from hardcoded #hex to global color from tailwind.config
// Fix Icon color


const ProductCard: React.FC = () => {
    return(
        <div className="group/item flex mb-[22px] xxl:mb-[32px] px-[8px] ">
        {/*<div className="group/item flex min-w-[100px] min-h-[500px] mb-[22px] xxl:mb-[32px] px-[8px] ">*/}
            <HoverCard className="flex flex-col justify-center align-center relative">
                <div className="flex flex-row justify-between w-full h-[20px] mb-[5px] xl:pl-[12px] xl:top-[12px] top-[-12px] absolute">
                    <span className="rounded-[512px] border-solid border-[1px] border-gray-border py-[2px] px-[8px] truncate text-gray-banner-font text-[11px] leading-[12px] inline-block align-baseline">
                        Promocja
                    </span>
                </div>
                <UnstyledButton className="hidden opacity-0 group-hover/item:transition-hover xl:flex justify-center items-center w-[32px] h-[32px] rounded-full hover:bg-gray-banner-hover-button z-0 absolute xl:top-[12px] xl:right-[12px] top-[4px] right-[5px]" >
                    <span className="w-[20px] h-[20px] flex justify-center items-center">
                        <Icon name="HeartIcon" className="z-1" size={24}/>
                    </span>
                </UnstyledButton>
                <div className="h-[125px] mt-[28px] xl:mt-[32px] xl:h-[130px]">
                    <span className="pt-[16px]">
                        <img
                            src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_20_13_36_11_611_00.jpg"
                            loading="lazy" alt="Smartfon / Telefon Samsung Galaxy M13 4/64GB Green"
                            className="w-full h-full object-contain"
                        />
                    </span>
                </div>
                <div className="mt-[5px] md:mx-[12px]">
                    <h3 className="max-h-[40px]">
                        <span className="line-clamp-2 text-ellipsis">
                            Lenovo Legion 5‑17 Ryzen 7 5800H/16GB/512/Win11 RTX3060 144Hz
                        </span>
                    </h3>
                </div>
                <div className="flex flex-col justify-end h-[36px] xl:mx-[12px] xl:mt-[4px] xl:mb-[8px] md:mx-[12px]">
                     <span className="whitespace-nowrap block text-[13px] leading-[16px] text-gray-400 font-normal line-through">
                        799,00 zł
                    </span>
                     <span className="text-base text-[14px] leading-[20px] text-gray-700 font-normal no-underline">
                        799,00 zł
                    </span>
                </div>
                <UnstyledButton className="absolute bottom-[10px] right-[10px] w-[32px] h-[32px] hidden xl:flex items-center justify-center invisible border-[1px] border-green-cart border-solid rounded-full group-hover/item:visible  hover:bg-green-cart z-0 group/cart">
                    <span className="w-[20px] h-[20px]">
                        <Icon name="ShoppingCartPlusIcon" size={20} className={"text-[#119E00FF] group-hover/cart:text-[#FFFFFF]"}/>
                        {/*<Icon name="ShoppingCartPlusIcon" size={20}  color="#119E00FF" className={"text-[#119E00FF] group-hover/cart:text-[#FFFFFF]"}/>*/}
                        {/*<Icon name="ShoppingCartPlusIcon" size={20} color="#119E00FF" hoverColor="#ffffff"/>*/}
                    </span>
                    {/*<Icon name="ShoppingCartPlusIcon" size={20} color="#119E00FF" className="hover:text-red"/>*/}
                </UnstyledButton>
            </HoverCard>
        </div>
    )
}

export default ProductCard;