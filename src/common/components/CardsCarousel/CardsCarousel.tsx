import React, {ReactNode} from "react";
import Link from 'next/link';
import { Carousel, Embla } from '@mantine/carousel';
import { UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import {useViewportSize} from "@mantine/hooks";

import ProductCard from "@/common/components/ProductsGrid/ProductCard";

interface ProductsCarouselProps{
    items: ReactNode[];
    title?: string;
    subtitle?: string;
    link?: string;
}

const CardsCarousel: React.FC<ProductsCarouselProps>  = ({items, title, subtitle, link}) => {
    const { width } = useViewportSize();

    const slidePercentSizes = {
        "1080": "16.66%",
        "900": "20%",
        "520": "25%",
        "default": "40%"
    };

    const slidePercentSize = slidePercentSizes[width >= 1080 ? "1080" : width >= 900 ? "900" : width >= 520 ? "520" : "default"];


    return(
        <div className="xl:border-t xl:border-gray-test xl:border-solid">
            <div className="flex justify-between xl:mt-[12px]">
                <div className="flex flex-col">
                    {title && <h2 className="text-[26px] leading-[32px] font-bold font-lato">{title}</h2>}
                    { subtitle && <span className="text-[16px] leading-[24px] font-lato text-gray-250">{subtitle}</span>}
                </div>
                { link && (
                    <div className="hidden md:flex">
                        <Link
                            href={link}
                            className="flex hover:bg-gray-50 hover:rounded-full h-[36px] text-gray-300 pl-[16px] pr-[12px] xl:mr-[-20px] justify-center items-center font-lato"
                        >
                            Pokaż wszystkie
                            <span>
                                <IconChevronRight size={20} stroke={1}/>
                            </span>
                        </Link>
                    </div>
                )}
            </div>
            <Carousel
                align="start"
                slideSize={slidePercentSize}
                withControls={width >= 1080}
                controlSize={40}
                className="pt-[8px] pb-[24px] xl:pb-[0px] bg-white"
            >
                    {items.map((item) => (
                        <Carousel.Slide>
                            <ProductCard {...item} />
                        </Carousel.Slide>
                    ))}
            </Carousel>
            { link && (
                <div className="flex md:hidden border-t border-gray-test border-solid py-[8px] justify-center items-center">
                    <div className="flex">
                        <Link
                            href={link}
                            className="flex hover:bg-gray-50 hover:rounded-full h-[36px] text-gray-300 pl-[16px] pr-[12px] xl:mr-[-20px] justify-center items-center font-lato"
                        >
                            Pokaż wszystkie
                            <span>
                                <IconChevronRight size={20} stroke={1}/>
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardsCarousel;