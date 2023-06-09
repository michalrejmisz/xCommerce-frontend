import CategoryNav from "@/common/components/CategoryNav/CategoryNav";
import {Button} from "@mantine/core"
import SearchBar from "@/common/components/SearchBar/SearchBar";
import Logo from "@/common/components/UI/Logo";
import HeaderActionButtons from "@/common/components/HeaderActionButtons/HeaderActionButtons";
import Icon from "@/common/components/UI/icons/Icon"

export default function Header(){
    return(
        <header className="mb-[15px]">
            <div className="container flex flex-row h-[72px]">
                <Logo className="xl:pl-[16px]"/>
                <SearchBar/>
                <HeaderActionButtons/>
            </div>
            <CategoryNav/>
        </header>
    )
}

