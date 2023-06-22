import DesktopNav from "@/common/components/Footer/DesktopNav";
import MobileNav from "@/common/components/Footer/MobileNav";
import {FooterNavigationSection} from "@/types/global";


// interface NavigationItem {
//     name: string;
//     link: string;
// }
//
// interface NavigationSection {
//     title: string;
//     list: NavigationItem[];
// }


const FooterNav: React.FC<{navigation: FooterNavigationSection[]}> = ({navigation}) => {
    return(
        <>
            <DesktopNav navigation={navigation}/>
            <MobileNav navigation={navigation}/>
        </>
    )
}


export default FooterNav;