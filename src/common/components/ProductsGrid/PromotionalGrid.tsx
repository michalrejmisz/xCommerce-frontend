import React, { ReactNode } from "react";
import { useViewportSize } from '@mantine/hooks';
import { Carousel, Embla } from '@mantine/carousel';

import ProductCard from "@/common/components/ProductsGrid/ProductCard";
import Banner from "@/common/components/Banner/Banner";
import CardsCarousel from "@/common/components/CardsCarousel/CardsCarousel";


interface PromotionalGridProps {
    title: string;
    banner: ReactNode;
    items: ReactNode[];
}

const ITEMS = [
    {id: "xyz", title: "Microsoft Surface Laptop 5 13\" i5/8GB/256GB/Win11 (Platynowy)", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_21_9_55_43_818_00.jpg"}, price: "4999,00 zł"},
    {id: "xyz", title: "Acer Aspire Vero i5-1235U/12GB/512/Win11 Evo Czarny", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_2_9_54_17_822_01.jpg"}, price: "2599,00 zł"},
    {id: "xyz", title: "HP Reverb G2HP Reverb G2HP Reverb G2HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
    {id: "xyz", title: "HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
    {id: "xyz", title: "HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
    {id: "xyz", title: "HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
    {id: "xyz", title: "HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
    {id: "xyz", title: "HP Reverb G2", link: "/", img: {link: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_17_13_18_36_219_03.jpg"}, price: "3199,00 zł"},
]

const PromotionalGrid: React.FC<PromotionalGridProps> = ({ title, banner, items }) => {
    const { width } = useViewportSize();

    return(
        <div className="flex flex-col xl:flex-row">
        {/*<div className="grid grid-col-1 xl:grid-col-2">*/}
            <div className="xl:basis-1/3 xxl:pr-[56px] xl:pr-[32px] xl:pb-[32px] xl:pt-[0px] xl:pl-[0px] md:px-[24px] md:pt-[8px] md:pb-[24px] mb-[16px] xl:mb-[0px] bg-white">
                <div className="w-full min-h-[100px] bg-red-100">
                    {/* Content for the first column */}
                    <div className="w-full h-[200px] bg-red"/>
                    {/*<Banner/>*/}
                </div>
            </div>
            <div className="xl:basis-2/3 xl:border-t xl:border-gray-test xl:border-solid bg-white">
                <div className="flex xl:pt-[8px]">
                    <h2 className="xl:mt-[12px] text-[26px] leading-[32px] font-bold font-lato">Polecamy</h2>
                </div>
                <div className="xl:grid xl:grid-cols-4 xl:pb-[0px] pt-[8px] pb-[24px]">
                    {/* Content for the second column */}
                    {/* Grids or carousel depending on screen width*/}
                    {width >= 1080 ? (
                        ITEMS.map((item) => (
                            <ProductCard {...item} key={item.id}/>
                        ))
                    ) : (
                        <CardsCarousel items={ITEMS}/>
                    )}

                </div>
            </div>
        </div>
    )
}

export default PromotionalGrid;