import { Inter } from 'next/font/google'
import { Image } from "@mantine/core";
import Banner from "@/common/components/Banner/Banner";
import ProductCard from "@/common/components/ProductsGrid/ProductCard";
import ProductsGrid from "@/common/components/ProductsGrid/PromotionalGrid";
import PromotionalGrid from "@/common/components/ProductsGrid/PromotionalGrid";
import CardsCarousel from "@/common/components/CardsCarousel/CardsCarousel";
import React from "react";

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



export default function Home() {
  return (
    <div className="container">
        {/*<div className="bg-gray-75">*/}
            {/*<div className="bg-white">*/}
                {/*<div className="container">*/}
                    <Banner/>
                {/*</div>*/}
            {/*</div>*/}

            {/*<div className="container bg-white">*/}
                <PromotionalGrid/>
            {/*</div>*/}

            <div className="mt-[100px]">
                <CardsCarousel items={ITEMS} title="Wybrane dla Ciebie" subtitle="Na podstawie ostatnio oglądanych produktów" link="/test2"/>
                {/*<CardsCarousel items={ITEMS} title="Promocje" link="/test2"/>*/}
                {/*<CardsCarousel items={ITEMS} title="Ostatnio oglądane" link="/test2"/>*/}
                {/*<CardsCarousel items={ITEMS} title="Strefa Marek"/>*/}
                {/*<CardsCarousel items={ITEMS} subtitle="Strefa Marek"/>*/}
                {/*<CardsCarousel items={ITEMS}/>*/}
            </div>
        {/*</div>*/}

    </div>
  )
}
