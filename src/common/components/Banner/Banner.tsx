import React, { useState } from "react"
import { UnstyledButton } from "@mantine/core";
import { Image } from "@/types/global";
import { Carousel, Embla } from '@mantine/carousel';

// TODO
// Add more responsive styling

const mockupData = [
    {id: 12, name: "komponenty do 51% taniej", img: "https://cdn.x-kom.pl/i/img/banners/normal,,93a361d5a95e4b4bbe79e72b7d058a19.jpg?filters=trim", link: " "},
    {id: 23, name: "laptopy z rabatem do 1000zł", img: "https://cdn.x-kom.pl/i/img/banners/normal,,55244ada67104a3ea071ed882c0dd44a.jpg?filters=trim", link: " "},
    {id: 34, name: "komputery SMX", img: "https://cdn.x-kom.pl/i/img/banners/normal,,730ad6be8bc1418d9cb5a129239ff891.jpg?filters=trim", link: " "},
    {id: 45, name: "Lenovo z LEGO w prezencie", img: "https://cdn.x-kom.pl/i/img/banners/normal,,6e229128416b4420baf63a43f25eba08.jpg?filters=trim", link: " "},
    {id: 5, name: "LEGO® z rabatem 10%", img: "https://cdn.x-kom.pl/i/img/banners/normal,,021dd889d06e463faf5ff74436c9e96b.jpg?filters=trim", link: " "},
]

const mockupData2 = [
    {id: 1, name: "fitbit", link: " "},
    {id: 2, name: "Microsoft", link: " "},
    {id: 3, name: "Sunno", link: " "},
    {id: 4, name: "CAT", link: " "},
    {id: 5, name: "Jabra", link: " "},
    {id: 6, name: "Samsung", link: " "},
    {id: 7, name: "Motorola", link: " "},
    {id: 8, name: "Pokaż wszystkie(16)", link: " "},
]

interface SingleBanner{
    id: string;
    isActive: boolean;
    img: string;
    name: string;
    link?: string;
    onClick: () => void;
}

interface BannerComponentProps{
    banners: Array<SingleBanner>;
}



const Banner: React.FC<BannerComponentProps> = ({ banners= mockupData }) => {
    const [activeButton, setActiveButton] = useState<string | null>("0");
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleButtonClick = (index: string) => {
        setActiveButton(index);
        embla.scrollTo(index)
    }

    const handleSlideChange = (index: string) => {
        setActiveButton(index)
    }

    return(
        <div className="flex flex-col xl:mb-[24px] bg-white">
            <div className="flex">
                    <Carousel
                        className="block relative rounded-[20px] xxl:max-h-[315px] xxl:h-[315px] xl:max-h-[253px] xl:h-[253px] md:max-h-[250px] md:h-[250px]"
                        getEmblaApi={setEmbla}
                        onSlideChange={handleSlideChange}
                        styles={{
                            viewport: {
                                height: "100%",
                            },
                            container: {
                                height: "100%",
                            }
                        }}
                    >
                        {banners.map((banner, index) => (
                            <Carousel.Slide className=" h-full w-full">
                                <img
                                    key={banner.id}
                                    src={banner.img}
                                    className="block top-0 left-0 object-left-top rounded-[20px] object-cover h-full w-full"
                                />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
            </div>
            <BannerNavbar banners={banners} activeButton={activeButton} handleButtonClick={handleButtonClick}/>
        </div>
    );
}


const BannerNavbar: React.FC<BannerComponentProps & { activeButton: string | null, handleButtonClick: (buttonId: string) => void }> = ({ banners, activeButton, handleButtonClick }) => {
    return(
        <div className="flex mx-[20px] w-auto items-center justify-around relative">
            {banners.map((banner, index) => (
                <BannerNavbarButton
                    key={banner.id}
                    isActive={activeButton === index}
                    name={banner.name}
                    onClick={() => handleButtonClick(index)}
                />
            ))}
        </div>
    )
}

const BannerNavbarButton: React.FC<SingleBanner & { onClick: () => void }> = ({isActive, name, link, onClick}) => {
    return(
        <UnstyledButton
            onClick={onClick}
            className={`flex relative h-[40px] w-full items-center justify-center items-center hover:bg-gray-100 hover:rounded-b-md after:banner-button-active ${isActive ? 'font-bold color-black' : ''}`}
        >
            <div className={`flex w-full h-full justify-center items-center inline-block text-ellipsis after:banner-button-active ${isActive ? 'after:banner-button-active2' : ''}`}>
                {name}
            </div>
        </UnstyledButton>
    )
}

export default Banner;
