import {IconChevronDown} from "@tabler/icons-react";
import {useState} from "react";
import clsx from "clsx";
import Link from "next/link";

import ContactSection from "@/common/components/Footer/ContactSection";
import { FooterNavigationSection } from "@/types/global";


const MobileNav: React.FC<{navigation: FooterNavigationSection[]}> = ({navigation}) => {
    return(
        <div className="md:hidden">
            <ContactSection />
            <div className="flex ">
                <div className="w-full">
                    {navigation.map((section, index) => (
                        <MobileNavSection title={section.title} list={section.list} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

const MobileNavSection: React.FC<FooterNavigationSection> = ({title, list}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div
            className="first:border-t flex flex-col border-b border-gray-test hover:cursor-pointer"
            onClick={toggleList}
        >
            <div className="flex flex-row justify-between items-center h-[64px]">
                <h2 className="text-[18px] leading-[24px] font-bold">{title}</h2>
                <span
                    className={clsx({
                        'transition-rotate-icon ml-[8px]': true,
                        'rotate-0' : isOpen,
                        'rotate-[-180deg]' : !isOpen,
                    })}
                >
                    <IconChevronDown className="text-gray-300"/>
                </span>
            </div>
            <div
                className={clsx({
                    'transition-unfold-list overflow-hidden': true,
                    'max-h-[500px]': isOpen,
                    'max-h-[0px] ' : !isOpen,
                })}
            >
                <ul>
                    {list.map((item, index) => (
                        <li className="text-gray-300 text-[16px] leading-[24px] py-[12px] px-[16px] hover:underline " key={item.link}>
                            <Link href={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileNav;