import { Inter } from 'next/font/google'
import { Image } from "@mantine/core";
import Banner from "@/common/components/Banner/Banner";
import ProductCard from "@/common/components/ProductsGrid/ProductCard";
import ProductsGrid from "@/common/components/ProductsGrid/ProductsGrid";
export default function Home() {
  return (
    <div>
       <Banner/>
       <ProductsGrid/>
        2
        {/*<div className="w-[750px]">*/}
        {/*    <Banner />*/}
        {/*</div>*/}
    </div>
  )
}
