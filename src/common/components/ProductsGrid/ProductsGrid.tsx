import React from "react";
import ProductCard from "@/common/components/ProductsGrid/ProductCard";

const ProductsGrid: React.FC = () => {
    return(
        <div className="flex flex-col xl:flex-row">
        {/*<div className="grid grid-col-1 xl:grid-col-2">*/}
            <div className="basis-full xl:basis-1/3">
                <div className="w-full min-h-[100px] bg-red-100">
                    x
                </div>
                {/* Content for the first column */}
            </div>
            <div className="basis-full xl:basis-2/3">
                {/* Content for the second column */}
                <div className="grid grid-cols-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default ProductsGrid;