import Link from "next/link";

import ContactSection from "@/common/components/Footer/ContactSection";
import {FooterNavigationSection} from "@/types/global";


const DesktopNav: React.FC<{navigation: FooterNavigationSection[]}> = ({navigation}) => {
    return(
        <div className="hidden md:flex flex-row justify-between">
            <div className="flex flex-row shrink grow-[3]">
                {navigation.map((section, index) => (
                    <div className="flex flex-col shrink grow" key={index}>
                        <h3 className="text-[16px] leading-[24p] font-bold mb-[16px]">{section.title}</h3>
                        <ul>
                            {section.list?.map((item, index) => (
                                <li className="text-gray-300 text-[14px] leading-[20px] mb-[16px] hover:underline" key={item.link}>
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <ContactSection />
        </div>
    )
}

export default DesktopNav;